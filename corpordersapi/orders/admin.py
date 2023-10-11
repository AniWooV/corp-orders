from django.contrib import admin

from .models import Order

class OrderFilter(admin.ModelAdmin): 
    list_display = ("order_date", "employee")
    list_filter = ("order_date", "employee", "dishes")
    search_fields = ("order_date", "employee", "dishes")

admin.site.register(Order, OrderFilter)