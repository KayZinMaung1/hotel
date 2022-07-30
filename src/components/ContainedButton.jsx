import { Button } from "@mui/material";
import styled from '@emotion/styled';

const StyledContainedButton = styled(Button)(({ theme }) => ({
    backgroundColor: "var(--primary-color)", 
    width: "180px", 
    borderRadius: "50px",
    '&:hover': {
      borderColor: "var(--primary-color)", 
      color: "var(--primary-color)", 
      backgroundColor:"transparent"
    },
  }));

  const ContainedButton = ({text, onClick})=>(
    <StyledContainedButton variant="contained" size="large" onClick={onClick}>{text}</StyledContainedButton>
    
  )
    
  
  export default ContainedButton;