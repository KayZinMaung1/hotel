import { Button } from "@mui/material";
import styled from '@emotion/styled';

const StyledOutlinedButton = styled(Button)(({ theme }) => ({
    borderColor: "var(--primary-color)", 
    color: "var(--primary-color)", 
    width: "180px", 
    borderRadius: "50px",
    '&:hover': {
      backgroundColor: "var(--primary-color)",
      color:"white",
    },
  }));

  const OutlinedButton = ({text, onClick})=>(
    <StyledOutlinedButton variant="outlined" size="large" onClick={onClick}>{text}</StyledOutlinedButton>
  )
  
  export default OutlinedButton;