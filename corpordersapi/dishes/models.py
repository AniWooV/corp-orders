from django.db import models

class Dish(models.Model):
    name = models.CharField(max_length=30)
    ingredients = models.TextField(blank=False)
    price = models.FloatField()

    def __str__(self):
        return self.name
