# Django REST Framework y React

Esto es una REST API de tareas usando `Django REST Framework` para el back end y `React` para el front end con bootstrap.


![Screenshot 2023-11-21 at 14-35-23 Todos Api – Django REST framework](https://github.com/NikiDevelop/Django-react-tasks-v2/assets/105102619/f6a87855-75cb-420d-96c9-81e28b25c007)

![Screenshot 2023-11-21 at 14-34-17 Django React](https://github.com/NikiDevelop/Django-react-tasks-v2/assets/105102619/9e5ceee4-7331-4106-b031-bc6cfcf9551d)


# Ejecutar proyecto
Primero, crear un entorno virtual:


```
$ python -m venv env
```
Tenemos que activar nuestro entorno virtual, tendremos que desplazarnos a la carpeta scripts.
```
.\env\scripts\activate
```
Ya tendríamos activado nuestro entorno virtual, debería salirte a la izquierda en color verde (env), eso quiere decir que está activado ya.

Ahora pasaremos a instalar las dependencias del proyecto.
```
$ pip install -r requirements.txt
```

Por último, ya solo te queda hacer las migraciones.
```
$ python manage.py makemigrations
```
```
$ python manage.py migarate
```
```
$ python manage.py runserver
```

Puedes acceder mediante la siguiente url `http://127.0.0.1:8000/api/todos/` y crear una nueva tarea en formato JSON.
Después de haber seguido los pasos anteriores, ejecuta: 
```
$ cd backend

```
Para dirigirnos a la carpeta del backend, ejecuta el servidor
```
$ python manage.py runserver

```
Ya estaría corriendo el servidor por parte del back end, ahora vamos con la parte del front end.
Abre otra terminal dándole al + y nos movemos a la carpeta del front end.
```
$ cd frontend

```
Ahora ejecutamos el servidor.
```
$ npm run dev

```
Y ya podrás crear nuevas tareas desde el front end y que serán guardadas en el back end.
