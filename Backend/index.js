const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const clientRoutes = require("./routes/clientRoutes");
app.use(cors());
app.use(express.json());

app.use("/api", clientRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

mongoose.connect("mongodb+srv://alok:alok123@cluster0.yqdnixw.mongodb.net/");
module.exports = app;
