import "dotenv/config";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server Listening on port", PORT);
});

export default app;
