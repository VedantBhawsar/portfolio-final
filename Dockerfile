# Stage 1: Builder
FROM node:18-alpine as builder

# Set environment variable
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci --silent

# Copy application code
COPY . .

# Build Next.js application
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine as runner

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and .next output from the builder stage
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Run the Next.js application
CMD ["npx", "next", "start"]
