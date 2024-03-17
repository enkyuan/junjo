const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // endpoint: process.env.API_URL,
  masterKey: process.env.STRIPE_API_KEY,
  masterSecret: process.env.STRIPE_API_SECRET,
  port: process.env.PORT,
};
