import {
  Box,
  createTheme,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MultiActionAreaCard from "../MultiActionAreaCard";
import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const StyledTypography = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 26,
  },
}));

const ShowHotels = () => {
  const navigate = useNavigate();
  const hotels = [
    {
      id: 1,
      image: hotel1,
      title: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,00species, ranging across all continents except Antarctica",
    },
    {
      id: 2,
      image: hotel2,
      title: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
    {
      id: 3,
      image: hotel3,
      title: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
  ];
  return (
    <Box sx={{ height: "100vh" }} id="hotels">
      <Stack alignItems="center" spacing={2} my={10}>
        <Box mb={2}>
          <StyledTypography
            component="h1"
            variant="h4"
            sx={{ color: "var(--primary-color)" }}
          >
            “Every day brings new choices”
          </StyledTypography>
        </Box>

        <Grid container justifyContent="space-evenly">
          {hotels.map((hotel) => (
            <Grid item lg={3}>
              <MultiActionAreaCard
                image={hotel.image}
                title={hotel.title}
                description={hotel.description}
                onClick={() => {
                  navigate(`/hotels/${hotel.id}`);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
export default ShowHotels;
