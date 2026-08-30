const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    region: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    latitude: {
        type: Number,
        required: true
    },

    longitude: {
        type: Number,
        required: true
    },

    image: {
        type: String
    }

});

const Attraction = mongoose.model("Attraction", attractionSchema);

module.exports = Attraction;