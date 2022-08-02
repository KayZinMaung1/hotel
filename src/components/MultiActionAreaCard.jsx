import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({
  image,
  title,
  description,
  onClick,
}) {
  return (
    <Card sx={{ maxWidth: 345, my: 2 }} elavation={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "var(--primary-color)",
            "&:hover": {
              color: "white",
              backgroundColor: "var(--primary-color)",
            },
          }}
          onClick={onClick}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
