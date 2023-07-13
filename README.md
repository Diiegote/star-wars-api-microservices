# Star-Wars-API-Microservices

Esta API REST de Star Wars está diseñada para proporcionar información sobre personajes, planetas y películas de la saga de Star Wars. Está construida con Node.js, Express y MongoDB, y utiliza Docker Compose para orquestar los diferentes servicios. La aplicación está desplegada en una máquina virtual en Google Cloud.

# Características

El proyecto está dividido en varios microservicios:

* Characters: Maneja la información de los personajes de Star Wars.
* Planets: Proporciona información sobre los planetas del universo Star Wars.
* Films: Gestiona la información de las películas de la saga.
* Database: Servicio encargado de la conexión con la base de datos MongoDB.
* Gateway: Actúa como punto de entrada único para las peticiones y redirige el tráfico a los microservicios correspondientes.
* El gateway es el servicio que se encarga de redirigir las peticiones a los microservicios internos según la ruta solicitada.

# Requisitos previos

* Docker y Docker Compose deben estar instalados en el sistema.

# Configuración

* Clona el repositorio desde GitHub:

* https://github.com/Diiegote/star-wars-api-microservices

* Para cada carpeta de microservicio (characters, planets, films, database, gateway), navega a la carpeta correspondiente y ejecuta el siguiente comando para instalar las dependencias:

* cd characters
npm install

* Repite estos pasos para las carpetas planets, films, database y gateway
* cd ../planets
npm install

* cd ../films
npm install

* cd ../database
npm install

* cd ../gateway
npm install

* En la carpeta database, encontrarás un archivo .env que contiene las credenciales para conectarte a la base de datos. Asegúrate de proporcionar las credenciales correctas en este archivo antes de ejecutar la aplicación.
Nota: El archivo .env no se ha subido al repositorio, ya que se ha incluido en el archivo .gitignore junto con node_modules.

# Uso

* Inicia los servicios utilizando Docker Compose:

* docker-compose up

* Una vez que los servicios se hayan iniciado correctamente, podrás acceder a la API a través de la siguiente URL:

* "http://localhost:8000"

# Ejemplos de rutas disponibles

* Obtener información de todos los personajes:
* GET /characters

* Obtener información de un personaje específico:
* GET /characters/:id

* Crear un personaje específico:
* POST /characters

* Obtener información de todos los planetas:
* GET /planets

* Obtener información de un planeta específico:
* GET /planets/:id

* Crear un planeta específico:
* POST /planets

* Obtener información de todas las películas:
* GET /films

* Obtener información de una película específica:
* GET /films/:id

* Crear una pelicula específica:
* POST /films

# Contribuciones
* Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de enviar un pull request con tus cambios.
