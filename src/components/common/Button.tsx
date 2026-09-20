import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}, ref) => {
  const baseClasses = "relative inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7CFF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-xs px-3 py-1.5 rounded-full gap-1.5",
    md: "text-xs tracking-wide px-4 py-2.5 rounded-full gap-2",
    lg: "text-sm tracking-wide px-6 py-3.5 rounded-full gap-2.5"
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-[#18181B] hover:bg-[#27272A] text-white font-medium shadow-md shadow-zinc-900/10 hover:shadow-lg hover:shadow-zinc-900/15 active:bg-[#09090B]",
    secondary: "bg-white/90 hover:bg-white text-[#18181B] border border-zinc-200 hover:border-[#6B7CFF]/50 shadow-sm hover:shadow-md hover:shadow-zinc-900/5",
    ghost: "bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-900/[0.04] border border-transparent",
    icon: "p-2.5 bg-white/90 hover:bg-white text-zinc-700 hover:text-[#18181B] border border-zinc-200 hover:border-zinc-300 rounded-full shadow-sm",
    danger: "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 shadow-sm"
  };

  const isButtonDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      disabled={isButtonDisabled}
      aria-busy={isLoading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin text-current shrink-0" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
