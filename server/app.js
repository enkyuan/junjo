import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const key = process.env.STRIPE_KEY;
const secret = process.env.STRIPE_SECRET;

app.listen(PORT, () => {
  console.log("Server Listening on port", PORT);
});

export default app;
