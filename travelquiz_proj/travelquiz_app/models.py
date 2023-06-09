from django.db import models;
from django.db.models import JSONField;
from user_app.models import App_User;
from django.contrib.postgres.fields import ArrayField;

class QuizResult(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE) 
    user_selections = JSONField()
    correct_answers = JSONField(default=dict) 
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"QuizResult(id={self.id}, user={self.user}, score={self.score}, created_at={self.created_at})"