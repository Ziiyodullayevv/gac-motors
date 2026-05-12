type TelegramMessage = {
  message_id: number;
  chat: { id: number; type: string };
  text?: string;
};

type TelegramUpdate = {
  update_id: number;
  message?: TelegramMessage;
};

const TELEGRAM_API = "https://api.telegram.org";

async function sendMessage(token: string, chatId: number, text: string) {
  await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return Response.json({ ok: false });

  let update: TelegramUpdate;
  try {
    update = (await request.json()) as TelegramUpdate;
  } catch {
    return Response.json({ ok: false });
  }

  const chatId = update.message?.chat?.id;
  const text = update.message?.text ?? "";

  if (!chatId) return Response.json({ ok: true });

  if (text === "/start" || text.startsWith("/start ")) {
    await sendMessage(
      token,
      chatId,
      `✅ <b>GAC Uzbekistan</b> xabarnomalariga ulandardingiz!\n\n` +
        `Sizning Chat ID: <code>${chatId}</code>\n\n` +
        `Ushbu ID ni server muhit o'zgaruvchisiga qo'shing:\n` +
        `<b>TELEGRAM_CHAT_IDS=${chatId}</b>\n\n` +
        `Bir nechta admin bo'lsa vergul bilan ajrating:\n` +
        `<b>TELEGRAM_CHAT_IDS=111,222,333</b>`,
    );
  }

  return Response.json({ ok: true });
}
