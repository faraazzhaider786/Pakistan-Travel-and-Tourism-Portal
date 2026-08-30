const express = require("express");
const router = express.Router();

const Attraction = require("../models/Attractions");


function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );

    return R * c;
}


// GET all attractions

router.get("/", async (req, res) => {

    try {

        const attractions = await Attraction.find();

        res.json(attractions);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch attractions"
        });

    }

});


// GET nearby attractions

router.get("/nearby", async (req, res) => {

    try {

        const { lat, lng, radius = 10 } = req.query;

        if (!lat || !lng) {

            return res.status(400).json({
                message: "Latitude and longitude are required"
            });

        }

        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);

        const attractions = await Attraction.find();

        const nearbyAttractions = attractions
            .map((attraction) => {

                const distance = calculateDistance(
                    userLat,
                    userLng,
                    attraction.latitude,
                    attraction.longitude
                );

                return {
                    ...attraction.toObject(),
                    distance: Number(distance.toFixed(2))
                };

            })
            .filter((attraction) => attraction.distance <= Number(radius))
            .sort((a, b) => a.distance - b.distance);

        res.json(nearbyAttractions);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to find nearby attractions"
        });

    }

});


module.exports = router;