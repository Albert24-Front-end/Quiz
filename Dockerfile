# Указываем, какую версию библиотеки, ЯП и т.д. собираемся установить

FROM node:latest

# Указываем рабочую папку
WORKDIR  /quiz

# Копируем все файлы в папку quiz
COPY .  /quiz

# Порт
EXPOSE 3000

# Устанавливаем зависимости 
RUN npm i

# Команда запуска
CMD ["npm", "start"]

# docker build -t react .

# docker run -p 3000:3000 react