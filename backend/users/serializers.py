from rest_framework import serializers 
from django.contrib.auth import get_user_model # Import the custom User model

User = get_user_model() 

class UserSerializer(serializers.ModelSerializer): # Serializer for User model
    password = serializers.CharField(write_only=True) # write_only=True -- hides the password from GET requests

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'date_joined']

    def create(self, validated_data): # create_user() automatically hashes the password properly.
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
