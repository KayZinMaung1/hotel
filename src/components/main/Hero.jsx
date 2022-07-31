import styled from "@emotion/styled";
import { Box, Paper, Stack, Typography } from "@mui/material";
import main from "../../assets/images/main.jpg";
import OutlinedButton from "../OutlinedButton";

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "100vh",
  position: "relative",
  backgroundImage: `url(${main})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.75",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "30vh",
  width: "100%",
}));

const Hero = () => {
  return (
    <StyledPaper>
      <StyledBox>
        <Stack sx={{ alignItems: "center" }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ color: "var(--primary-color)" }}
          >
            “Let's Find a Hotel that's perfect for you.”
          </Typography>
          <Box my={4}>
            <a href="#hotels" style={{textDecoration: 'none'}}> <OutlinedButton text="Find Out" onClick={() => {}} /></a>
          </Box>
        </Stack>
      </StyledBox>
    </StyledPaper>
  );
};

export default Hero;
