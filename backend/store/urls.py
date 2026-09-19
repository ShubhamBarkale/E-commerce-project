from django.urls import path
from . import views

urlpatterns = [
    path('product/', views.get_products),
    path('categories/', views.get_categories),
]