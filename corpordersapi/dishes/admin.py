from django.contrib import admin

from .models import Dish

class DishFilter(admin.ModelAdmin):
    list_display = ("name", "ingredients", "price")
    list_filter = ("name", "ingredients", "price")
    search_fields = ("name", "ingredients", "price")

admin.site.register(Dish, DishFilter)
