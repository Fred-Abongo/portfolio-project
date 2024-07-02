from django.db import models

class DataSet(models.Model):
    name = models.CharField(max_length=100)
    file = models.FileField(upload_to='datasets/')

    def __str__(self):
        return self.name