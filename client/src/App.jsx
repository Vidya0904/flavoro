import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Shopping App</Typography>

          <Button component={Link} sx={{ color: "white" }} to="/products">
            Products
          </Button>

          <Button component={Link} sx={{ color: "white" }} to="/cart">
            Cart ({cart.reduce((t, i) => t + i.qty, 0)})
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
            user ? <Products cart={cart} setCart={setCart} /> : <Login />
          }
        />

        <Route
          path="/cart"
          element={user ? <Cart cart={cart} setCart={setCart} /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
