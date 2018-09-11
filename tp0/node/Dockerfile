FROM node:10.10.0

RUN mkdir /usr/app

WORKDIR /usr/app 
#Every command will be executed on that path

COPY app.js package*.json ./

RUN npm install

ENTRYPOINT [ "node", "app.js" ]
