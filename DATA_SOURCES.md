# ReviewLens Data Sources & Provenance Architecture (`DATA_SOURCES.md`)

ReviewLens adheres to an uncompromising, source-truthful data ingestion policy. We strictly use permitted public APIs, open datasets, and official developer endpoints. We never engage in indiscriminate web scraping, authentication bypass, or terms-of-service violations.

---

## 1. Permitted Public Data Sources

| Source | Category | Permitted Access Protocol | Primary Role in ReviewLens | Provenance & License |
| :--- | :--- | :--- | :--- | :--- |
| **OpenStreetMap (Overpass API)** | `OPEN DATA` | Public Overpass REST API (`https://overpass-api.de/api/interpreter`) | Real entity discovery, verified geographic coordinates, physical address, and amenity metadata. | Open Data Commons Open Database License (ODbL). Traceable node URLs: `https://www.openstreetmap.org/node/{id}`. |
| **Wikimedia / Wikipedia** | `INSTITUTIONAL SOURCE` | Official Wikipedia REST API (`https://en.wikipedia.org/w/api.php`) | Institutional, background, and architectural/founding context. | Creative Commons Attribution-ShareAlike (CC-BY-SA). Traceable article URLs: `https://en.wikipedia.org/wiki/{title}`. |
| **Reddit Public Discussions** | `PUBLIC DISCUSSION` | Official Reddit OAuth API (`https://oauth.reddit.com/search`) | Public consumer sentiment, student discussions, and peer community experiences. | Reddit Developer Terms. When API keys are not supplied in environment, cleanly reports `status: "unavailable"`. |
| **Public Web Search** | `PUBLIC WEB PAGE` | Configured via environment endpoints (SearXNG / public search API) | Public web documents and published editorial articles. | Verifiable public web URLs and publisher attribution. |
| **Verified Benchmark Archive** | `DEMO ARCHIVE` | Embedded local repository (`backend/connectors/local_archive.py`) | Deterministic demonstration and testing fallback for benchmark queries. | Clearly flagged with `demoMode: true` and explicit UI banner. |

---

## 2. Strict Compliance & Anti-Scraping Policies

1. **No Unpermitted Web Scraping**: ReviewLens does not scrape websites that prohibit automated retrieval, nor does it parse pages that require residential proxies or CAPTCHA solving.
2. **Access Control & Paywall Integrity**: ReviewLens never bypasses paywalls, logins, authentication tokens, or access restrictions.
3. **Respect for `robots.txt` and Rate Limits**: All connectors implement respectful timeouts (4 to 7 seconds), backoffs, and descriptive `User-Agent` headers (`ReviewLens/1.0 (evidence-intelligence; research-prototype)`).
4. **Source Truthfulness**:
   - OpenStreetMap data is used **exclusively** for real entity discovery and location metadata. It is **never** presented as subjective user-review evidence.
   - Wikipedia entries are used **exclusively** for institutional and historical background. They are **never** presented as customer or dining experiences.
   - User opinions are sourced strictly from public discussion channels (such as Reddit or public review forums).
5. **No Synthetic Mixing**: ReviewLens **never** silently mixes demo archive evidence into live research results. Live research results are tagged `LIVE RESEARCH`; archive results are tagged `DEMO ARCHIVE`.

---

## 3. Provenance Metadata Contract

Every evidence item retrieved and stored in ReviewLens includes:

```json
{
  "id": "ev-osm-928567979",
  "source": "open_data",
  "sourceCategory": "OPEN DATA",
  "sourceName": "OpenStreetMap (Overpass API)",
  "sourceDomain": "openstreetmap.org",
  "sourceUrl": "https://www.openstreetmap.org/node/928567979",
  "sourceTitle": "Caffè Tonino (Verified OpenStreetMap Place Record)",
  "excerpt": "OpenStreetMap Open Data Record: Located at Plaza Cinema Building, Connaught Place, New Delhi. Cuisine: italian;pizza;cafe...",
  "publishedAt": "Public Open Data Record",
  "retrievedAt": "2026-09-20T04:35:12.451Z",
  "authorRole": "OpenStreetMap Contributors (ODbL License)",
  "verificationHash": "osm-node-928567979",
  "relevanceScore": 94.0
}
```

If metadata is unavailable from a source (e.g., author username or publication timestamp), the system displays `"Not provided by source"` rather than fabricating details.
