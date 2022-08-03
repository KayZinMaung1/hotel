import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
  styled,
  createTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";

const theme = createTheme();
const StyledTypography = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
  },
}));

const AboutHotel = ({hotel}) => {
  
  // const galleries = [
  //   {
  //     id: 1,
  //     image: room1,
  //     description: "Main Photo 1",
  //   },
  //   {
  //     id: 2,
  //     image: room2,
  //     description: "Main Photo 2",
  //   },
  //   {
  //     id: 3,
  //     image: room3,
  //     description: "Main Photo 3",
  //   },
  // ];

  return (
    <Box sx={{ p: "5%", mt: "2%" }}>
      <Grid
        container
        spacing={2}
        sx={{ mt: "10px" }}
        justifyContent="space-evenly"
      >
        <Grid item>
          <Stack spacing={1}>
            <Box mb={2}>
              <StyledTypography
                component="h1"
                variant="h4"
                sx={{ color: "var(--primary-color)" }}
              >
                {hotel?.name}
              </StyledTypography>
            </Box>
            <Paper sx={{ p: "5px" }} elevation={2}>
              <Carousel
                NextIcon={<ArrowForwardIosIcon />}
                PrevIcon={<ArrowBackIosIcon />}
                sx={{
                  autoPlay: true,
                  animationDuration: "300",
                  animation: "slide",
                  width: "500px",
                  height: "350px",
                }}
              >
                {hotel?.imageList.map((gallery, index) => (
                  <img
                    src={gallery}
                    key={index}
                    width="500px"
                    height="350px"
                    alt="room"
                  ></img>
                ))}
              </Carousel>
            </Paper>
          </Stack>
        </Grid>
        <Grid item lg={6} md={4}>
          <Box sx={{ my: "10%", p: "2%" }}>
            <Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "var(--primary-color)" }}
              >
                Description
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "justify" }}
              >
                {hotel?.description}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutHotel;
