FROM node:latest as base-node

LABEL maintainer="Carl Chen <ccheartszzz@gmail.com>"

WORKDIR /usr/node-faker

COPY package.json ./package.json

RUN npm config set registry https://registry.npm.taobao.org

RUN npm i

COPY . .

RUN npm run build


EXPOSE 33887

CMD npm run build:start