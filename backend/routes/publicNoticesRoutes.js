const express = require("express");
const router = express.Router();

const PublicNotice = require("../models/PublicNotices");

// GET all public notices
router.get("/", async (req, res) => {
    try {
        const notices = await PublicNotice.find().sort({ createdAt: -1 });

        res.json(notices);

    } catch (error) {
        console.error("Error fetching public notices:", error);

        res.status(500).json({
            message: "Failed to fetch public notices"
        });
    }
});

module.exports = router;