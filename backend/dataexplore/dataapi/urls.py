from django.urls import path, include
from rest_framework.routers import DefaultRouter # type: ignore
from .views import DataSetViewSet

router = DefaultRouter()
router.register(r'datasets', DataSetViewSet)

urlpatterns = [
    path('', include(router.urls)),
]