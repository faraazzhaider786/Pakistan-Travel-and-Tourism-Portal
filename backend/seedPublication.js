require("dotenv").config();

const mongoose = require("mongoose");
const Publication = require("./models/Publication");

const publications = [
    {
        title: "Pakistan Tourism Barometer 2025-26",
        image: "/publications/publication-1.jpg",
        pdfLink: "/publications/publication-1.pdf",
        fallbackColor: "#2F6B34"
    },
    {
        title: "Pakistan Tourism Barometer 2024-25",
        image: "/publications/publication-2.jpg",
        pdfLink: "/publications/publication-2.pdf",
        fallbackColor: "#2F6B34"
    },
    {
        title: "Tourism in Pakistan",
        image: "/publications/publication-3.png",
        pdfLink: "/publications/publication-3.pdf",
        fallbackColor: "#4A7A38"
    },
    {
        title: "ECO Tourism in Pakistan",
        image: "/publications/publication-4.png",
        pdfLink: "/publications/publication-4.pdf",
        fallbackColor: "#244C33"
    },
    {
        title: "Pakistan's Sikh Heritage Trail",
        image: "/publications/publication-5.png",
        pdfLink: "/publications/publication-5.pdf",
        fallbackColor: "#0D7A74"
    },
    {
        title: "Buddhist Heritage Trail",
        image: "/publications/publication-6.png",
        pdfLink: "/publications/publication-6.pdf",
        fallbackColor: "#A38626"
    },
    {
        title: "Taxila Sites",
        image: "/publications/publication-7.png",
        pdfLink: "/publications/publication-7.pdf",
        fallbackColor: "#A38626"
    },
    {
        title: "World Heritage Sites in Pakistan",
        image: "/publications/publication-8.png",
        pdfLink: "/publications/publication-8",
        fallbackColor: "#0B6661"
    }
];

const seedDatabase = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        await Publication.deleteMany();

        await Publication.insertMany(publications);

        console.log("Publications inserted successfully");

        await mongoose.connection.close();

    } catch (error) {

        console.error("Error:", error);

        process.exit(1);
    }
};

seedDatabase();