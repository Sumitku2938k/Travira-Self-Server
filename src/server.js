require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const app = express();
const router = require("./routes/auth-router.js");
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", router); // Use the router for API routes

// Start the server
connectDB().then(() => { // Ensure DB is connected before starting server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to start server:', err);  
});

    