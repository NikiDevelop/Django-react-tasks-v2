from rest_framework import serializers

from todos.models import Todo

# Serializamos nuestro models para que luego pueda ser llamada en formato JSON y conectarse con el Front End mediante Axios
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
