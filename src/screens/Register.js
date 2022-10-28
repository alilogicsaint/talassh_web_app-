import React from 'react'
import {Navbar} from "../components/navBar";
import { Grid,  Button, Box,} from '@mui/material';
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';


export default function Register() {
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(e);
    }  
     
       
  return (
    <div >
    
    <Navbar />

    <Box sx={{
          height: 90,
        }}
    />

      <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 
     
      {/* button list 1 */}
   
      <Grid item  xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
      <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
      <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>

      {/* button list center 2 */}

      <Grid item container xs={12} sm={8} md={8}  lg={7.9} sx={{ mt:5, display: "flex", justifyContent: "center", }}  >
      
      <Box sx={{
            display:"flex", 
            flexDirection:"column",
            height:'100%',justifyContent: "center", 
            alignContent: "center",
            alignItems: "center", }}>

        <div>
           <div style={registerStyle.regheading}>
               Signup New Account
           </div>

           <div style={registerStyle.regSubHeading}>
               Select Account Category
           </div>
        </div>

       <Box sx={{ maxWidth:"570px" ,minWidth:"300px" , mt:1, display:"flex",flexDirection:"column"}}>
       
        <Button  
            value="/Customer_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", 
            m: 1, backgroundColor:"#77B550",
            '&:hover': { 
                    backgroundColor: '#77B550',
                    opacity: [0.9, 0.8, 0.7],} ,
                    fontFamily:"monospace" , 
                    fontSize:20, 
                    borderRadius:0 
            }}>
        Customer Account
        </Button>
        
        <Button  
            value="/business_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", 
                    m: 1, backgroundColor:"#FFC620",
                    '&:hover': { backgroundColor: '#FFC620', 
                    opacity: [0.9, 0.8, 0.7],} ,
                    fontFamily:"monospace" , 
                    fontSize:20, 
                    borderRadius:0 
            }}>

         Business Account
        </Button>
        
        <Button  
            value="/Agent_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{... registerStyle.btn ,
                backgroundColor:"#F67C2A",
                '&:hover': {  backgroundColor: '#F67C2A',
                              opacity: [0.9, 0.8, 0.7],} 
        }}>
            Talaash Agent Account
        </Button>
            <Box  
                sx={{ 
                display:"flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center", 
                mt:1,  
             }} >

        <Button
                variant="contained" 
                sx={{ 
                    boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
                    clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 18% 100%, 0 50%, 18% 0)",
                    width:150,
                    backgroundColor:"#040404",
                    '&:hover': { backgroundColor: '#040404',
                                 opacity: [0.9, 0.8, 0.7],},
                }}>Home
        </Button> 
            
            </Box>
        </Box>
        
       </Box>
    </Grid>
  
    <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>
  
      </Grid>
   
    
    
    <Footer/>
      </div>
  )
}


const registerStyle= {
    btn:{
        boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
        m: 1, 
        fontFamily:"monospace" , 
        fontSize:20, 
        borderRadius:0, 
    },
    regheading:{
        marginBottom:"50px", 
        fontSize:"40px", 
        textAlign:"center",
        fontWight:"bold",
    },
    regSubHeading:{
        marginBottom:"10px", 
        fontSize:"20px", 
        textAlign:"center" ,
        color:"red",
    }

}

const sections={
    justifyContent: "space-between",
    margin:"40px 180px 0px 180px",
    boxShadow: "0px 2px 25px -13px rgba(0,0,0,0.62)",
    pl:3,
    pr:3,
    pt:3,
    pb:3,
    mt:5,
    
    '@media (min-width:480px)and (max-width:880px)' : {
      margin:"40px 10px 0px 10px !important",
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      margin:"40px 10px 0px 10px !important",
    }
  }
  
  const hidbtnTabeMode={
    '@media (min-width:480px)and (max-width:880px)' : {
      display:"none",
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      display:"none",
    } 
  }
  
  
  const hidbtnWebMode={
    '@media (min-width:880px)and (max-width:2470px)' : {
      display:"none"
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      display:"none",
    } 
  }
  
  const hidbuttonMobile={
    '@media (min-width:880px)and (max-width:2470px)' : {
      display:"none"
    },
    '@media (min-width:480px)and (max-width:880px)' : {
      display:"none",
    },
  } 
  
  
  const sections3={
    margin:"40px 150px 0px 150px",
    '@media (min-width:480px)and (max-width:880px)' : {
      margin:"40px 10px 40px 10px !important",
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      margin:"40px 40px 40px 40px !important",
    }
  }