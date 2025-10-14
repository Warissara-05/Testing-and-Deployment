FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production


FROM node:22-alpine AS tester
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test


FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY . .
CMD ["npm", "start"]