FROM node:20-alpine AS builder

WORKDIR /app

RUN apk --no-cache add openssh g++ make python3 git

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn

ADD . /app

RUN yarn build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.output  /app/.output
COPY --from=builder /app/.nuxt  /app/.nuxt

ENV HOST=0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
