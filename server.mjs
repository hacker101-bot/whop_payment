import "dotenv/config";
import express from "express";
import Whop from "@whop/sdk";

const app = express();
const port = process.env.PORT || 3000;

const client = new Whop({
  apiKey: process.env.WHOP_API_KEY,
});

const minAmount = 1;
const maxAmount = 2500;
const currency = (process.env.WHOP_CURRENCY || "usd").toLowerCase();

app.use(express.json());
app.use(express.static("public"));

app.post("/create-checkout", async (req, res) => {
  try {
    const amount = Number(req.body?.amount);

    if (!Number.isFinite(amount)) {
      return res.status(400).json({ error: "Amount must be a number." });
    }

    if (amount < minAmount || amount > maxAmount) {
      return res
        .status(400)
        .json({
          error: `Amount must be between ${minAmount} and ${maxAmount}. Purchases above $${maxAmount} USD are not enabled for this company.`,
        });
    }

    if (!process.env.WHOP_COMPANY_ID) {
      return res.status(500).json({ error: "Missing WHOP_COMPANY_ID." });
    }

    const checkout = await client.checkoutConfigurations.create({
      plan: {
        company_id: process.env.WHOP_COMPANY_ID,
        plan_type: "one_time",
        initial_price: amount,
        currency,
        ...(process.env.WHOP_PRODUCT_ID
          ? { product_id: process.env.WHOP_PRODUCT_ID }
          : {}),
      },
    });

    return res.json({ purchase_url: checkout.purchase_url });
  } catch (error) {
    const message =
      error?.message || "Failed to create checkout configuration.";
    return res.status(500).json({ error: message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
