import { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login success");
        window.location.href = "/products";
      })
      .catch((err) => {
        alert("Sign in failed");
      });
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Sign in</Typography>

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
