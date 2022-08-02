import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import main from "../assets/images/home.jpg";
import styled from "@emotion/styled";
import { createTheme, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../components/OutlinedButton";
import ContainedButton from "../components/ContainedButton";
import Appbar from "../components/AppBar";

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "100vh",
  position: "relative",
  backgroundImage: `url(${main})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "35vh",
  width: "100%",
}));

const theme = createTheme();
const StyledTypography = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
  },
}));

export default function Home(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Appbar />
      <StyledPaper>
        <StyledBox>
          <Stack sx={{ alignItems: "center" }}>
            <StyledTypography component="h1" variant="h3">
              “Go where you feel most alive.”
            </StyledTypography>
            <Box my={4}>
              <Stack direction="row" spacing={2}>
                <OutlinedButton
                  text="Hotel Owner"
                  onClick={() => navigate("/login")}
                />
                <ContainedButton
                  text="Traveller"
                  onClick={() => navigate("/main")}
                />
              </Stack>
            </Box>
          </Stack>
        </StyledBox>
      </StyledPaper>
    </React.Fragment>
  );
}
