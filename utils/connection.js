const mongoose = require("mongoose");
async function connect(url, options = {}) {
    // Connect to the database
    try {
        await mongoose.connect(url, options);
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Error connecting to the database: ", error.message);
    }
}

module.exports = { connect };
