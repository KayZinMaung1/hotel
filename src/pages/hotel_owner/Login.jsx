import {
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import login from "../../assets/images/login.jpg";
import React, { useEffect, useState } from "react";
import Appbar from "../../components/AppBar";
import { loginSuccess } from "../../utils/messages";
import { logInWithEmailAndPassword } from "../../actions/auth";
import { message } from "antd";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const StyledContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--primary-color)",
  width: "100%",
  borderRadius: "50px",
  "&:hover": {
    borderColor: "var(--primary-color)",
    color: "var(--primary-color)",
    backgroundColor: "transparent",
  },
}));

const Image = styled(Paper)(({ theme }) => ({
  height: "80vh",
  position: "relative",
  backgroundImage: `url(${login})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth, user]);

  useEffect(() => {
    if (user) {
      //success login
      message.success(loginSuccess);
      navigate("/admin");
    }
    return () => user;
  }, [user, navigate]);

  const handleLogin = () => {
    logInWithEmailAndPassword(email, password);
  };
  return (
    <Container
      style={{
        marginTop: "6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      xs={10}
    >
      <Appbar />
      <Box
        sx={{
          width: "70%",
          height: "70%",
        }}
      >
        {/* <Typography
          component="h1"
          variant="h4"
          sx={{ color: "var(--primary-color)", m: "10px" }}
        >
          HotelHUB
        </Typography> */}
        <Paper
          sx={{ width: "100%", alignItems: "center", marginTop: "10%" }}
          elevation={2}
        >
          <Grid container>
            <Grid item md={6} sm={0} xs={0}>
              <Image />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box
                maxWidth="400"
                sx={{
                  mx: "auto",
                  my: 8,
                  py: 3,
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: "sm",
                  boxShadow: "md",
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    level="h4"
                    component="h1"
                    sx={{ color: "var(--primary-color)" }}
                  >
                    <b>Welcome!</b>
                  </Typography>
                  <Typography level="body2" fontSize={14} fontWeight={100}>
                    Sign in to continue
                  </Typography>
                  <TextField
                    required
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <StyledContainedButton
                    size="large"
                    variant="contained"
                    onClick={handleLogin}
                  >
                    Login
                  </StyledContainedButton>
                  <Typography fontSize="sm" sx={{ alignSelf: "center" }}>
                    Don't have an account? <Link to="/register">Register</Link>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
