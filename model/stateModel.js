const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
    state_name : String,
    contry_code : String,
    state_code : String,
    state_city : String
});

module.exports = mongoose.model('States', stateSchema);