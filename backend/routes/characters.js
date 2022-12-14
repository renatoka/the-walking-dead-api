const express = require("express");
const router = express.Router();
const Character = require("../models/character");

// Get all characters with optional query parameters
router.get("/", async (req, res) => {
  const { name, status, gender, limit, id } = req.query;
  if (name || status || gender || limit || id) {
    const characters = await Character.find({
      Name: new RegExp(name, "i"),
      Status: new RegExp(status, "i"),
      Gender: new RegExp(gender, "i"),
      id: id ? id : { $exists: true },
    }).limit(parseInt(limit));
    if (!characters)
      return res.status(404).send("No characters found. Try again later.");
    res.send(characters);
  } else {
    const characters = await Character.find();
    res.send(characters);
  }
});

// Get random character with or without a specific limit
router.get("/random", async (req, res) => {
  const { status, gender, limit } = req.query;
  try {
    if (status || gender || limit) {
      const characters = await Character.aggregate([
        { $match: { Status: new RegExp(status, "i") } },
        { $match: { Gender: new RegExp(gender, "i") } },
        { $sample: { size: parseInt(limit) } },
      ]);
      if (!characters) return res.status(404).send("No characters found.");
      res.send(characters);
    } else {
      const characters = await Character.aggregate([
        { $sample: { size: 1 } },
      ]);
      res.send(characters);
    }
  } catch (err) {
    if (err) return res.status(404).send("No characters found.");
  }
});

// Make a POST request to /characters to create a new character
router.post("/", async (req, res) => {
  const character = new Character({
    id: req.body.id,
    Name: req.body.Name,
    Gender: req.body.Gender,
    Image: req.body.Image,
    Hair: req.body.Hair,
    FirstAppearance: req.body.FirstAppearance,
    LastAppearance: req.body.LastAppearance,
    CauseOfDeath: req.body.CauseOfDeath,
    DeathEpisode: req.body.DeathEpisode,
    Status: req.body.Status,
    Ethnicity: req.body.Ethnicity,
  });
  try {
    const newCharacter = await character.save();
    print("Posted character: " + newCharacter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
