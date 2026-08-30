require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const attractionRoutes = require("./routes/attractionRoutes");
const publicationRoutes = require("./routes/publicationRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/attractions", attractionRoutes);
app.use("/api/publications", publicationRoutes);

app.get("/", (req, res) => {
    res.send("Tourism API is running!");
});

// Start server
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});