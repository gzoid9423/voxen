// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const webhookUrl = "https://gzoidx.app.n8n.cloud/webhook/lovable";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) throw new Error("Webhook request failed");

    return res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).json({ message: "Webhook error" });
  }
}
