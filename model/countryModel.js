const mongoose = require("mongoose");

const countryschema = mongoose.Schema({
    contry_name : String,
    contry_code : String,
    contry_phone_code :String,
    country_region : String,
    country_states : String
});

module.exports = mongoose.model('Country', countryschema);