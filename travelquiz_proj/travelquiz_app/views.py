from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from .models import QuizResult
from .utilities.save_user_results import save_user_results

# Create your views here.
def home(request):
    file = open('static/index.html')
    resp = HttpResponse(file)
    return resp

@api_view(['POST'])
def submit_quiz(request):
    save_user_results(request.data, request)
    return HttpResponse("connected")

