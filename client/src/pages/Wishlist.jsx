import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Rating,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

function Wishlist({
  wishlist,
  setWishlist,
  saveWishlistToDB,
  cart,
  setCart,
  saveCartToDB,
}) {
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);

    setWishlist(updatedWishlist);
    saveWishlistToDB(updatedWishlist);
  };

  return (
    <>
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#3d6e00",
            mb: 3,
          }}
        >
          My Wishlist ❤️
        </Typography>

        <Typography sx={{ color: "#777" }}>
          {wishlist.length} product{wishlist.length !== 1 ? "s" : ""} in your
          wishlist
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {wishlist.map((item) => (
            <Grid key={item._id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                  src={item.image || ""}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "contain",
                    p: 2,
                  }}
                />

                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.name}
                  </Typography>

                  <Rating
                    value={item.rating || 0}
                    precision={0.5}
                    readOnly
                    sx={{
                      color: "#66a617",
                      fontSize: "20px",
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#66a617",
                        fontWeight: 700,
                      }}
                    >
                      ₹{item.price}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        ml: "3px",
                        color: "#777",
                      }}
                    >
                      /Kg
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#66a617",
                      "&:hover": {
                        backgroundColor: "#4d7c0f",
                      },
                    }}
                    onClick={() => {
                      const exists = cart.find(
                        (cartItem) => cartItem._id === item._id,
                      );

                      let updatedCart;

                      if (exists) {
                        updatedCart = cart.map((cartItem) =>
                          cartItem._id === item._id
                            ? {
                                ...cartItem,
                                qty: cartItem.qty + 1,
                              }
                            : cartItem,
                        );
                      } else {
                        updatedCart = [
                          ...cart,
                          {
                            ...item,
                            productId: item._id,
                            qty: 1,
                          },
                        ];
                      }

                      setCart(updatedCart);
                      saveCartToDB(updatedCart);
                    }}
                  >
                    Basket <ShoppingBasketOutlinedIcon sx={{ ml: 1 }} />
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    sx={{ mt: 1 }}
                    onClick={() => removeFromWishlist(item._id)}
                  >
                    Remove from Wishlist
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Wishlist;
