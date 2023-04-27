from django.http import HttpResponse
from rest_framework.decorators import api_view
from .utilities.save_user_results import save_user_results
from django.http import JsonResponse
from .models import QuizResult
from django.core import serializers
import json

# Create your views here.
def home(request):
    file = open('static/index.html')
    resp = HttpResponse(file)
    return resp

@api_view(['POST'])
def submit_quiz(request):
    save_user_results(request.data, request)
    return HttpResponse("connected")

def get_scores_by_user(user):
    scores = QuizResult.objects.filter(user=user)
    scores_json = serializers.serialize('json', scores)
    scores_dict = json.loads(scores_json)
    return scores_dict

@api_view(['GET'])
def get_user_scores(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "User not authenticated"}, status=401)
    user_scores = get_scores_by_user(request.user)
    return JsonResponse({"results": user_scores}, safe=False)