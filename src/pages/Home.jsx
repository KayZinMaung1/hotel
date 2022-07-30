import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import main from "../assets/images/main.jpg";
import styled from '@emotion/styled';
import { createTheme, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OutlinedButton from '../components/OutlinedButton';
import ContainedButton from '../components/ContainedButton';
import { AppBar } from '../components/AppBar';

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "90vh",
  position: "relative",
  backgroundImage: `url(${main})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute", 
  bottom: "30vh", 
  width: "100%"
}));

const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
};


export default function Home(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar/>
      <StyledPaper>
        <StyledBox>
          <Stack sx={{ alignItems: "center" }}>
            <Typography component="h1" variant='h3'>“Go where you feel most alive.”</Typography>
            <Box my={4} >
              <Stack direction="row" spacing={2}>
                <OutlinedButton text="Hotel Owner" onClick={()=>navigate("/login")} />
                <ContainedButton text="Traveller"/>
              </Stack>
            </Box>
          </Stack>
        </StyledBox>
      </StyledPaper>
    </React.Fragment>
  );
}
