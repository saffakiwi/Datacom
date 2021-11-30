FROM node:14.17.0
#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#install dependencies 
COPY package*.json ./
ADD package.json ./
RUN npm install
#copy source code
COPY . .

#expose port and start app
EXPOSE 3002
CMD [ "npm", "start" ]