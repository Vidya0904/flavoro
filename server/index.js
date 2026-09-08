const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const connectDB = require("./config/db");

const Product = require("./models/Product");
const Cart = require("./models/Cart");
const User = require("./models/User");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// ===============================
// BASIC ROUTE
// ===============================

app.get("/", (req, res) => {
  res.send("Flavoro Backend is running 🌿");
});

// ===============================
// IMAGE UPLOAD
// ===============================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

app.use("/uploads", express.static("uploads"));

// ===============================
// SIGNUP
// ===============================

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const user = new User({
      name,
      email,
      password,
      role: "user",
    });

    await user.save();

    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// LOGIN
// ===============================

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    res.json({
      message: "Login success",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// GET ALL PRODUCTS
// ===============================

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// GET PRODUCTS BY USER
// ===============================

app.get("/products/:userId", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// ADD PRODUCT
// ===============================

app.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        message: "Product name and price are required",
      });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newProduct = new Product({
      name,
      price,
      image,
    });

    await newProduct.save();

    res.json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// DELETE PRODUCT
// ===============================

app.delete("/delete-product/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Delete product image
    if (product.image) {
      const imagePath = path.join(
        __dirname,
        product.image.replace(/^[/\\]/, ""),
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Delete product
    await Product.findByIdAndDelete(id);

    // Remove product from every user's cart
    await Cart.updateMany(
      {},
      {
        $pull: {
          items: {
            productId: id,
          },
        },
      },
    );

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// GET USER CART
// ===============================

app.get("/cart/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId,
    });

    res.json(
      cart || {
        userId: req.params.userId,
        items: [],
      },
    );
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// SAVE USER CART
// ===============================

app.post("/cart", async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { items: items || [] },
      {
        new: true,
        upsert: true,
      },
    );

    res.json(cart);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// ADMIN - GET USERS
// ===============================

app.get("/admin/users", async (req, res) => {
  try {
    const users = await User.find();

    const result = await Promise.all(
      users.map(async (user) => {
        const cart = await Cart.findOne({
          userId: user._id.toString(),
        });

        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,

          totalProducts: cart
            ? cart.items.reduce((sum, item) => sum + item.qty, 0)
            : 0,

          products: cart
            ? cart.items.map((item) => ({
                name: item.name,
                qty: item.qty,
                price: item.price,
                total: item.price * item.qty,
              }))
            : [],

          cartAmount: cart
            ? cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0,
        };
      }),
    );

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// DELETE OWN ACCOUNT
// ===============================

app.delete("/delete-account/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(id);

    await Cart.deleteOne({
      userId: id,
    });

    res.json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ===============================
// DELETE USER (ADMIN)
// ===============================

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user's cart also
    await Cart.deleteOne({ userId: req.params.id });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// SERVER
// ===============================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
