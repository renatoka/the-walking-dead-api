const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const characterRouter = require('./routes/characters')
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json())

mongoose.connect(dotenv.config().parsed.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

app.use('/api', characterRouter)