const express = require("express");
const router = express.Router();
const aiClient = require("../utils/aiClient");

router.get("/", (req, res, next) => {
  res.send({ title: "gpt" });
});

router.get("/movieRecommendations", async (req, res) => {
  try {
    const query = `Act as a movie recommendation system and recommend some movies for the query: ${req.query.searchQuery}. Only give me names of 10 movies, comma seperated like the example result ahead. Example- Chak de India, Annihilation, Madagascar, Wall E`;
    const gptRecommendations = await aiClient.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: process.env.AI_MODEL || "minimax/minimax-m3:free",
    });
    res.send(gptRecommendations.choices);
  } catch (err) {
    console.error("movieRecommendations failed:", err);
    res.status(500).json({ error: "Failed to fetch movie recommendations" });
  }
});

module.exports = router;
