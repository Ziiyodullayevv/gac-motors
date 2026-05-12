type ContactPayload = {
  name?: unknown;
  phone?: unknown;
};

type TelegramUpdate = {
  message?: {
    chat?: {
      id?: number;
      type?: string;
    };
    text?: string;
  };
};

const TELEGRAM_API = "https://api.telegram.org";

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getConfiguredChatIds() {
  return (process.env.TELEGRAM_CHAT_IDS ?? "")
    .split(",")
    .map((chatId) => chatId.trim())
    .filter(Boolean);
}

async function getStartedChatIds(token: string) {
  const response = await fetch(`${TELEGRAM_API}/bot${token}/getUpdates`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as { ok?: boolean; result?: TelegramUpdate[] };
  if (!data.ok || !Array.isArray(data.result)) {
    return [];
  }

  const chatIds = data.result
    .filter((update) => update.message?.text === "/start")
    .map((update) => update.message?.chat?.id)
    .filter((chatId): chatId is number => typeof chatId === "number")
    .map(String);

  return Array.from(new Set(chatIds));
}

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  const response = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return Response.json({ error: "Telegram bot token is not configured" }, { status: 500 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = normalize(payload.name);
  const phone = normalize(payload.phone);

  if (!name || !phone || name.length > 80 || phone.length > 40) {
    return Response.json({ error: "Invalid contact data" }, { status: 400 });
  }

  const chatIds = getConfiguredChatIds();
  const targetChatIds = chatIds.length > 0 ? chatIds : await getStartedChatIds(token);

  if (targetChatIds.length === 0) {
    return Response.json({ error: "Telegram chat recipients are not configured" }, { status: 500 });
  }

  const text = [`Yangi kontakt so'rovi`, `Ism: ${name}`, `Telefon: ${phone}`].join("\n");
  const results = await Promise.all(targetChatIds.map((chatId) => sendTelegramMessage(token, chatId, text)));

  if (!results.some(Boolean)) {
    return Response.json({ error: "Telegram message was not delivered" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
