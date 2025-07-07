
from django.urls import path
from .views import predict_score

urlpatterns = [
    path('predict/', predict_score),
]
