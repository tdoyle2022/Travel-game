from django.http import HttpResponse
from rest_framework.decorators import api_view
from .utilities.save_user_results import save_user_results
from django.http import JsonResponse
from .models import QuizResult
from django.core import serializers
import json
from django.core.exceptions import ValidationError

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

@api_view(['DELETE'])
def delete_score(request, score_id):
    if request.method == 'DELETE':
        try:
            score = QuizResult.objects.get(pk=score_id)
            print(score)
            score.delete()
            return JsonResponse({"message": "Score deleted successfully"})
        except QuizResult.DoesNotExist:
            return JsonResponse({"error": "Score not found"}, status=404)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
    

@api_view(['PUT'])
def update_score(request, score_id):
    if request.method == 'PUT':
        try:
            score = QuizResult.objects.get(pk=score_id)

            # Parse the request body
            body = json.loads(request.body)

            # Update the score
            new_score = body.get('score')
            if new_score is not None:
                score.score = new_score
                score.full_clean()  # Validate the score before saving
                score.save()
                return JsonResponse({"message": "Score updated successfully"})

            return JsonResponse({"error": "Invalid score data"}, status=400)

        except QuizResult.DoesNotExist:
            return JsonResponse({"error": "Score not found"}, status=404)

        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)

    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)