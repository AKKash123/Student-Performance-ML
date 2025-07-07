# predictor/train_model.py
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Sample dataset
data = {
    'study_hours': [2, 4, 6, 8],
    'attendance_percent': [60, 70, 80, 90],
    'previous_exam_score': [50, 60, 70, 85],
    'final_exam_score': [55, 65, 75, 90]
}
df = pd.DataFrame(data)

X = df[['study_hours', 'attendance_percent', 'previous_exam_score']]
y = df['final_exam_score']

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, 'predictor/ml_model.pkl')
