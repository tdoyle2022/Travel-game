from rest_framework import serializers
from .models import QuizResult
from user_app.serializers import AppUserSerializer 

class QuizResultSerializer(serializers.ModelSerializer):
    user = AppUserSerializer() 

    class Meta:
        model = QuizResult
        fields = '__all__'

        