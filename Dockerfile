FROM node:12 

ENV PORT_API=3333
ENV APP_URL=http://localhost:3333
ENV NODE_END=production
ENV APP_SECRET=c5177f88b5dbefc81b49e58654899725bc877614
ENV PASSWORD=lamiaportal&8Lamia$f
ENV DB_HOST=localhost
ENV DB_USER=postgres
ENV DB_PASS=docker
ENV DB_NAME=postgres
ENV DB_PORT=5432



COPY . /app

WORKDIR /app

RUN yarn

ENTRYPOINT yarn dev
EXPOSE $PORT_API

