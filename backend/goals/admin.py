from django.contrib import admin
from .models import Category, Goal

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'created_at')
    search_fields = ('name',)

@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ('title', 'timeframe', 'user', 'priority', 'created_at')
    list_filter = ('timeframe', 'priority')
    search_fields = ('title', 'description')
