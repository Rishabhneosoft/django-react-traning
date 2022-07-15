from django.urls import path
from test_app import views

urlpatterns = [
    path('student/', views.StudentList.as_view()),
]