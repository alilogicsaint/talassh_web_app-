import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

export default function HomeButton() {
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(e);
    }  
  return (
    <Box  sx={{ 
        display:"flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",   
  }} >
<Button
    variant="contained" 
    value="/"
    onClick={(e)=>{handleClick(e.target.value)}}
    sx={{ 
       clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 18% 100%, 0 50%, 18% 0)",
       width:150,
       backgroundColor:"#040404",
       '&:hover': { backgroundColor: '#040404', opacity: [0.9, 0.8, 0.7],},
      }}>Home
</Button> 
</Box> 
  )
}
