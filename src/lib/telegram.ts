export const sendTelegramMessage = async (message: string) => {
  const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("❌ TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID no están definidos");
    return;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });
    
    console.log("✅ Telegram response:");
  } catch (error) {
    console.error("❌ Error al enviar mensaje:", error);
  }
};