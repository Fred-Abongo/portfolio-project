from django.shortcuts import render
from rest_framework import viewsets # type: ignore
from .models import DataSet
from .serializers import DataSetSerializer

class DataSetViewSet(viewsets.ModelViewSet):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer