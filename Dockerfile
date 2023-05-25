FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

ADD ./ ./

CMD yarn start:dev --inspect=0.0.0.0