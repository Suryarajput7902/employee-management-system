from django.db import models

class Employee(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    salary = models.IntegerField()
    date_of_joining = models.DateField()
    status = models.CharField(max_length=20, default="Active")

    def __str__(self):
        return self.full_name

from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
