from rest_framework.decorators import api_view
from rest_framework.response import Response
import joblib
import numpy as np
from .serializers import PredictionSerializer

model = joblib.load('predictor/ml_model.pkl')
#Score Prediction
@api_view(['POST'])
def predict_score(request):
    serializer = PredictionSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.validated_data
        X = np.array([[data['study_hours'], data['attendance_percent'], data['previous_exam_score']]])
        prediction = model.predict(X)[0]
        return Response({'predicted_score': round(prediction, 2)})
    return Response(serializer.errors, status=400)
