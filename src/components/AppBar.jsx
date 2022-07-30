import { Toolbar, Typography } from "@mui/material";

export const AppBar = () => (
  <AppBar style={{ background: "var(--primary-color)" }}>
    <Toolbar>
      <Typography variant="h6" component="div">
        HotelHUB
      </Typography>
    </Toolbar>
  </AppBar>
);
