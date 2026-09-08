import { useState } from "react";

import axios from "axios";

import { TextField, Button, Box, Typography, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters");
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful 🎉");

      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.response?.data?.message) {
        setEmailError(error.response.data.message);
      } else {
        setEmailError("Signup failed");
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#c2de65",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.65)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            fontWeight: 600,
          }}
        >
          Join the{" "}
          <Box
            component="span"
            sx={{
              color: "#3d6e00",
              fontWeight: 800,
            }}
          >
            Flavoro Family 🌿
          </Box>
        </Typography>

        {/* NAME */}

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={name}
          error={!!nameError}
          helperText={nameError}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
        />

        {/* EMAIL */}

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          error={!!emailError}
          helperText={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />

        {/* PASSWORD */}

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          error={!!passwordError}
          helperText={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#66a617",
          }}
          onClick={handleSignup}
        >
          Signup
        </Button>

        <Typography
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <Box
            component="span"
            sx={{
              color: "#3d6e00",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Login
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signup;
