# Stage 1: Build the React application with Vite
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app for production with Vite
RUN npm run build

# Stage 2: Serve the built React app using Nginx
FROM nginx:alpine

# Copy the built React app from the build stage to the nginx server
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port that Nginx listens on (usually 80 by default)
EXPOSE 80

# The default command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]