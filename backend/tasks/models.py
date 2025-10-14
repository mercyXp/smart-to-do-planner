from django.db import models
from django.conf import settings
from goals.models import Goal

User = settings.AUTH_USER_MODEL

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    due_date = models.DateField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(default=1)
    goal = models.ForeignKey(Goal, on_delete=models.CASCADE, related_name='tasks')
    assigned_to = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_tasks'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-priority', 'due_date']  # default sort: higher priority first, then due date

    def __str__(self):
        return f"{self.title} (Goal: {self.goal.title})"

    def subtasks_count(self):
        return self.subtasks.count()

    def completed_subtasks_count(self):
        return self.subtasks.filter(completed=True).count()

    def completion_percentage(self):
        total = self.subtasks.count()
        if total == 0:
            return 100 if self.completed else 0
        completed = self.subtasks.filter(completed=True).count()
        return round((completed / total) * 100, 2)


class SubTask(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    due_date = models.DateField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(default=1)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='subtasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-priority', 'due_date']

    def __str__(self):
        return f"{self.title} (Task: {self.task.title})"
