const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requestRoutes = require("./routes/requestRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});