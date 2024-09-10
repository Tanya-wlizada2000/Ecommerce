from django.contrib import admin
from .models import ContactForm


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'phone', 'describe', 'create_date', 'update_date')
