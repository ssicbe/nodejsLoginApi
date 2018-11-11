FROM node:carbon

# Create app directory

RUN mkdir -p /usr/src/app
RUN mkdir -p /data/db

WORKDIR /usr/src/app

# Install app dependencies

# A wildcard is used to ensure both package.json AND package-lock.json are copied

# where available (npm@5+)

COPY package*.json /usr/src/app/

RUN npm install 
#RUN npm install mongodb --save
#To bundle your app’s source code inside the Docker image, use the COPY instruction:

COPY . /usr/src/app/

#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:

EXPOSE 3000
#cMD node server.js
CMD [ "npm", "start" ]

