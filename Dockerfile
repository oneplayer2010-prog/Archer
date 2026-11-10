FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
RUN npm install --omit=dev
COPY server.js characters.js index.html app.js style.css sw.js icon.svg manifest.webmanifest ./
USER node
EXPOSE 3000
CMD ["node","server.js"]
