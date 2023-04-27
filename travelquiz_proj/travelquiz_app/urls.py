from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('submit_quiz/', views.submit_quiz, name='submit_quiz'),
    path('get_user_scores/', views.get_user_scores, name="get_user_scores"),
    path('delete_score/<int:score_id>/', views.delete_score, name='delete_score'),
    path('update_score/<int:score_id>/', views.update_score, name='update_score'),
]
