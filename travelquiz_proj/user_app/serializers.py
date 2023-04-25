from rest_framework import serializers
from .models import App_User

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = App_User
        fields = '__all__'