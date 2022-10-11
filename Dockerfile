FROM node:16 as base
WORKDIR /var/www/adaptive-card
COPY package*.json ./
COPY tsconfig.json ./

FROM base as build
RUN npm install
COPY src ./src
RUN npm run build

FROM build as production
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci
COPY --from=build /var/www/adaptive-card/build .
EXPOSE "${APP_PORT}"
CMD ["node", "build/app.js"]