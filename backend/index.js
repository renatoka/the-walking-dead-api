const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const characterRouter = require('./routes/characters')
const PORT = 3000

const app = express();

mongoose.connect(dotenv.config().parsed.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


app.use('/characters', characterRouter)