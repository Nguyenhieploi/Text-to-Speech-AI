FROM nginx:alpine


COPY ./{folder} /usr/share/nginx/html/app
COPY nginx.conf /etc/nginx/nginx.conf