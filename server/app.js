import "dotenv/config";
import express from "express";
// import cors from "cors";
import stripe from "stripe";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
// const KEY = process.env.STRIPE_KEY;
// const SECRET = process.env.STRIPE_SECRET;

app.listen(PORT, () => {
  console.log("Server Listening on port", PORT);
});

export default app;
