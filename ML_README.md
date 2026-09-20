# ReviewLens Machine Learning Architecture (`backend/ml/`)

ReviewLens implements a modular, lightweight, and auditable local Machine Learning pipeline designed specifically for **evidence intelligence**, cross-source entity resolution, content clustering, and corroboration ranking.

---

## 1. Core ML Philosophy

ReviewLens operates under strict scientific and ethical constraints:
- **Corroboration Coverage, Never "Truth Score"**: ReviewLens evaluates *evidence density*, *cross-source corroboration*, and *source diversity*. It never purports to calculate a "truth probability" or determine whether an individual human opinion is "genuine" or "fake".
- **Zero Fabrication**: All evaluation metrics are derived directly from held-out benchmark datasets using standard evaluation libraries (`scikit-learn`, `numpy`), exported to [`models/reports/metrics.json`](file:///c:/Users/rajsa/Desktop/ReviewLens/models/reports/metrics.json).
- **Lightweight Local Execution**: The ML pipeline runs locally in Python without demanding heavy GPU hardware or external blackbox cloud inference APIs.

---

## 2. Pipeline Modules & Component Architecture

```
Raw Ingested Text
       │
       ▼
1. Preprocessing (`backend/ml/preprocessing.py`)
   ├── Unicode NFKD normalization
   ├── HTML/URL stripping
   ├── Tokenization & stopword handling
   └── Character 3-gram extraction
       │
       ├───────────────────────────────┐
       ▼                               ▼
2. Entity Resolution            3. Duplicate Clustering
   (`backend/ml/entity_resolution.py`)  (`backend/ml/similarity.py`)
   ├── Jaro-Winkler string similarity  ├── Hybrid Token Jaccard (50%)
   ├── Character 3-gram cosine TF-IDF  ├── Character 3-gram Overlap (50%)
   └── Canonical alias linking         └── Cluster representative extraction
       │                               │
       └──────────────┬────────────────┘
                      ▼
4. Aspect Classification (`backend/ml/aspect_classifier.py`)
   ├── Sublinear TF-IDF (1-2 n-grams, max 2500 features)
   ├── Multinomial Naive Bayes classifier
   └── Domain aspect spaces (Dining & Education)
                      │
                      ▼
5. Sentiment & Polarity Scorer (`backend/ml/sentiment.py`)
   ├── Calibrated domain sentiment lexicon
   ├── Contrastive discourse parsing ("but", "although", "however")
   └── Quad-polarity classification (positive, negative, mixed, neutral)
                      │
                      ▼
6. Contradiction Detection (`backend/ml/contradiction.py`)
   ├── Aspect-level polarity discordance grouping
   ├── Detection of opposing claims across independent sources
   └── Impartial ReviewLens synthesis (no side-taking)
                      │
                      ▼
7. Corroboration Coverage Ranker (`backend/ml/ranker.py`)
   ├── Cross-source corroboration density (35%)
   ├── Source diversity (20%)
   ├── Recency factor (20%)
   ├── Source relevance (25%)
   └── Duplicate & conflict penalty adjustment
```

---

## 3. Component Details

### A. Preprocessing (`backend/ml/preprocessing.py`)
- Standardizes text inputs into normalized ASCII/NFKD strings.
- Removes URLs, Markdown links, and HTML artifacts while preserving punctuation required for sentence boundary and sentiment analysis.
- Computes character 3-grams with boundary markers (`_word_`) for fuzzy string alignment.

### B. Entity Resolution (`backend/ml/entity_resolution.py`)
- **Task**: Maps noisy search mentions (e.g., `"caffe tonino cp"`, `"tonino italian restaurant"`) to canonical entity identities (`"Caffè Tonino"`).
- **Method**: Hybrid scoring combining Jaro-Winkler prefix-weighted string distance ($55\%$) and character 3-gram TF-IDF cosine similarity ($45\%$).
- **Threshold**: $0.72$ cutoff. Above threshold, mentions are linked; below threshold, entities are tagged as distinct.

### C. Duplicate & Similarity Clustering (`backend/ml/similarity.py`)
- **Task**: Clusters repetitive copy-pasted or slightly rephrased reviews into `"Highly similar content clusters"`.
- **Method**: Computes pairwise hybrid similarity:
  $$\text{Sim}(A, B) = 0.50 \times \text{Jaccard}_{\text{tokens}}(A, B) + 0.50 \times \text{Jaccard}_{\text{char3}}(A, B)$$
- **Threshold**: $0.38$ cutoff reliably separates paraphrased duplicates from distinct domain statements.

### D. Aspect Classification (`backend/ml/aspect_classifier.py`)
- **Task**: Classifies review statements into 8 domain aspects:
  - Dining: *Food & Taste*, *Ambience & Vibe*, *Pricing & Value*, *Service & Hospitality*
  - Education: *Coding Culture & Hackathons*, *Placements & ROI*, *Faculty & Curriculum*, *Campus & Infrastructure*
- **Model**: Multinomial Naive Bayes trained on sublinear TF-IDF unigram and bigram features.

### E. Sentiment & Polarity Analysis (`backend/ml/sentiment.py`)
- **Task**: Classifies evidence polarity into `positive`, `negative`, `mixed`, or `neutral` with calibrated confidence.
- **Method**: Domain-specific calibrated lexicon combined with contrastive discourse parsing. Conjunctions such as *"but"*, *"although"*, *"however"*, or opposing valence hits automatically trigger the nuanced `mixed` classification.

### F. Contradiction Detection (`backend/ml/contradiction.py`)
- **Task**: Detects when independent sources express materially opposing views regarding the same entity and aspect (e.g., high culinary praise alongside complaints about pricing or service).
- **Synthesis**: Rather than choosing which source is "truthful", it formulates an impartial ReviewLens synthesis explaining the divergence.

### G. Corroboration Coverage Ranking (`backend/ml/ranker.py`)
- Evaluates evidence corroboration coverage on a $0 - 100\%$ scale using four primary signals:
  1. **Corroboration Density**: Number of corroborating citations from independent authors.
  2. **Source Diversity**: Diversity across Open Data, Institutional, Public Discussion, and Web categories.
  3. **Recency**: Prioritizes current records over historic archives.
  4. **Duplicate Penalty**: Deducts points when review clusters show repetitive copy-paste behavior.

---

## 4. How to Train and Evaluate

```bash
# 1. Run model training pipeline
python -m backend.ml.train

# 2. Run comprehensive evaluation on held-out test splits
python -m backend.ml.evaluate
```

Evaluation outputs are automatically exported to [`models/reports/metrics.json`](file:///c:/Users/rajsa/Desktop/ReviewLens/models/reports/metrics.json).
