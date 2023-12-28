FROM nginx:alpine


COPY . /usr/share/nginx/html/app
COPY nginx.conf /etc/nginx/nginx.conf