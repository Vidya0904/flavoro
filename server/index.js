const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const Products = require("./models/Products");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.get("/products", async (req, res) => {
  const products = await Products.find();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
