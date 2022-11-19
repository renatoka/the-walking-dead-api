const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    id : {type: Number, required: true},
    Name : {type: String, required: true},
    Gender : {type: String, required: true},
    Image : {type: String, required: true},
    Hair : {type: String, required: false},
    FirstAppearance : {type: String, required: false},
    LastAppearance : {type: String, required: false},
    CauseOfDeath : {type: String, required: false},
    DeathEpisode : {type: String, required: false},
    Status : {type: String, required: true},
    Ethnicity : {type: String, required: false}
}, {versionKey: false});

module.exports = mongoose.model('Character', characterSchema);