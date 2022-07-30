import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
    const navigate = useNavigate();
    return (
        <AppBar style={{ background: "var(--primary-color)" }}>
            <Toolbar>
                <Typography variant="h6" component="div" onClick={() => navigate("/")}>
                    HotelHUB
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Appbar;