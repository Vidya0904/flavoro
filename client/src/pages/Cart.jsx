import { Typography, Box, Button, Card, CardContent } from "@mui/material";

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
              qty: item.qty - 1,
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
        maxWidth: 900,
        mx: "auto",
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
              mb: 2,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                {item.image && (
                  <Box
                    component="img"
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `http://localhost:5000${item.image}`
                    }
                    alt={item.name}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                    }}
                  />
                )}

                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography>₹{item.price}</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => updateQty(item._id, "dec")}
                    >
                      -
                    </Button>

                    <Typography>{item.qty}</Typography>

                    <Button
                      variant="outlined"
                      onClick={() => updateQty(item._id, "inc")}
                    >
                      +
                    </Button>
                  </Box>

                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    sx={{ mt: 1 }}
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))
      )}

      <Typography
        variant="h5"
        sx={{
          mt: 3,
          fontWeight: 700,
        }}
      >
        Total: ₹{totalPrice}
      </Typography>
    </Box>
  );
}

export default Cart;
