FROM node:16-alpine

RUN apk update && \
    apk add --no-cache bash

WORKDIR /home/app

COPY . .

RUN npm install
CMD ["npm", "run", "dev"]
