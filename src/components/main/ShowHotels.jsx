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

const ShowHotels = ({hotels}) => {
  const navigate = useNavigate();

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

        <Grid container  spacing={1} sx={{width:"100%", justifyContent:"space-around"}}>
          {hotels.map((hotel) => (
            <Grid item lg={3}>
              <MultiActionAreaCard
                image={hotel.imageList[0]}
                title={hotel.name}
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
