#!/bin/bash
docker image rm text_to_speech_user:latest
docker build -t text_to_speech_user:latest .
docker rm -f text_to_speech_user
docker run -it -d --name text_to_speech_user -p 5173:5173 --restart always --network apps --link nginx-proxy --link letsencrypt-nginx-proxy --env TZ=Asia/Ho_Chi_Minh -e VIRTUAL_HOST="text-to-speech.daithienhien.vn" -e VIRTUAL_PORT=5173 -e LETSENCRYPT_HOST="text-to-speech.daithienhien.vn" -e LETSENCRYPT_EMAIL="daithienhien.vn@gmail.com" text_to_speech_user:latest