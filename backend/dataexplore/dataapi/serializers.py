from rest_framework import serializers # type: ignore
from .models import DataSet

class DataSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataSet
        fields = '__all__'