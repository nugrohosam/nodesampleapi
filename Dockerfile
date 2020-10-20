FROM node:alpine

RUN apk update && apk upgrade

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "download-all-proto"]

CMD ["npm", "start"]