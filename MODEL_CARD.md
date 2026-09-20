# Model Card: ReviewLens Evidence Intelligence Engine

## 1. Model Details
- **Organization**: ReviewLens Research Team
- **Model Family**: Multi-Stage Hybrid Evidence Intelligence Pipeline
- **Release Version**: 1.0.0
- **Release Date**: September 2026
- **Architecture**:
  - `AspectClassifier`: Multinomial Naive Bayes with sublinear TF-IDF (1-2 n-grams)
  - `SentimentAnalyzer`: Calibrated statistical domain lexicon + contrastive conjunction discourse parser
  - `EntityResolver`: Hybrid character 3-gram TF-IDF cosine similarity + Jaro-Winkler string distance
  - `DuplicateDetector`: Hybrid lexical token Jaccard + character 3-gram overlap clustering
  - `ContradictionDetector`: Aspect-level polarity discordance grouping with impartial ReviewLens synthesis
  - `CorroborationRanker`: Multi-signal evidence density and coverage ranking formula

---

## 2. Intended Use & Ethical Boundaries

### In-Scope Uses:
- Synthesizing public records and consumer discussions across permitted APIs.
- Resolving noisy query mentions to canonical geographic and institutional entities.
- Clustering near-duplicate statements to prevent repetitive copy-pasting from distorting consensus.
- Revealing balanced contradictions across independent perspectives.
- Measuring evidence density through *Corroboration Coverage*.

### Out-of-Scope & Prohibited Uses:
- **Never used to determine "Truth" or "Fake Reviews"**: ReviewLens does not claim omniscience. It cannot verify whether an anonymous reviewer actually visited an establishment or attended a university.
- **No Blackbox Accusations**: ReviewLens never labels any author or establishment as "fraudulent" or "fake". It labels content clusters neutrally as *"Highly similar content clusters"*.
- **No De-anonymization**: ReviewLens does not scrape private user profiles or attempt de-anonymization.

---

## 3. Training & Evaluation Datasets

All datasets represent authentic real-world domain expressions curated across Dining, Education, and Technology domains:
- **Aspect Dataset**: 80 labeled domain statements across 8 classes (10 samples per class).
  - Train split: 56 samples (70%)
  - Held-out test split: 24 samples (30%)
- **Sentiment Dataset**: 40 labeled statements across 4 classes (Positive, Negative, Mixed, Neutral).
  - Evaluated against held-out domain expressions.
- **Entity Resolution Dataset**: 19 canonical vs. noisy alias pairs with ground-truth match labels.
- **Duplicate Detection Dataset**: 6 duplicate vs. distinct statement pairs.
- **Ranking Benchmark**: Graded relevance query-document pairs evaluated using Information Retrieval metrics (NDCG@3, NDCG@5, MRR).

---

## 4. Quantitative Performance Metrics

Evaluated on held-out test splits without data leakage ([`models/reports/metrics.json`](file:///c:/Users/rajsa/Desktop/ReviewLens/models/reports/metrics.json)):

| Component | Task Family | Primary Metric | Measured Score | Secondary Metric | Measured Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aspect Classifier** | Multi-class NLP | **F1 (weighted)** | **0.5125** | Accuracy | 54.17% |
| **Sentiment Analyzer** | Polarity NLP | **F1 (weighted)** | **0.9143** | Accuracy | 91.67% |
| **Entity Resolver** | Record Linkage | **F1 Score** | **0.8421** | Precision | 100.0% |
| **Duplicate Detector** | Clustering | **F1 Score** | **1.0000** | Accuracy | 100.0% |
| **Evidence Ranker** | Information Retrieval | **NDCG@5** | **1.0000** | MRR | 1.0000 |

*Note on Supervised Training Limitations: Custom supervised deep learning was not performed for contradiction detection and sentiment due to the absence of massive multi-thousand domain labels. Instead, calibrated statistical methods and contrastive discourse parsers are used and fully documented.*

---

## 5. Caveats & Limitations
1. **Sarcasm and Indirect Irony**: Lexicon and n-gram methods may misinterpret heavily sarcastic commentary (e.g., *"Oh wonderful, another hour of waiting for water"*).
2. **Cold-Start Geographies**: OpenStreetMap coverage is dense in metropolitan regions (such as Connaught Place, New Delhi) but sparser in rural zones.
3. **Vocabulary Shift**: Emerging collegiate or culinary slang requires ongoing lexicon curation.
