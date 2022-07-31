import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import RoofingIcon from "@mui/icons-material/Roofing";
import AboutHotel from "../../components/show_hotel_details/AboutHotel";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



export default function ShowHotelDetails(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "var(--primary-color)" }}>
          <Toolbar>
            <RoofingIcon onClick={() => navigate("/")} />
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white" }}
              onClick={() => navigate("/")}
              m={1}
            >
              HotelHUB
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <AboutHotel/>
    </React.Fragment>
  );
}
