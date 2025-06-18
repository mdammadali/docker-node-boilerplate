ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine

ARG ENV
ENV NODE_ENV=${ENV:-production}
ENV PORT=9001

WORKDIR /var/www/html

# Copy only package.json & lock file first for caching
COPY src/package*.json ./

# Install dependencies
RUN if [ "$NODE_ENV" = "development" ] || [ "$NODE_ENV" = "local" ]; then \
      npm install; \
    else \
      npm install --omit=dev; \
    fi

# Copy app source code
COPY src/ .

# Expose port
EXPOSE ${PORT}

# Run the app
CMD [ "node", "index.js" ]

