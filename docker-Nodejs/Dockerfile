FROM node:lts-alpine3.14

WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]