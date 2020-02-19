FROM node:10.12.0-alpine as builder

ENV WORKDIR /usr/src/app
WORKDIR $WORKDIR
RUN mkdir -p $WORKDIR

RUN apk add --update --no-cache \
  git \
  python \
  autoconf \
  automake \
  bash \
  gcc \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  libtool \
  make \
  nasm \
  util-linux

RUN apk add fftw-dev build-base --update-cache \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/testing/ \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/main \
  --repository http://dl-cdn.alpinelinux.org/alpine/edge/community


COPY package.json package-lock.json ./
RUN npm install --no-audit

COPY . .

RUN npm run export

FROM nginx:alpine-perl

RUN apk add --no-cache nano spawn-fcgi fcgiwrap wget curl bash

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/__sapper__/export /var/www/html/mysapperTest/
COPY --from=builder /usr/src/app/__sapper__/export /var/www/html/

ENV PORT 3000
