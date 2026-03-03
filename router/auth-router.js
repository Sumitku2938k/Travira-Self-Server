const express = require('express');
const router = express.Router();

// Example route
router.route("/").get("/", (req, res) => {
    res.status(200).send("Hello");
});

router.route('/register').post((req, res) => {
    // Logic for registering a user
    res.status(201).send("User registered successfully");
});

module.exports = router;