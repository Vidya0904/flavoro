import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cart_${user._id}`);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user._id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCart([]);
    window.location.href = "/";
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Shopping App</Typography>

          {user && <Typography sx={{ mr: 2 }}>{user.email}</Typography>}

          <Button component={Link} sx={{ color: "white" }} to="/products">
            Products
          </Button>

          <Button component={Link} sx={{ color: "white" }} to="/cart">
            Cart ({cartCount})
          </Button>

          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/products"
          element={
            user ? (
              <Products cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/cart"
          element={
            user ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />
          }
        />

        <Route
          path="/admin"
          element={
            user && user.role === "admin" ? <Admin /> : <Navigate to="/" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
