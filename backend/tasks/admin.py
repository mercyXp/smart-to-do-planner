from django.contrib import admin
from .models import Task, SubTask

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'goal', 'completed', 'due_date', 'priority')
    list_filter = ('completed','priority')
    search_fields = ('title','description')

@admin.register(SubTask)
class SubTaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'task', 'completed', 'due_date')