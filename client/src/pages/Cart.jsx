import { Typography, Box, Button } from "@mui/material";

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const updateQty = (id, type) => {
    setCart(
      cart
        .map((item) => {
          if (item._id === id) {
            if (type === "inc") {
              return { ...item, qty: item.qty + 1 };
            } else {
              return { ...item, qty: item.qty - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.qty > 0),
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <Box p={3}>
      <Typography variant="h5">Cart</Typography>

      {cart.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        cart.map((item) => (
          <Box key={item._id} mb={2}>
            <Typography>{item.name}</Typography>
            <Typography>₹{item.price}</Typography>

            <Box display="flex" alignItems="center" gap={1}>
              <Button onClick={() => updateQty(item._id, "dec")}>-</Button>
              <Typography>{item.qty}</Typography>
              <Button onClick={() => updateQty(item._id, "inc")}>+</Button>
            </Box>

            <Button color="error" onClick={() => removeFromCart(item._id)}>
              Remove
            </Button>
          </Box>
        ))
      )}

      <Typography variant="h6" mt={2}>
        Total: ₹{totalPrice}
      </Typography>
    </Box>
  );
}

export default Cart;
