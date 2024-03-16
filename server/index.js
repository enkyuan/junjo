import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("Server running on port", process.env.PORT);
