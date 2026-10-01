import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ cart, setCart, saveCartToDB }) {
  // ===============================
  // REMOVE ITEM
  // ===============================

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);

    setCart(updatedCart);

    saveCartToDB(updatedCart);
  };

  // ===============================
  // UPDATE QUANTITY
  // ===============================

  const updateQty = (id, type) => {
    const updatedCart = cart
      .map((item) => {
        if (item._id === id) {
          if (type === "inc") {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return {
              ...item,
              qty: Math.max(item.qty - 1, 1),
            };
          }
        }

        return item;
      })
      .filter((item) => item.qty > 0);

    setCart(updatedCart);

    saveCartToDB(updatedCart);
  };

  // ===============================
  // TOTAL
  // ===============================

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <Box
      sx={{
        p: 3,
        // maxWidth: 900,
        // mx: "auto",
        px: { xs: 2, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          color: "#3d6e00",
          fontWeight: 700,
        }}
      >
        My Cart 🛒
      </Typography>

      {cart.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        cart.map((item) => (
          <Card
            key={item._id}
            sx={{
              mb: 3,
              borderRadius: "15px",
              boxShadow: "0 0 3px 2px rgba(0, 0, 0, .05)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
                  p: 1.3,
                }}
              >
                {item.image && (
                  <Box
                    component="img"
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : // : `http://localhost:5000${item.image}`
                          `${import.meta.env.VITE_API_URL}${item.image}`
                    }
                    alt={item.name}
                    sx={{
                      width: 150,
                      height: 150,
                      objectFit: "contain",
                      backgroundColor: "#f8f8f8",
                      border: "1px solid #e0e0e0",
                      p: 1,
                    }}
                  />
                )}

                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography sx={{ color: "#777", fontSize: "13px" }}>
                        ({item.price} /Kg)
                      </Typography>

                      <Rating
                        name="simple-controlled"
                        value={3}
                        precision={0.5}
                        readOnly
                        sx={{ color: "#66a617", fontSize: "20px" }}
                      />
                    </Box>

                    <Button
                      color="error"
                      onClick={() => removeFromCart(item._id)}
                      sx={{
                        backgroundColor: "transparent",

                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>

                  {/* <Typography>₹{item.price}</Typography> */}
                  <Typography sx={{ color: "#000", fontSize: "16px" }}>
                    ₹{item.price * item.qty}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                      width: "fit-content",
                      borderRadius: "5px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => updateQty(item._id, "dec")}
                      sx={{
                        border: "1px solid transparent",
                        color: "#000",
                        fontSize: "20px",
                        p: 1.2,
                        minWidth: "1px",
                        lineHeight: "1px",
                        "&:hover": {
                          backgroundColor: "#f8f8f8",
                        },
                      }}
                    >
                      -
                    </Button>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#3d6e00",
                      }}
                    >
                      {item.qty} Kg
                    </Typography>

                    <Button
                      variant="outlined"
                      onClick={() => updateQty(item._id, "inc")}
                      sx={{
                        border: "1px solid transparent",
                        color: "#000",
                        fontSize: "20px",
                        p: 1.2,
                        minWidth: "1px",
                        lineHeight: "1px",
                        "&:hover": {
                          backgroundColor: "#f8f8f8",
                        },
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))
      )}

      <Box
        sx={{
          mt: 3,
          p: 3,
          border: " 1px solid #e0e0e0",
          borderRadius: "10px",
          backgroundColor: "#fff",
          width: "40%",
          marginLeft: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Price Details ({cart.reduce((total, item) => total + item.qty, 0)}{" "}
          items)
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>Product Price</Typography>
          <Typography>₹{totalPrice}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 2,
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Total</Typography>

          <Typography sx={{ fontWeight: 700 }}>₹{totalPrice}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
