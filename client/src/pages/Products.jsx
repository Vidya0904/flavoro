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

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log("DATA:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid xs={4} key={p._id}>
          <Card>
            <Box
              component="img"
              src={p.image}
              alt={p.name}
              width="100px"
              height="100px"
            />

            <CardContent>
              <Typography>{p.name}</Typography>
              <Typography>₹{p.price}</Typography>

              <Button
                variant="contained"
                fullWidth
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
