import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/main/Hero";
import ShowHotels from "../../components/main/ShowHotels";
import RoofingIcon from "@mui/icons-material/Roofing";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import {useState, useEffect} from "react";

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


const  Main = (props)=> {
  const navigate = useNavigate();
  const [hotels, setHotels ] = useState([]);

  useEffect(()=>{
   fetchHotels();
  },[])

  console.log("Hotels: ", hotels)

  const fetchHotels = async() => {
    try {
      let newData = [];
      const q = query(collection(db, "hotels"));
      const querySnapshot  = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let transformedData = {
          ...doc.data(),
          id: doc.id,
          key: doc.id
        };
        newData = [...newData, transformedData];
      });
      setHotels(newData);
    } catch (err) {
      console.error(err);
    }

  }


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
      <Hero />
      <ShowHotels hotels={hotels}/>
    </React.Fragment>
  );
}
export default Main;
