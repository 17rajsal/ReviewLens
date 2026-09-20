import os
import json
from collections import Counter
from sklearn.model_selection import train_test_split
from backend.ml.data.benchmark_data import ASPECT_DATA, SENTIMENT_DATA
from backend.ml.aspect_classifier import AspectClassifier
from backend.ml.sentiment import SentimentAnalyzer

def train_and_export_models():
    artifacts_dir = os.path.join(os.path.dirname(__file__), "artifacts")
    os.makedirs(artifacts_dir, exist_ok=True)

    print("==================================================")
    print("ReviewLens ML Training Pipeline")
    print("==================================================")

    # 1. Aspect Classification Data Inspection
    aspect_texts = [d["text"] for d in ASPECT_DATA]
    aspect_labels = [d["label"] for d in ASPECT_DATA]
    aspect_dist = Counter(aspect_labels)

    print(f"\n[Aspect Classification]")
    print(f"Total labeled samples: {len(aspect_texts)}")
    print(f"Class distribution: {json.dumps(dict(aspect_dist), indent=2)}")

    # Stratified Train/Test Split (70/30) to prevent leakage
    X_train_asp, X_test_asp, y_train_asp, y_test_asp = train_test_split(
        aspect_texts, aspect_labels, test_size=0.30, random_state=42, stratify=aspect_labels
    )
    print(f"Train split size: {len(X_train_asp)} | Held-out test split size: {len(X_test_asp)}")

    aspect_model = AspectClassifier()
    aspect_model.fit(X_train_asp, y_train_asp)
    aspect_model_path = os.path.join(artifacts_dir, "aspect_classifier.joblib")
    aspect_model.save(aspect_model_path)
    print(f"Saved Aspect Classifier artifact: {aspect_model_path}")

    # 2. Sentiment Classification Data Inspection
    sent_texts = [d["text"] for d in SENTIMENT_DATA]
    sent_labels = [d["label"] for d in SENTIMENT_DATA]
    sent_dist = Counter(sent_labels)

    print(f"\n[Sentiment Classification]")
    print(f"Total labeled samples: {len(sent_texts)}")
    print(f"Class distribution: {json.dumps(dict(sent_dist), indent=2)}")

    X_train_sent, X_test_sent, y_train_sent, y_test_sent = train_test_split(
        sent_texts, sent_labels, test_size=0.30, random_state=42, stratify=sent_labels
    )
    print(f"Train split size: {len(X_train_sent)} | Held-out test split size: {len(X_test_sent)}")

    sentiment_model = SentimentAnalyzer()
    sentiment_model.fit(X_train_sent, y_train_sent)
    sentiment_model_path = os.path.join(artifacts_dir, "sentiment_analyzer.joblib")
    sentiment_model.save(sentiment_model_path)
    print(f"Saved Sentiment Analyzer artifact: {sentiment_model_path}")

    # Save held-out test splits for independent evaluation
    test_splits = {
        "aspect_test": [{"text": t, "label": l} for t, l in zip(X_test_asp, y_test_asp)],
        "sentiment_test": [{"text": t, "label": l} for t, l in zip(X_test_sent, y_test_sent)]
    }
    test_splits_path = os.path.join(artifacts_dir, "held_out_test_splits.json")
    with open(test_splits_path, "w", encoding="utf-8") as f:
        json.dump(test_splits, f, indent=2)
    print(f"Saved Held-out Test Splits: {test_splits_path}")

    print("\nTraining completed successfully with zero data leakage.")

if __name__ == "__main__":
    train_and_export_models()
