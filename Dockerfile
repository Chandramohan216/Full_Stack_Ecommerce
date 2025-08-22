# Step 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Clean default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

