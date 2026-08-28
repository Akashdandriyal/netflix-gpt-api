const OpenAI = require("openai");

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error(
    "Missing OPENROUTER_API_KEY. Add it to your .env file - get a key at https://openrouter.ai/keys"
  );
}

module.exports = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  // Free models can sit queued indefinitely while OpenRouter holds the
  // connection open, so cap the wait rather than hanging the caller.
  timeout: 30000,
  maxRetries: 1,
  defaultHeaders: {
    "HTTP-Referer": process.env.APP_URL || "https://netflix-gptstream.vercel.app",
    "X-OpenRouter-Title": "NetflixGPT",
  },
});
