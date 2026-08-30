const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        pdfLink: {
            type: String,
            required: true
        },

        fallbackColor: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Publication", publicationSchema);