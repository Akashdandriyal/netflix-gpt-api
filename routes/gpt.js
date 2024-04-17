const express = require("express");
const router = express.Router();
const openai = require("../utils/openai");

router.get("/", (req, res, next) => {
  res.send({ title: "gpt" });
});

router.get("/movieRecommendations", async (req, res) => {
  try {
    const query = `Act as a movie recommendation system and recommend some movies for the query: ${req.query.searchQuery}. Only give me names of 10 movies, comma seperated like the example result ahead. Example- Chak de India, Annihilation, Madagascar, Wall E`;
    const gptRecommendations = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    res.send(gptRecommendations.choices);
  } catch (err) {
    res.send(err).statusCode(500);
  }
});

module.exports = router;
