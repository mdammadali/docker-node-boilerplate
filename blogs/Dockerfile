ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine

ARG ENV

RUN npm cache clean --force

ARG ENV
ENV NODE_ENV=${ENV:-production}
ENV PORT=9001
WORKDIR /var/www/html

COPY src/package*.json ./

RUN if [ "$NODE_ENV" = "development" ] || [ "$NODE_ENV" = "local" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi

COPY src/ .

EXPOSE ${PORT}

CMD [ "node", "index.js" ]