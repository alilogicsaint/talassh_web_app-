// import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled';
import { AppBar,  Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
// import Head from 'next/head';

// const NavbarRoot = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#F47926",
//   boxShadow: theme.shadows[3],
//   justifyContent: "center",
//   position:'static'
  
// }));

export const Navbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <div style={{display: "flex",
      justifyContent: "flex-end",}}>
      <AppBar
        sx={{ 
          width: "100%",
          height:"90px",
          backgroundColor:"#F57D2E"
        }}
        {...other}>
      <Toolbar
        disableGutters
        sx={{left: 0, px: 6}}
        backgroundColor={{  backgroundColor:"#ffff", }}
      >
          <IconButton onClick={onSidebarOpen} sx={{ display: {  xs: 'inline-flex',  lg: 'none' } }}>
           <MenuIcon fontSize="small" />
          </IconButton>
          <Link to="/"  style={{color:"white",textDecoration: "none" }}>
          <div style={{display:'flex',alignItems:"flex-end",}}>
            <p style={navBarStyle.heading} >Talash</p><p style={navBarStyle.subHeading} >.com</p> 
           </div>
          </Link>
           
          <Box sx={{ flexGrow: 1 }} /> 
          <Link  to="/"    style={{color:"white",textDecoration: "none"}}  >
           <div style={navBarStyle.headingDiv}>
           <p style={navBarStyle.subHeading} > سب کی سب کیلیے </p><p style={navBarStyle.heading}>تلاش </p> 
           </div>
          </Link>
          
      </Toolbar>
    </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func
};



const navBarStyle = {
  headingDiv:{
    display:'flex',
    alignItems:"flex-end",
    fontFamily:"'Noto Nastaliq Urdu', serif" ,
    fontWeight:300,
    height:90
  },
  heading:{ fontSize:"40px",
  margin:"0px auto",
  padding:"11px 0px",
  },
  subHeading:{ 
  padding: "15px 5px",
  fontSize:"15px",
  margin:"0px auto",
 }
}