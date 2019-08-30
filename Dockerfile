FROM node:12.9.1-alpine

ARG APP_PATH=${APP_PATH}

RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

COPY package.json $APP_PATH

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" ,"dev"]