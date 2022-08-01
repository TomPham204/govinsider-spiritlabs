FROM node:16-alpine as builder
RUN yarn global add nx
WORKDIR /app

RUN mkdir -p /app/apps/backoffice
RUN mkdir -p /app/apps/landing-remix
RUN mkdir -p /app/apps/api

COPY package.json .
COPY yarn.lock .

COPY apps /app/apps

RUN yarn
COPY . .
ARG app
RUN if [[ $app == "api" ]]; then yarn prisma:generate; fi;
ARG app
RUN yarn build $app
ARG app
ENV env_app=$app
CMD yarn start $env_app:serve:production
