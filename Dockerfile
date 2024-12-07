# Usar una imagen base de Nginx
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
