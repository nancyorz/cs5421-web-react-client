FROM nginx:alpine

WORKDIR /cs5421_web_react_client

COPY ./dist ./dist

COPY ./nginx.conf /etc/nginx/nginx.conf