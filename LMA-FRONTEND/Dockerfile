FROM node:18-alpine

WORKDIR /LMA-FRONTEND

EXPOSE 3000

COPY package.json yarn.lock ./

RUN yarn install 

COPY . ./

CMD ["yarn", "dev"]