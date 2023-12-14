# Carcar del la carpeta al contenedor
FROM nginx:alpine
COPY dist/PROYECTOANGULAR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]