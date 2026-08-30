require("dotenv").config();

const connectDB = require("./config/db");
const Attraction = require("./models/Attractions");
const attractions = require("./data/attractions");

const seedDatabase = async () => {
    try {

        // Connect to MongoDB
        await connectDB();

        // Remove existing attraction data
        await Attraction.deleteMany();

        // Insert attractions into MongoDB
        await Attraction.insertMany(attractions);

        console.log("Attractions successfully added to MongoDB!");

        process.exit();

    } catch (error) {

        console.error("Error seeding database:", error.message);

        process.exit(1);
    }
};

seedDatabase();