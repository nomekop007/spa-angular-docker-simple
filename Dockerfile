#FROM nginx
#COPY dist/spa /usr/share/nginx/html

#monta imagen la cual tenga npm instalado
FROM node as frontend  

#se posiciona en la carpeta a usar
WORKDIR /app

# se copia todo los archivos locales en la /app/
COPY .  /app/

# se ejecuta dentro del contenedor los siguientes comandos
RUN  npm install -g @angular/cli 
RUN  npm install 
RUN  ng build
    

# se monta la siguiente imagen
FROM nginx

# se copian los archivos de la imagen anterior dentro de la nueva imagen
COPY --from=frontend /app/dist/spa /usr/share/nginx/html