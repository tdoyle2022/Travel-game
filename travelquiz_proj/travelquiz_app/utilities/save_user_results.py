# from travelquiz_app.models import QuizResult

# def save_user_results (data, request):
#     quizresult,created = QuizResult.objects.get_or_create(user = request.user, user_selections = data['user_selections'], score = data['score'], correct_answers = data['correct_answers'])
    
#     print (created)

from travelquiz_app.models import QuizResult

def save_user_results(data, request):
    user = request.user
    user_selections = data.get('user_selections')
    correct_answers = data.get('correct_answers')
    score = data.get('score')

    quiz_result = QuizResult(user=user, user_selections=user_selections, correct_answers=correct_answers, score=score)
    quiz_result.save()