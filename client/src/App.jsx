import { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Box,
  CircularProgress,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  AccountCircle,
  DeleteOutlineOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileNavigation = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

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
        // const res = await axios.get(`http://localhost:5000/cart/${user._id}`);
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/cart/${user._id}`,
        );

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
      // await axios.post("http://localhost:5000/cart", {
      await axios.post(`${import.meta.env.VITE_API_URL}/cart`, {
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

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, mb: 8 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#66a617",
          }}
        >
          <Toolbar>
            {/* MOBILE MENU ICON */}
            <IconButton
              edge="start"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                color: "white",
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* LOGO */}
            <Typography
              sx={{
                flexGrow: 1,
                fontWeight: "800",
                textTransform: "uppercase",
              }}
            >
              Flavoro 🌿
            </Typography>

            {/* DESKTOP NAVIGATION */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Button sx={{ color: "white" }} component={Link} to="/">
                Home
              </Button>

              <Button sx={{ color: "white" }} component={Link} to="/products">
                Products
              </Button>

              {/* <Button sx={{ color: "white" }} component={Link} to="/cart">
                Cart ({cart.reduce((total, item) => total + item.qty, 0)})
              </Button> */}

              {user?.role === "admin" ? (
                <Button sx={{ color: "white" }} component={Link} to="/users">
                  Users
                </Button>
              ) : (
                <Button sx={{ color: "white" }} component={Link} to="/cart">
                  Cart ({cart.reduce((total, item) => total + item.qty, 0)})
                </Button>
              )}

              {user ? (
                <Box>
                  <Button
                    onClick={handleProfileClick}
                    startIcon={<AccountCircle />}
                    sx={{
                      color: "white",
                      textTransform: "none",
                    }}
                  >
                    {user?.name || user?.role}
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileClose}
                  >
                    {user?.role !== "admin" && (
                      <MenuItem
                        onClick={() => {
                          handleProfileClose();
                          handleDeleteAccount();
                        }}
                      >
                        <DeleteOutlineOutlined sx={{ mr: 1 }} />
                        Delete Account
                      </MenuItem>
                    )}

                    <MenuItem
                      onClick={() => {
                        handleProfileClose();
                        handleLogout();
                      }}
                    >
                      <LogoutOutlined sx={{ mr: 1 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>
              )}
            </Box>

            {/* MOBILE LOGIN / PROFILE */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {user ? (
                <Button
                  onClick={handleProfileClick}
                  startIcon={<AccountCircle />}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    minWidth: "auto",
                  }}
                >
                  {user?.name || user?.role}
                </Button>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        {/* MOBILE DRAWER */}
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: "#66a617",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 800,
                  textTransform: "uppercase",
                }}
              >
                Flavoro 🌿
              </Typography>
            </Box>

            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMobileNavigation("/")}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleMobileNavigation("/products")}
                >
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMobileNavigation("/cart")}>
                  <ListItemText
                    primary={`Cart (${cart.reduce(
                      (total, item) => total + item.qty,
                      0,
                    )})`}
                  />
                </ListItemButton>
              </ListItem>

              <Divider />

              {user && (
                <>
                  {user.role === "admin" && (
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleMobileNavigation("/users")}
                      >
                        <ListItemText primary="Users" />
                      </ListItemButton>
                    </ListItem>
                  )}

                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleMobileMenuClose();
                        handleLogout();
                      }}
                    >
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
            </List>
          </Box>
        </Drawer>
      </Box>

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* SIGNUP */}
        <Route path="/signup" element={<Signup />} />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={
            // user ? (
            <Products
              cart={cart}
              setCart={setCart}
              saveCartToDB={saveCartToDB}
            />
            // ) : (
            // <Navigate to="/" />
            // )
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            // user && user.role !== "admin" ? (
            <Cart cart={cart} setCart={setCart} saveCartToDB={saveCartToDB} />
            // ) : (
            // <Navigate to="/" />
            // )
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

      <Footer />
    </>
  );
}

export default App;
