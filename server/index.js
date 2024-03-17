import express from "express";
import config from "./config.js";

const app = express();
const port = config.port;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("Server running on port", process.env.PORT);
