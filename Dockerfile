# Stage 1: Build the Next.js application
# Use a Node.js image with Bun/pnpm compatibility in mind (Next.js build generally uses npm)
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files and install all dependencies (including devDependencies for building)
COPY package.json ./
COPY bun.lock ./
# FIX: Use --legacy-peer-deps to bypass the React 19 / vaul peer dependency conflict
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Run the Next.js build command
# The output is placed in the .next folder
RUN npm run build

# -----------------------------------------------

# Stage 2: Create the final production runtime image
# Use a smaller, secure base image for the final production environment
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set Next.js environment variables for production
ENV NODE_ENV production
# This ensures the Next.js server listens on all interfaces (0.0.0.0) inside the container
ENV HOSTNAME "0.0.0.0" 

# Copy only package.json and install production dependencies
COPY package.json ./
# FIX: Use --legacy-peer-deps here as well to ensure production dependencies resolve
RUN npm install --production=true --legacy-peer-deps

# Copy necessary runtime and static assets from the builder stage
# .next folder contains the final compiled code
COPY --from=builder /app/.next ./.next
# public folder contains static assets like images and manifest files
COPY --from=builder /app/public ./public
# lib folder is crucial as it contains products.ts, used at runtime
COPY --from=builder /app/lib ./lib 
# next.config.mjs is needed for runtime configuration
COPY next.config.mjs ./

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js server in production mode
CMD ["npm", "start"]
