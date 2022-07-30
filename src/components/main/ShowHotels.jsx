import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MultiActionAreaCard from "../MultiActionAreaCard";
import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";

const ShowHotels = () => {
  return (
    <Box sx={{height:"100vh"}} id="showHotels">
      <Stack alignItems="center" spacing={2} my={10}>
        <Box mb={2}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ color: "var(--primary-color)" }}
          >
            “Every day brings new choices”
          </Typography>
        </Box>

        <Grid container justifyContent="space-evenly">
          <Grid item lg={3}>
            <MultiActionAreaCard image={hotel1} title="Lizard" description=" Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica" />
          </Grid>
          <Grid item lg={3}>
            <MultiActionAreaCard image={hotel2} title="Lizard" description=" Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica" />
          </Grid>
          <Grid item lg={3}>
            <MultiActionAreaCard image={hotel3} title="Lizard" description=" Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default ShowHotels;
