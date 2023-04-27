from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import App_User 
from .utilities import sign_up, log_in, curr_user
from django.core.serializers import serialize
import json
from django.shortcuts import redirect
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

# Create your views here.

@api_view(['POST', 'PUT', 'GET'])
def user_capabilities(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                # Removes SessionID
                logout(request)
                return JsonResponse({"logout":True})
            except Exception as e:
                print(e)
                return JsonResponse({"logout":False})
        else:
            return sign_up(request.data)

        
    elif request.method == 'PUT':
        return log_in(request)
    
    elif request.method == 'GET':
        return curr_user(request)
        
    
    
def send_the_index(request):
    the_index = open('static/index.html')
    return HttpResponse(the_index)

# @api_view(['DELETE'])
# def delete_user(request):
#     user = get_object_or_404(App_User)
#     user.delete()
#     return Response(status=204)
