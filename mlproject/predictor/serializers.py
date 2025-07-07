# predictor/serializers.py
from rest_framework import serializers

class PredictionSerializer(serializers.Serializer):
    study_hours = serializers.FloatField()
    attendance_percent = serializers.FloatField()
    previous_exam_score = serializers.FloatField()
