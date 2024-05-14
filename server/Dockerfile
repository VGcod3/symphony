# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (replace 3000 with your desired port number)
EXPOSE 5000

# Define the command to run your application
CMD [ "npm", "run", "start:dev" ]