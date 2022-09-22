FROM node:18-alpine as dependencies
WORKDIR /app
COPY ./package*.json .
RUN npm ci

FROM node:18-alpine as build-stage
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm run export

FROM nginx as runtime
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage --chown=www-data /app/out /usr/share/nginx/html
EXPOSE 80