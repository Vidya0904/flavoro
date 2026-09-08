import { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Box,
  CircularProgress,
} from "@mui/material";

import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Users from "./pages/Users";

function App() {
  const [cart, setCart] = useState([]);

  const [cartLoaded, setCartLoaded] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  // ===============================
  // LOAD CART
  // ===============================

  useEffect(() => {
    const fetchCart = async () => {
      if (!user?._id) {
        setCart([]);
        setCartLoaded(false);
        return;
      }

      setCartLoaded(false);

      try {
        const res = await axios.get(`http://localhost:5000/cart/${user._id}`);

        setCart(res.data.items || []);
      } catch (error) {
        console.log(error);
        setCart([]);
      } finally {
        setCartLoaded(true);
      }
    };

    fetchCart();
  }, [user]);

  // ===============================
  // SAVE CART
  // ===============================

  const saveCartToDB = async (updatedCart) => {
    if (!user?._id) {
      return;
    }

    try {
      await axios.post("http://localhost:5000/cart", {
        userId: user._id,
        items: updatedCart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ===============================
  // LOGOUT
  // ===============================

  const handleLogout = () => {
    localStorage.removeItem("user");

    setUser(null);
    setCart([]);
    setCartLoaded(false);

    navigate("/");
  };

  // ===============================
  // LOADING CART
  // ===============================

  if (user && !cartLoaded) {
    return (
      <>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }

  return (
    <>
      <CssBaseline />

      <AppBar
        position="static"
        sx={{
          backgroundColor: "#66a617",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            Flavoro 🌿
          </Typography>

          {user && (
            <>
              <Button sx={{ color: "white" }} component={Link} to="/products">
                Products
              </Button>

              {user.role === "admin" ? (
                <Button sx={{ color: "white" }} component={Link} to="/users">
                  Users
                </Button>
              ) : (
                <Button sx={{ color: "white" }} component={Link} to="/cart">
                  Cart ({cart.reduce((total, item) => total + item.qty, 0)})
                </Button>
              )}

              <Button sx={{ color: "white" }} onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        {/* LOGIN */}

        <Route
          path="/"
          element={
            user ? (
              <Navigate
                to={user.role === "admin" ? "/products" : "/products"}
              />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />

        {/* SIGNUP */}

        <Route path="/signup" element={<Signup />} />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={
            user ? (
              <Products
                cart={cart}
                setCart={setCart}
                saveCartToDB={saveCartToDB}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            user && user.role !== "admin" ? (
              <Cart cart={cart} setCart={setCart} saveCartToDB={saveCartToDB} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={user?.role === "admin" ? <Admin /> : <Navigate to="/" />}
        />

        {/* USERS */}

        <Route
          path="/users"
          element={user?.role === "admin" ? <Users /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
