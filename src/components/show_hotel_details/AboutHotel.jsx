import { Box, Stack, Typography, Grid , Paper} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const AboutHotel = ()=>{
    const galleries = [
        {
          id : 1,
          image: room1,
          description: "Main Photo 1",
        },
        {
          id: 2,
          image: room2,
          description: "Main Photo 2",
        },
        {
          id: 3,
          image: room3,
          description: "Main Photo 3",
        },
      ];

    return (
    <Box sx={{ p:"5%", mt:"2%"}}>
    <Grid
      container
      spacing={2}
      sx={{ mt: "10px" }}
      justifyContent="space-evenly"
    >
      <Grid item >
        <Stack spacing={1}>
          <Box mb={2}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ color: "var(--primary-color)" }}
            >
              Mahar Myat
            </Typography>
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
              {galleries.map((gallery, index) => (
                <img
                  src={gallery.image}
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
      <Grid item lg={6}>
        <Box sx={{my:"10%"}}>
        <Stack>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"var(--primary-color)"}}>
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Stack>
        </Box> 
      </Grid>
    </Grid>
  </Box>)
}
export default AboutHotel;