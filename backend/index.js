const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
require("./Models/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/ping", (req, res) => {
  res.send("Backend is working");
});

app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});