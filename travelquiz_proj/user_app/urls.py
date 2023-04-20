from django.urls import path, re_path
from . import views

urlpatterns = [
    path('users/', views.user_capabilities, name='user_capabilities'),
    path('', views.send_the_index, name='index'),
    re_path(r'.*', views.send_the_index),
]