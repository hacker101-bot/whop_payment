import "dotenv/config";
import Whop from "@whop/sdk";

const client = new Whop({
  apiKey: process.env.WHOP_API_KEY,
});

const plan = await client.plans.create({
  company_id: "biz_FzYQVNmZBjVIE7",
  product_id: "prod_VNaLf2YMq6ngu", // or access_pass_id: "pass_xxxxxxxxxxxxx"
  plan_type: "one_time",
  initial_price: 1.0,
});

console.log(plan.purchase_url);
