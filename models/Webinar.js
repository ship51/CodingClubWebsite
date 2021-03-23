const mongoose = require("mongoose");

//Schema setup
const Schema = mongoose.Schema
var WebinarSchema = new Schema({
    Title: String,
    StartDate: {
        type: Date,
        default: Date.now
    },
    EndDate: {
        type: Date,
        default: Date.now
    },
    Time: String,
    ShortDescription: String,
    RegistrationLink: String,
    FileName: String
});

module.exports = mongoose.model("Webinar", WebinarSchema);