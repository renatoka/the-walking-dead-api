const express = require("express");
const router = express.Router();
const Quote = require("../models/quote");

// Get all quotes with optional parameters
router.get("/", async (req, res) => {
  try {
    const { author, season, episode, id, limit } = req.query
    if (author || season || episode || id || limit) {
      const quotes = await Quote.find({
        author: new RegExp(author, "i"),
        season: season ? season : { $exists: true },
        episode: new RegExp(episode, "i"),
        id: id ? id : { $exists: true },
      }).limit(parseInt(limit))
      if (!quotes) {
        return res.status(404).send("No quotes found. Try again later.")
      }
      res.send(quotes)
    } else {
      const quotes = await Quote.find()
      res.send(quotes)
    }
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// Get random quote with optional parameters
router.get("/random", async (req, res) => {
  try {
    const { limit }  = req.query
    if (limit) {
      const quotes = await Quote.aggregate([
        {$sample : {size: parseInt(limit)}}
      ]);
      if (!quotes) return res.status(404).send("No quotes found.")
      res.send(quotes)
    } else {
      const quotes = await Quote.aggregate([
        {$sample: {size: 1}}
      ])
      res.send(quotes)
    }
  } catch(error) {
    if (error) return res.status(404).send("No quotes found.")
  }
})

// Used to post many quotes at once
router.post("/", async (req, res) => {
  try {
    const quotes = await Quote.insertMany(req.body);
    res.status(201).json(quotes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;