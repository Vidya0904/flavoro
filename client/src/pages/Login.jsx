import { useState } from "react";

import axios from "axios";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError("");
    setPasswordError("");

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
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const loggedUser = res.data.user;

      if (loggedUser) {
        setUser(loggedUser);

        localStorage.setItem("user", JSON.stringify(loggedUser));

        setEmail("");
        setPassword("");

        navigate("/products");
      }
    } catch (error) {
      console.log(error);

      if (error.response?.data?.message) {
        setPasswordError(error.response.data.message);
      } else {
        setPasswordError("Login failed");
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
          Welcome to{" "}
          <Box
            component="span"
            sx={{
              color: "#3d6e00",
              fontWeight: 800,
            }}
          >
            Flavoro 🌿
          </Box>
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Join the Flavoro Family and enjoy fresh, organic goodness every day.
        </Typography>

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
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#efffdc",

              "& fieldset": {
                borderColor: "#66a617",
              },

              "&:hover fieldset": {
                borderColor: "#4d7c0f",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#66a617",
                borderWidth: "2px",
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66a617",
            },
          }}
        />

        {/* PASSWORD */}

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          error={!!passwordError}
          helperText={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#efffdc",

              "& fieldset": {
                borderColor: "#66a617",
              },

              "&:hover fieldset": {
                borderColor: "#4d7c0f",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#66a617",
                borderWidth: "2px",
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66a617",
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#66a617",
            borderRadius: "10px",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          New user?{" "}
          <Box
            component="span"
            sx={{
              color: "#3d6e00",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/signup")}
          >
            Signup here
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
