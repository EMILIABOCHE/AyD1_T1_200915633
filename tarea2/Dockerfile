# Usa una imagen base de Node.js
FROM node:16

WORKDIR /app
 
COPY package*.json ./
COPY . .

 
RUN npm install
 
RUN npm run build

 
RUN npm install -g serve
CMD ["serve", "-s", "build"]
 
EXPOSE 80
