const express = require('express');
const router = express.Router();
const Character = require('../models/character');


router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Make a POST request to /characters to create a new character


module.exports = router;