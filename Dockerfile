FROM node:16.14.2
WORKDIR /src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm","start"]