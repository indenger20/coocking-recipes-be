FROM node:18-alpine as builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE ${APP_PORT}
CMD ["npm", "run", "start:prod"]