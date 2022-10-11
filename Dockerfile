FROM node:16 as base

WORKDIR /var/www/adaptive-card

COPY package*.json ./
COPY tsconfig.json ./

FROM base as production

RUN npm install

COPY src ./src

RUN npm run build

EXPOSE 3000

CMD ["node", "build/app.js"]