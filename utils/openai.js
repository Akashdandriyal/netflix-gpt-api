const OpenAI = require("openai");

module.exports = new OpenAI({
  apiKey: process.env.GPT_KEY,
});
