import { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:5000/add-product", {
        name,
        price,
        image,
      });

      alert("Product Added");

      setName("");
      setPrice("");
      setImage("");

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Add Product (Admin)</Typography>

      <TextField
        label="Product Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Price"
        fullWidth
        margin="normal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <TextField
        label="Image URL / Path"
        fullWidth
        margin="normal"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button variant="contained" fullWidth onClick={handleAddProduct}>
        Add Product
      </Button>
    </Box>
  );
}

export default Admin;
