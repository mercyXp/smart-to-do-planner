from django.db import models
from django.conf import settings  # to access AUTH_USER_MODEL

User = settings.AUTH_USER_MODEL # 'users.User'

class Category(models.Model):
    """
    Optional grouping of goals (e.g., Health, Career). Owned by a user.
    """
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='categories')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'name')  # same user cannot have two categories with same name

    def __str__(self):
        return f"{self.name} ({self.user})"


class Goal(models.Model):
    TIMEFRAME_DAILY = 'daily'
    TIMEFRAME_WEEKLY = 'weekly'
    TIMEFRAME_MONTHLY = 'monthly'
    TIMEFRAME_YEARLY = 'yearly'
    TIMEFRAME_5Y = '5-year'
    TIMEFRAME_10Y = '10-year'

    TIMEFRAME_CHOICES = [
        (TIMEFRAME_DAILY, 'Daily'),
        (TIMEFRAME_WEEKLY, 'Weekly'),
        (TIMEFRAME_MONTHLY, 'Monthly'),
        (TIMEFRAME_YEARLY, 'Yearly'),
        (TIMEFRAME_5Y, '5-Year'),
        (TIMEFRAME_10Y, '10-Year'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    priority = models.IntegerField(default=1)  # 1 = low? you can define scale later
    timeframe = models.CharField(max_length=20, choices=TIMEFRAME_CHOICES)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='goals')
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='goals'
    )
    # optional planned start/end for long-term goals:
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.timeframe})"

    def tasks_count(self):
        return self.tasks.count()

    def completed_tasks_count(self):
        return self.tasks.filter(completed=True).count()

    def completion_percentage(self):
        total = self.tasks.count()
        if total == 0:
            return 0
        completed = self.tasks.filter(completed=True).count()
        return round((completed / total) * 100, 2)
