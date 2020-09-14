FROM ubuntu:20.04
WORKDIR /bob4bot
COPY . .
RUN apt-get update && apt install nodejs -y && apt install npm -y
RUN npm i
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN npm i -g nodemon && nodemon index.js