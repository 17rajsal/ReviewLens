import time
import asyncio
import logging
from typing import Dict, Any, Optional, Callable, TypeVar, Coroutine
from functools import wraps

logger = logging.getLogger("reviewlens.resilience")

T = TypeVar("T")

class RateLimiter:
    """
    Sliding-window in-memory rate limiter per connector to prevent HTTP 429 errors.
    """
    def __init__(self, max_requests: int = 30, window_seconds: float = 60.0):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.timestamps: list[float] = []
        self._lock = asyncio.Lock()

    async def acquire(self) -> bool:
        async with self._lock:
            now = time.time()
            # Prune timestamps outside the window
            self.timestamps = [t for t in self.timestamps if now - t < self.window_seconds]
            if len(self.timestamps) < self.max_requests:
                self.timestamps.append(now)
                return True
            return False

    def remaining(self) -> int:
        now = time.time()
        active = [t for t in self.timestamps if now - t < self.window_seconds]
        return max(0, self.max_requests - len(active))

    def get_info(self) -> Dict[str, Any]:
        return {
            "max_requests": self.max_requests,
            "window_seconds": self.window_seconds,
            "remaining": self.remaining()
        }


class ResponseCache:
    """
    In-memory TTL response cache for connector search and fetch queries.
    Prevents redundant API calls and respects third-party source quotas.
    """
    def __init__(self, default_ttl_seconds: int = 3600):
        self.default_ttl = default_ttl_seconds
        self._cache: Dict[str, Dict[str, Any]] = {}
        self._lock = asyncio.Lock()

    async def get(self, key: str) -> Optional[Any]:
        async with self._lock:
            entry = self._cache.get(key)
            if not entry:
                return None
            if time.time() > entry["expires_at"]:
                del self._cache[key]
                return None
            return entry["data"]

    async def set(self, key: str, data: Any, ttl_seconds: Optional[int] = None) -> None:
        async with self._lock:
            ttl = ttl_seconds if ttl_seconds is not None else self.default_ttl
            self._cache[key] = {
                "data": data,
                "expires_at": time.time() + ttl
            }

    async def clear(self) -> None:
        async with self._lock:
            self._cache.clear()


async def retry_with_backoff(
    coro_fn: Callable[..., Coroutine[Any, Any, T]],
    *args: Any,
    max_retries: int = 3,
    initial_delay: float = 0.5,
    backoff_factor: float = 2.0,
    **kwargs: Any
) -> Optional[T]:
    """
    Executes an async function with exponential backoff on transient network failures.
    """
    delay = initial_delay
    last_exception = None
    for attempt in range(1, max_retries + 1):
        try:
            return await coro_fn(*args, **kwargs)
        except Exception as e:
            last_exception = e
            if attempt == max_retries:
                logger.warning(f"Failed after {max_retries} attempts: {e}")
                break
            await asyncio.sleep(delay)
            delay *= backoff_factor
    return None
