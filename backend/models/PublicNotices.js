const mongoose = require("mongoose");

const publicNoticeSchema = new mongoose.Schema(
    {
        highlight: {
            type: String,
            required: true
        },

        text: {
            type: String,
            default: ""
        },

        fileLink: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("PublicNotice", publicNoticeSchema);