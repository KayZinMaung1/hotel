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
import Availability from "../../components/show_hotel_details/Availability";
import {useCallback} from "react";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import {useParams} from "react-router-dom";
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



const ShowHotelDetails= (props)=> {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [hotel, setHotel] = useState();
  const [menu, setMenu] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const docRef = doc(db, "hotels", id);
      const docSnap = await getDoc(docRef);
      setHotel(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);
  // console.log("Hotel Details: ", hotel)

  useEffect(()=>{
    fetchMenu();
},[])

const fetchMenu = async() => {
  try {
    let newData = [];
    const q = query(collection(db, "menu"), where("hotelId", "==", id));
    const querySnapshot  = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let transformedData = {
        ...doc.data(),
        id: doc.id,
        key: doc.id
      };
      newData = [...newData, transformedData];
    });
    setMenu(newData);
  } catch (err) {
    console.error(err);
  }
}

console.log("Menu of hotel: ", menu)

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
      <AboutHotel hotel={hotel}/>
      <Availability menu={menu}/>
    </React.Fragment>
  );
}
export default ShowHotelDetails;
