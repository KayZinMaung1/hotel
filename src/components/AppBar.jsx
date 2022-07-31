import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoofingIcon from "@mui/icons-material/Roofing";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar style={{ background: "var(--primary-color)" }}>
      <Toolbar>
          <RoofingIcon onClick={()=>navigate("/")}/>
          <Typography
            variant="h6"
            component="div"
            sx={{color: "white"}}
            onClick={()=>navigate("/")}
            m={1}
          >
            HotelHUB
          </Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
