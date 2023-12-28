FROM node:18-alpine
EXPOSE 5173

RUN apk update && \
    apk add --no-cache bash

WORKDIR /home/app

COPY . .

RUN npm install
CMD ["npm", "run", "dev"]
