from django.contrib import admin
from .models import Workshop, WorkshopRegistration

@admin.register(Workshop)
class WorkshopAdmin(admin.ModelAdmin):
    list_display = ('title', 'time', 'date', 'status')  # Display fields in the admin list view
    search_fields = ('title', 'description')  # Enable searching by title and description
    list_filter = ('status',)  # Add filter options for status
    # prepopulated_fields = {'slug': ('title',)}  # Automatically populate slug field based on title

@admin.register(WorkshopRegistration)
class WorkshopRegistrationAdmin(admin.ModelAdmin):
    list_display = ('workshop', 'email', 'first_name', 'last_name', 'phone_number', 'registered_at')  # Display fields in the admin list view
    search_fields = ('workshop__title', 'email', 'first_name', 'last_name', 'phone_number')  # Enable searching by workshop title, email, etc.
    list_filter = ('workshop__title',)  # Add filter options for workshop title
