from django.db import models

from employees.models import Employee
from dishes.models import Dish

# class OrdersDish(models.Model):
#     dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
#     count = models.IntegerField(default=0)

#     def __str__(self):
#         return f'{self.dish.name}, {self.count} pieces'

class Order(models.Model):
    order_date = models.DateField()
    employee = models.ForeignKey(Employee, on_delete=models.PROTECT)
    dishes = models.ManyToManyField(Dish)

    def __str__(self):
        return f'{self.order_date}, {self.employee}'
    
