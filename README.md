<div style="border: 2px solid black; padding: 10px; text-align: center;">


# **Universidad de San Carlos**
# **Facultad de Ingenieria**
### Analisis y Diseño de Sistemas 1
Rosa Emilia Boche Naz
200915633


</div>
 

 ## Creación de aplicación Web
 Para la realización de la aplicación web se utilizo el framework react, para ello instalamos nodejs y ejecutamos el comando:
 >npx create-react-app tarea2

 Luego ingresamos a la carpeta tarea2/src y abrimos el archivo App.js y editamos el archivo para crear la vista que se nos pide que muestre nuestro nombre, carnet y curso.
  
Seguidamente en la raiz de nuestro proyecto creamos nuestro archivo Dockerfile
> FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 80


Luego construimos la imagen para docker 
> docker build -t tarea2 .

Ejecutamos 
>ddocker run -d -p 80:3000 tarea2


Accedemos al localhost del navegador en localhost




