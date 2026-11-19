from django.shortcuts import render

def loading(request):
    return render(request, "HTML/loading.html")

def home(request):
    return render(request, "HTML/home.html")

def login(request):
    return render(request, "HTML/login.html")

def register(request):
    return render(request, "HTML/register.html")

def galerie(request):
    return render(request, "HTML/galerie.html")

def chatbot(request):
    return render(request, "HTML/chatbot.html")

def universities(request):
    return render(request, "HTML/universities.html")