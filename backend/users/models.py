from django.db import models
from django.contrib.auth.models import AbstractUser  #AbstractUser — provides username, password, first_name, last_name, is_active, is_staff, etc.

class User(AbstractUser): #Django already provides a built-in User system
    """
    Custom User model extending AbstractUser.
    Login with username or email.
    """

    email = models.EmailField(unique=True) # Ensure email is unique
    is_email_verified = models.BooleanField(default=False) # Track if email is verified

    created_at = models.DateTimeField(auto_now_add=True)   # set once when created
    updated_at = models.DateTimeField(auto_now=True)       # updated on each save

    def __str__(self):
         return self.username or self.email
