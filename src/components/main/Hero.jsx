import styled from "@emotion/styled";
import { Box, createTheme, Paper, Stack, Typography } from "@mui/material";
import main from "../../assets/images/main.jpg";
import OutlinedButton from "../OutlinedButton";

const theme = createTheme();
const StyledPaper = styled(Paper)(() => ({
  height: "100vh",
  position: "relative",
  backgroundImage: `url(${main})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.75",
  [theme.breakpoints.down("md")]: {
    height: "56vh",
  },
}));

const StyledBox = styled(Box)(() => ({
  position: "absolute",
  bottom: "30vh",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    bottom: "15vh",
  },
}));

const StyledTypography = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
  },
}));

const Hero = () => {
  return (
    <StyledPaper>
      <StyledBox>
        <Stack sx={{ alignItems: "center" }}>
          <StyledTypography
            component="h1"
            variant="h3"
            sx={{ color: "var(--primary-color)" }}
          >
            “Let's Find a Hotel that's perfect for you.”
          </StyledTypography>
          <Box my={4}>
            <a href="#hotels" style={{ textDecoration: "none" }}>
              {" "}
              <OutlinedButton text="Find Out" onClick={() => {}} />
            </a>
          </Box>
        </Stack>
      </StyledBox>
    </StyledPaper>
  );
};

export default Hero;
