import React from 'react'
import {Navbar} from "../components/navBar";
import { Grid,  Button, Box,} from '@mui/material';
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';


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

      <Grid container xs={12} sm={12}  md={12} lg={12} direction="row" > 
     
      {/* button list 1 */}

    <Grid item xs={12} sm={12}  md={12} lg={2}   >
        <ButtonLeftlist/>
    </Grid> 

      {/* button list center 2 */}

    <Grid item xs={12} sm={12}  md={12} lg={7.9}  >
      
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

       <Box sx={{ width:570 , mt:1, display:"flex",flexDirection:"column"}}>
       
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
  
    <Grid item xs={12} sm={12}  md={12} lg={2}  >
        <ButtonRightList/>
    </Grid>
  
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