import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BackgroundImage from "../images/authBackgroundImage.jpg";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

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
          margin: "0 auto", // Set margin to auto on both sides
          '@media (max-width: 1000px)': {
            width: '50%',
          },
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign in now
        </Typography>

        <form style={{paddingTop:"30px"}}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            
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
            />
          </FormControl>

          <Typography variant="body2" align="left" padding="30px 0px 5px 0px" gutterBottom>
            Don't have an account? <Link href="#">Sign up</Link>
          </Typography>

          <Button variant="contained" color="primary"  fullWidth>
            Sign In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
