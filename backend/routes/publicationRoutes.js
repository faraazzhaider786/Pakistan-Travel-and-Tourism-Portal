const express = require("express");
const router = express.Router();

const Publication = require("../models/Publication");


// GET all publications
router.get("/", async (req, res) => {

    try {

        const publications = await Publication.find();

        res.json(publications);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch publications"
        });

    }

});


module.exports = router;