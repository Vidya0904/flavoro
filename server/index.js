const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const Products = require("./models/Products");
const Cart = require("./models/Cart");
const User = require("./models/User");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  await user.save();

  res.json({ message: "User created" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN DATA:", email, password);

  const user = await User.findOne({ email, password });

  console.log("USER FOUND:", user);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login success", user });
});

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/products/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const products = await Products.find({ user: userId });

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/cart", async (req, res) => {
  try {
    let cart = await Cart.findOne();

    if (!cart) {
      cart = new Cart({ items: [] });
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.post("/cart", async (req, res) => {
//   const { items } = req.body;

//   let cart = await Cart.findOne();

//   if (!cart) {
//     cart = new Cart({ items });
//   } else {
//     cart.items = items;
//   }

//   await cart.save();

//   res.json(cart);
// });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
