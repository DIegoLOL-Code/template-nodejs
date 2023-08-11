const TelegramBot = require('node-telegram-bot-api');

// Reemplaza 'TOKEN' con el token de tu bot proporcionado por BotFather
const token ='6369608361:AAGGiWr65kpC-ssYCNN0WTnvJ0iVlOgJKpg';

// Crea una instancia del bot
const bot = new TelegramBot(token, { polling: true });

// Escucha los mensajes entrantes
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Responde al mensaje recibido
  bot.sendMessage(chatId, `Has enviado el siguiente mensaje: ${messageText}, tu id de chat es: ${chatId}`);
});
