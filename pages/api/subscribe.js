import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Método no permitido" });
    return;
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(400).json({ message: "Email inválido" });
    return;
  }

  try {
    const API_KEY = process.env.MAILERLITE_API_KEY;
    const GROUP_ID = process.env.GROUP_ID;

    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": API_KEY,
        },
        body: JSON.stringify({
          email: email,
          resubscribe: true,
        }),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Suscripción exitosa" });
    } else {
      const errorData = await response.json();
      res.status(400).json({ message: errorData.message || "Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
}
