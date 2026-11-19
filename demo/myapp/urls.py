from django.urls import path
from . import views

urlpatterns = [
    path('', views.loading, name='loading'),
    path('home/', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('galerie/', views.galerie, name='galerie'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('universities/', views.universities, name='universities'),
]