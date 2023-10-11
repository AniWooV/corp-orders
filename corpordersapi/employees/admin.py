from django.contrib import admin

from .models import Employee

class EmployeeFilter(admin.ModelAdmin):
    list_display = ("second_name", "first_name")
    list_filter = ("second_name", "first_name")
    search_fields = ("second_name", "first_name")

admin.site.register(Employee, EmployeeFilter)
