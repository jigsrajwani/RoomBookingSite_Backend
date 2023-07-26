const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/room_booking";

async function connectToMongo() {
    await mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });
}

module.exports = connectToMongo;