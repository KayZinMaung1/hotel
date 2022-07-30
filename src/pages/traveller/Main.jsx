import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Paper, Stack } from '@mui/material';
import OutlinedButton from '../../components/OutlinedButton';
import main from "../../assets/images/main.jpg"
import Hero from '../../components/main/Hero';


const StyledPaper = styled(Paper)(({ theme }) => ({
    height: "100vh",
    position: "relative",
    backgroundImage: `url(${main})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.75"
}));

const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: "30vh",
    width: "100%"
}));


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


export default function Main(props) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar style={{ background: "var(--primary-color)" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" onClick={() => navigate("/")}>
                            HotelHUB
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            
            <Hero/>

        </React.Fragment>
    );
}
