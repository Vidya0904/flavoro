import { useEffect, useState } from "react";

import axios from "axios";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Products({ cart, setCart, saveCartToDB }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // ===============================
  // GET PRODUCTS
  // ===============================

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");

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
      await axios.delete(`http://localhost:5000/delete-product/${id}`);

      setProducts(products.filter((product) => product._id !== id));

      alert("Product deleted successfully");
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
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
              md: 4,
            }}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: "15px",
                boxShadow: 4,
              }}
            >
              <Box
                component="img"
                src={
                  product.image ? `http://localhost:5000${product.image}` : ""
                }
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "contain",
                  p: 2,
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#66a617",
                    fontWeight: 700,
                    mt: 1,
                  }}
                >
                  ₹{product.price}
                </Typography>

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
                    }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
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
