import { useEffect, useState } from "react";

import axios from "axios";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Products({
  cart,
  setCart,
  saveCartToDB,
  wishlist,
  setWishlist,
  saveWishlistToDB,
}) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // ===============================
  // GET PRODUCTS
  // ===============================

  const fetchProducts = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/products");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ===============================
  // ADD TO CART
  // ===============================

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    let updatedCart;

    if (exist) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item,
      );
    } else {
      updatedCart = [
        ...cart,

        {
          ...product,
          productId: product._id,
          qty: 1,
        },
      ];
    }

    setCart(updatedCart);

    saveCartToDB(updatedCart);
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item._id === product._id);

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [
        ...wishlist,
        {
          ...product,
          productId: product._id,
        },
      ];
    }

    setWishlist(updatedWishlist);
    saveWishlistToDB(updatedWishlist);
  };

  // ===============================
  // DELETE PRODUCT
  // ===============================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      // await axios.delete(`http://localhost:5000/delete-product/${id}`);
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-product/${id}`,
      );

      setProducts(products.filter((product) => product._id !== id));

      alert("Product deleted successfully");
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#3d6e00",
        }}
      >
        Products 🌿
      </Typography>

      {user?.role === "admin" && (
        <Button
          variant="contained"
          onClick={() => navigate("/admin")}
          sx={{
            backgroundColor: "#66a617",
            "&:hover": {
              backgroundColor: "#4d7c0f",
            },
          }}
        >
          + Add Product
        </Button>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid
            key={product._id}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: "7px",
                boxShadow: 0,
                backgroundColor: "#f8f8f8",
              }}
            >
              <Box
                component="img"
                // src={
                //   // product.image ? `http://localhost:5000${product.image}` : ""
                //   product.image
                //     ? `${import.meta.env.VITE_API_URL}${product.image}`
                //     : ""
                // }
                src={product.image || ""}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "contain",
                  p: 2,
                }}
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {product.name}
                  </Typography>

                  <Button
                    onClick={() => toggleWishlist(product)}
                    sx={{
                      minWidth: "auto",
                      p: 0.5,
                      color: wishlist.some((item) => item._id === product._id)
                        ? "#e53935"
                        : "#777",

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {wishlist.some((item) => item._id === product._id) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </Button>
                </Box>
                <Rating
                  name="simple-controlled"
                  value={4}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#66a617", fontSize: "20px" }}
                />
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Typography
                    sx={{
                      color: "#66a617",
                      fontWeight: 700,
                    }}
                  >
                    ₹{product.price}
                  </Typography>
                  <Typography variant="body2" sx={{ ml: "3px", color: "#777" }}>
                    /Kg
                  </Typography>
                </Box>
                {user?.role === "admin" ? (
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete Product
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#66a617",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBasketOutlinedIcon sx={{ fontSize: "25px" }} />
                    <Typography variant="body1">Basket</Typography>
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
