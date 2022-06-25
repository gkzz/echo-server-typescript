FROM node:18.4.0-slim AS base

USER root

WORKDIR /app
COPY package.json .

RUN npm install \
        && npm install typescript -g

COPY tsconfig.json .
COPY src src
RUN npm run build

FROM node:18.4.0-slim AS dev
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
EXPOSE 3000
CMD ["node", "./dist/runServer.js"]
