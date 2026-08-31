require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const PublicNotice = require("./models/PublicNotices");

const noticesData = [
    {
        highlight: "Tender Advertisement-",
        text: " Printing of Publicity Material",
        fileLink: "/publicNotices/printing_of_publicity_material.pdf"
    },
    {
        highlight: "Tender Document-",
        text: " Printing of Publicity Material",
        fileLink: "/publicNotices/doc2.pdf"
    },
    {
        highlight: "Tender Advertisement-",
        text: " Procurement of SMD's/Digital Standees and Laptops",
        fileLink: "/publicNotices/doc3.pdf"
    },
    {
        highlight: "Tender Document-",
        text: " Procurement of SMD's/Digital Standees and Laptops",
        fileLink: "/publicNotices/printing_of_publicity_material.pdf"
    },
    {
        highlight: "Auction of Office Items-",
        text: " Auction of Office Items",
        fileLink: "/publicNotices/doc2.pdf"
    },
    {
        highlight: "Advertisement (Tender Notice) -",
        text: " Outsourcing of Flashman's Hotel Rawalpindi",
        fileLink: "/publicNotices/doc3.pdf"
    },
    {
        highlight:
            "Tender Document | Invition to Bids regarding Outsourcing of Flashman's Hotel Rawalpindi",
        text: "",
        fileLink: "/publicNotices/printing_of_publicity_material.pdf"
    },
    {
        highlight: "Tender Notice advertisement -",
        text: " Tender notice for printing booklets and publicity materials!",
        fileLink: "/publicNotices/doc2.pdf"
    },
    {
        highlight:
            "Tender Document for Provision of Services for Printing / Re Printing of Publicity Material",
        text: "",
        fileLink: "/publicNotices/doc3.pdf"
    },
    {
        highlight: "Auction Of Vehicle -",
        text: " PTDC vehicle auction",
        fileLink: "/publicNotices/printing_of_publicity_material.pdf"
    },
    {
        highlight: "Prequalification Document -",
        text: " PTDC's Lands in Gilgit Baltistan",
        fileLink: "/publicNotices/doc2.pdf"
    },
    {
        highlight: "Advertisement -",
        text: " PTDC Lands in Gilgit Baltistan",
        fileLink: "/publicNotices/doc3.pdf"
    },
    {
        highlight: "Updated - Invitation for Open Competitive Financial Bidding",
        text: " for PTDC Properties",
        fileLink: "/publicNotices/printing_of_publicity_material.pdf"
    },
    {
        highlight: "Invitation for Open Competitive Financial Bidding",
        text: " for Flashman's Hotel Rawalpindi",
        fileLink: "/publicNotices/doc2.pdf"
    }
];

const seedPublicNotices = async () => {
    try {
        await connectDB();

        await PublicNotice.deleteMany();

        await PublicNotice.insertMany(noticesData);

        console.log("Public notices loaded successfully!");

        await mongoose.connection.close();

        process.exit(0);

    } catch (error) {

        console.error("Error loading public notices:", error);

        process.exit(1);
    }
};

seedPublicNotices();