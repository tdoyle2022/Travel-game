from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    file = open('static/index.html')
    resp = HttpResponse(file)
    return resp

