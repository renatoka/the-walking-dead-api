const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const path = require('path');
const characterRouter = require('./routes/characters')
const PORT = process.env.PORT || 5000
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

app.use('/api/characters', characterRouter)

setInterval(() => {
    axios.get('https://the-walking-dead-api.onrender.com/api/characters')
    console.log('Pinged to stay alive')
}, 780000);
