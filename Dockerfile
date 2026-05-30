FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN apk add --no-cache curl

COPY . .

# Expose the port
EXPOSE 3005

# Use vite preview or dev server. Dev server is easier for istanbul instrumentation with vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3005"]
