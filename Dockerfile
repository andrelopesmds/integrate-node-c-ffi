FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY src/ ./

EXPOSE 8080

CMD [ "node", "index.js" ]
