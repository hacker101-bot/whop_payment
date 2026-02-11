import Whop from "@whop/sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const minAmount = 1;
  const maxAmount = 2500;
  const currency = (process.env.WHOP_CURRENCY || "eur").toLowerCase();

  const amount = Number(req.body?.amount);
  if (!Number.isFinite(amount)) {
    return res.status(400).json({ error: "Amount must be a number." });
  }

  if (amount < minAmount || amount > maxAmount) {
    return res.status(400).json({
      error: `Amount must be between ${minAmount} and ${maxAmount}. Purchases above $${maxAmount} USD are not enabled for this company.`,
    });
  }

  if (!process.env.WHOP_COMPANY_ID) {
    return res.status(500).json({ error: "Missing WHOP_COMPANY_ID." });
  }

  const client = new Whop({
    apiKey: process.env.WHOP_API_KEY,
  });

  const checkout = await client.checkoutConfigurations.create({
    plan: {
      company_id: process.env.WHOP_COMPANY_ID,
      plan_type: "one_time",
      initial_price: amount,
      currency,
      ...(process.env.WHOP_PRODUCT_ID ? { product_id: process.env.WHOP_PRODUCT_ID } : {}),
    },
  });

  return res.json({ purchase_url: checkout.purchase_url });
}
