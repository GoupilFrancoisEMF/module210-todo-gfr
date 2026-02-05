# 1. Image de base Node
FROM node:18

# 2. Définir le répertoire de travail
WORKDIR /usr/src/app

# 3. Copier package.json + package-lock.json
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier tout le code du backend (routes, server.js, db.js, .env)
COPY . .

# 6. Exposer le port que ton app utilise
EXPOSE 8080

# 7. Lancer le serveur
CMD ["node", "server.js"]
