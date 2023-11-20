from django.shortcuts import render
from rest_framework import generics
from todos import serializers

from todos.models import Todo
# Create your views here.

class TodosAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all().order_by('-id')
    serializer_class = serializers.TodoSerializer


class TodoAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer