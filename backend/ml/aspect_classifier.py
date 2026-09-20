import os
import joblib
from typing import Dict, List, Tuple, Optional
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from backend.ml.preprocessing import clean_text

class AspectClassifier:
    """
    Supervised aspect classifier powered by Multinomial Naive Bayes
    with sublinear TF-IDF features. Classifies statements into domain aspects
    (e.g., Food & Taste, Ambience, Coding Culture, Placements) with confidence calibration.
    """

    def __init__(self):
        self.model: Optional[Pipeline] = None
        self.classes: List[str] = []

    def fit(self, texts: List[str], labels: List[str]):
        cleaned_texts = [clean_text(t) for t in texts]
        self.classes = sorted(list(set(labels)))
        self.model = Pipeline([
            ("tfidf", TfidfVectorizer(
                ngram_range=(1, 2),
                min_df=1,
                max_features=2500,
                sublinear_tf=True
            )),
            ("clf", MultinomialNB(alpha=0.1))
        ])
        self.model.fit(cleaned_texts, labels)
        return self

    def predict(self, text: str) -> Tuple[str, float]:
        if not self.model:
            return "General Aspect", 0.70

        cleaned = clean_text(text)
        probs = self.model.predict_proba([cleaned])[0]
        max_idx = int(np.argmax(probs))
        predicted_class = self.model.classes_[max_idx]
        confidence = float(probs[max_idx])
        return predicted_class, round(confidence, 3)

    def save(self, filepath: str):
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        joblib.dump({"model": self.model, "classes": self.classes}, filepath)

    def load(self, filepath: str):
        if os.path.exists(filepath):
            data = joblib.load(filepath)
            self.model = data["model"]
            self.classes = data["classes"]
            return True
        return False
