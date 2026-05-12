type ContactPayload = {
  name?: unknown;
  phone?: unknown;
};

type TelegramUpdate = {
  update_id?: number;
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
  const response = await fetch(
    `${TELEGRAM_API}/bot${token}/getUpdates?limit=100&allowed_updates=["message"]`,
    { cache: "no-store" },
  );

  if (!response.ok) return [];

  const data = (await response.json()) as {
    ok?: boolean;
    result?: TelegramUpdate[];
  };

  if (!data.ok || !Array.isArray(data.result)) return [];

  // Accept any private message sender, not just /start
  const chatIds = data.result
    .filter((u) => {
      const type = u.message?.chat?.type;
      return type === "private" || type === "group" || type === "supergroup";
    })
    .map((u) => u.message?.chat?.id)
    .filter((id): id is number => typeof id === "number")
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
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return Response.json(
      { error: "Telegram bot token is not configured" },
      { status: 500 },
    );
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

  const configuredIds = getConfiguredChatIds();
  const targetChatIds =
    configuredIds.length > 0 ? configuredIds : await getStartedChatIds(token);

  if (targetChatIds.length === 0) {
    return Response.json(
      {
        error:
          "Telegram chat recipients are not configured. " +
          "Set TELEGRAM_CHAT_IDS env var, or send /start to your bot first. " +
          "Use /api/telegram webhook to get your Chat ID automatically.",
      },
      { status: 500 },
    );
  }

  const text = [
    `📩 <b>Yangi so'rov — GAC Uzbekistan</b>`,
    ``,
    `👤 Ism: <b>${name}</b>`,
    `📞 Telefon: <b>${phone}</b>`,
  ].join("\n");

  const results = await Promise.all(
    targetChatIds.map((chatId) => sendTelegramMessage(token, chatId, text)),
  );

  if (!results.some(Boolean)) {
    return Response.json(
      { error: "Telegram message was not delivered" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
