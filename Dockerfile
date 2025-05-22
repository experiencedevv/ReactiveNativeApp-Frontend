# Imagem base com Node.js
FROM node:20

# Instala ferramentas necessárias e o Expo CLI
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    git \
    && npm install -g expo-cli

# Cria diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos para o container
COPY package*.json ./
COPY yarn.lock ./
COPY . .

# Instala as dependências do projeto
RUN npm install

# Expõe as portas do Expo
EXPOSE 19000 19001 19002

# Comando para iniciar o Expo
CMD ["npx", "expo", "start", "--tunnel"]
