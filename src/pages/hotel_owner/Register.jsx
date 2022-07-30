import {
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  Stack,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import register from "../../assets/images/register.jpg";
import React from "react";
import Appbar from "../../components/AppBar";

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
  backgroundImage: `url(${register})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

function Register() {
  return (
    <React.Fragment>
      <Appbar />
      <Box sx={{ width: "70%" }} position="absolute" left="15%" top="3%">
        <Typography component="h1" variant="h4" sx={{ color: "var(--primary-color)", m: "10px" }}>
          HotelHUB
        </Typography>
        <Paper sx={{ width: "100%" }} alignItems="center" elevation={2}>
          <Grid container>
            <Grid item md={6}>
              <Image />
            </Grid>
            <Grid item md={6}>
              <Box
                maxWidth="400"
                sx={{
                  mx: "auto",
                  my: 4,
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
                  <Typography level="h4" component="h1" sx={{ color: "var(--primary-color)" }}>
                    <b>Welcome!</b>
                  </Typography>
                  <Typography level="body2" fontSize={14} fontWeight={100}>
                    Create an account
                  </Typography>
                  <TextField
                    required
                    name="name"
                    type="text"
                    placeholder="My Hotel"
                    label="Hotel Name"
                  />
                  <TextField
                    required
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                  />
                  <TextField
                    required
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                  />
                  <StyledContainedButton size="large" variant="contained">
                    Register
                  </StyledContainedButton>
                  <Typography
                    fontSize="sm"
                    sx={{ alignSelf: "center" }}
                  >
                    Already have an account? <Link to="/login">Login</Link>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>

  );
}

export default Register;
