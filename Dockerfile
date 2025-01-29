# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app
# Copy the package.json and package-lock.json (if present)
COPY ./my-app/package*.json ./
# Copy the rest of the application code
RUN npm install
COPY ./my-app .
# Build the React app
EXPOSE 5173
CMD ["npm", "run", "dev"]
