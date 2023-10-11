from rest_framework import serializers

from .models import Order

# class OrdersDishSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrdersDish
#         fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    # dishes = OrdersDishSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
