# Use official Node.js LTS image
FROM node:18-alpine3.19

# Update system packages to fix vulnerabilities
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy source code
COPY . .

# Expose port (change if your app uses a different port)
EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]
