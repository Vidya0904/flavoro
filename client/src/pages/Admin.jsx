import { useState } from "react";

import axios from "axios";

import { TextField, Button, Box, Typography, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!name || !price || !image) {
      alert("Please fill all fields");

      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", name);

      formData.append("price", price);

      formData.append("image", image);

      await axios.post("http://localhost:5000/add-product", formData);

      alert("Product added successfully 🎉");

      setName("");
      setPrice("");
      setImage(null);

      navigate("/products");
    } catch (error) {
      console.log(error);

      alert("Product add failed");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Paper
        sx={{
          p: 4,
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#3d6e00",
          }}
        >
          Add Product 🌿
        </Typography>

        <TextField
          label="Product Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
          Choose Product Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Button>

        {image && (
          <Typography sx={{ mt: 1 }}>Selected: {image.name}</Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#66a617",
          }}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Paper>
    </Box>
  );
}

export default Admin;
