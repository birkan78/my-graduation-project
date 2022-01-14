require("dotenv").config();

const express = require("express");

const connectDB = require("./config/database");
const { productModel } = require("./models/Product");

const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.static("frontend"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

const storeItems = new Map([
  [1, { priceInCents: 100000, name: "MacBook Pro" }],
  [2, { priceInCents: 17000, name: "Apple Airpods 3rd Generation" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on  the port ${PORT}`));
