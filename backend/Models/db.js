require("dotenv").config();   // Loads variables from .env file into process.env
const mongoose = require("mongoose");


// Retrieve MongoDB URI from environment variables
const mongo_url = process.env.MONGO_URI;


// Debugging: log the MongoDB URI to ensure it's loaded correctly
console.log("Mongo URL:", mongo_url); 


// -------------------- Connect to MongoDB --------------------
mongoose.connect(mongo_url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB Connection Error:", err));