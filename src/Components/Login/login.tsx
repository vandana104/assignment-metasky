import React, { useState } from "react";
import { Container, Typography, TextField, Button, Link, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BackgroundImage from "../images/authBackgroundImage.jpg";
import { useDispatch } from "react-redux"; // Assuming you are using Redux
import { useNavigate, NavigateFunction } from "react-router-dom"; // Assuming you are using React Router
import { loginSuccess } from "../../utils/auth";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const isUsernameValid: boolean =
      /^[a-z]+$/.test(username) || /\S+@\S+\.\S+/.test(username);

    const isPasswordValid: boolean = password.length >= 8;

    if (isUsernameValid && isPasswordValid) {
      alert("Login successful!");
      dispatch(loginSuccess(username)); // Assuming you have a loginSuccess action creator
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      if (!isUsernameValid) {
        alert(
          "Username should contain only small letters or be a valid email.",
        );
      }
      if (!isPasswordValid) {
        alert("Password should have at least 8 characters.");
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          padding: "70px 20px 20px 20px",
          height: "500px",
          width: "25%",
          margin: "0 auto",
          '@media (max-width: 1000px)': {
            width: '50%',
          },
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign in now
        </Typography>

        <form style={{ paddingTop: "30px" }}>
          <TextField
            label="Username or Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleUsernameChange}
          />

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={handlePasswordChange}
            />
          </FormControl>

          <Typography variant="body2" align="left" padding="30px 0px 5px 0px" gutterBottom>
            Don't have an account? <Link href="#">Sign up</Link>
          </Typography>

          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
