
from django.db import models
from django.conf import settings
from tasks.models import Task

User = settings.AUTH_USER_MODEL

class Notification(models.Model):
    message = models.TextField()
    date_time = models.DateTimeField()
    # optional link to a particular task (if the notification is about a task)
    task = models.ForeignKey(Task, on_delete=models.SET_NULL, null=True, blank=True, related_name='notifications')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    read = models.BooleanField(default=False)  # mark as read/unread
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_time']

    def __str__(self):
        return f"Notification for {self.user} at {self.date_time}"