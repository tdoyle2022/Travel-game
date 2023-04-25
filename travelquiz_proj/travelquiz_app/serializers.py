from rest_framework import serializers
from .models import QuizResult
from user_app.serializers import AppUserSerializer  # Import the App_User serializer here, make sure you have it in your user_app app

class QuizResultSerializer(serializers.ModelSerializer):
    user = AppUserSerializer()  # Use the App_User serializer for the user field

    class Meta:
        model = QuizResult
        fields = '__all__'