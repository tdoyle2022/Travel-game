
from  ..models import QuizResult
from django.core import serializers

def get_scores_by_user(user_id):
    scores = QuizResult.objects.filter(user_id=user_id)
    scores_json = serializers.serialize('json', scores)
    return scores_json