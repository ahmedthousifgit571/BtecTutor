import { normalizePhoneForWa } from "@/lib/utils";

interface WhatsAppAlertPayload {
  name: string;
  email: string;
  phone?: string | null;
  course?: string | null;
  message?: string | null;
}

// Sends a plain-text WhatsApp message via Meta's Cloud API. Returns silently on
// success; throws on transport / API errors so callers can decide whether to
// log and swallow or surface the failure. The integration is fully optional —
// if the required env vars are missing, `sendWhatsAppEnquiryAlert` is a no-op.
//
// Required env vars to enable:
//   WHATSAPP_BUSINESS_ALERT_ENABLED = "true"
//   WHATSAPP_API_TOKEN              = Meta access token
//   WHATSAPP_PHONE_NUMBER_ID        = numeric phone number id from Meta
//   WHATSAPP_RECIPIENT_E164         = team number to receive alerts (E.164, no "+")
//
// Note: outside Meta's 24-hour customer-service window, business-initiated
// messages must use a pre-approved template. To use a template, set:
//   WHATSAPP_ALERT_TEMPLATE         = template name (omit for plain text)
//   WHATSAPP_ALERT_TEMPLATE_LANG    = template language code, defaults to "en"
async function sendCloudApiText(opts: {
  token: string;
  phoneNumberId: string;
  to: string;
  body: string;
  template?: { name: string; language: string };
}): Promise<void> {
  const url = `https://graph.facebook.com/v20.0/${opts.phoneNumberId}/messages`;

  const payload = opts.template
    ? {
        messaging_product: "whatsapp",
        to: opts.to,
        type: "template",
        template: {
          name: opts.template.name,
          language: { code: opts.template.language },
          components: [
            {
              type: "body",
              parameters: [{ type: "text", text: opts.body }],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to: opts.to,
        type: "text",
        text: { body: opts.body },
      };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `WhatsApp Cloud API responded ${response.status}: ${text || response.statusText}`
    );
  }
}

function buildAlertBody(payload: WhatsAppAlertPayload): string {
  const lines = [
    "New BTechTutor enquiry",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
  ];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.course) lines.push(`Interest: ${payload.course}`);
  if (payload.message) lines.push(`Message: ${payload.message}`);
  return lines.join("\n");
}

export async function sendWhatsAppEnquiryAlert(
  payload: WhatsAppAlertPayload
): Promise<void> {
  if (process.env.WHATSAPP_BUSINESS_ALERT_ENABLED !== "true") return;

  const token = process.env.WHATSAPP_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = normalizePhoneForWa(process.env.WHATSAPP_RECIPIENT_E164);

  if (!token || !phoneNumberId || !recipient) {
    throw new Error(
      "WhatsApp alerts enabled but WHATSAPP_API_TOKEN, WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_RECIPIENT_E164 is missing"
    );
  }

  const body = buildAlertBody(payload);
  const templateName = process.env.WHATSAPP_ALERT_TEMPLATE;
  const template = templateName
    ? {
        name: templateName,
        language: process.env.WHATSAPP_ALERT_TEMPLATE_LANG || "en",
      }
    : undefined;

  await sendCloudApiText({
    token,
    phoneNumberId,
    to: recipient,
    body,
    template,
  });
}
