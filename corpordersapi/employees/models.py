from django.db import models

class Employee(models.Model):
    second_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.second_name} {self.first_name}'
