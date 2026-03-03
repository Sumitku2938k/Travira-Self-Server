const express = require("express");
const app = express();
const router = require("./router/auth-router");
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", router); // Use the router for API routes

app.get("/", (req, res) => {
    res.status(200).send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
