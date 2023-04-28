from travelquiz_app.models import QuizResult

def save_user_results (data, request):
    quizresult,created = QuizResult.objects.get_or_create(user = request.user, user_selections = data['user_selections'], score = data['score'])
    
    print (created)