import { Button, Grid,  TextareaAutosize, TextField, } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { Navbar } from '../components/navBar';
import { Box } from '@mui/system'
import Footer from '../components/footer';
import MathValidation from '../components/MathValidation';
import HomeButton from '../components/buttons/homeButton';
import CommonBtn from '../components/buttons/Commonbtn';
import MySliderSWP from '../components/slider/slider';
import { ImageUpload } from '../components/imgUpandShow/uploadimage';
import profilePlaceholder from '../Assets/images/400X400placeholder.png'

export default function BusinessAccount() {

  return (
  <div>
    <head>
      <title>Home App</title>
    </head>

  <Navbar/>

  <Box sx={{
        height: 90,
      }}
    />
<div style={{ textAlign:"center" }} >
      <p style={{
              fontSize:"30px",
              fontWeight:"bold",
              textAlign:"center",
              margin:"0 auto" ,
              marginBottom:"-36px",  
              }}>
       Business Account
      </p>
</div>
  
  
  <Grid container xs direction="row" > 
    <Grid item  xs={12} sm={12}  md={12} lg={2}  > 
      <ButtonLeftlist/> 
    </Grid>
    <Grid item xs={12} sm={12} md={7.9}   sx={{ }} >

    <Box 
      sx={{
      width:"100%",
       display:"flex", 
      justifyContent: "space-evenly", 
  //  alignItems:" center", 
      alignContent: "center",
      flexDirection: "row",
      flexWrap:"wrap"}}>
  <Grid item  xs={12}  sm={5} md={6} lg={5} 
    direction="column" 
    sx={{display:"flex" , alignItems: "center", mt:5,pl:2,pr:2  
    }}>
     <Box  sx={{ 
           display: "flex",
           flexDirection: "column",
           justifyContent: "space-between",
           height:"100%",
           margin: "10px 0px",
           width: "80%",
        }} >
          
          <Box  sx={{ 
                width:  "30vh",
                height: "30vh",
                margin: "0px 0px",   
                // border: "2px solid gray",
                boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)"           
             }} >

            <ImageUpload Cheight={"100%"} CWidth={"100%"} imgLink={profilePlaceholder} />
             
             </Box>
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" , }}}  
            placeholder="Full Name"              
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Land Line Number "      
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Mobile No"             
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Whatsapp No"            
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Email Address"         
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Facebook ID "           
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Instagram ID"          
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Country"               
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="Province / Estate "     
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="City "                 
         />
        <TextField   
            color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            placeholder="UC/ VC/ Main Area "    
         />
        <TextField  
            color="warning"  
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1,mb:2 }}
            placeholder="Nearest Famous Place "
         />
          <Box height={15} ></Box>
         <TextareaAutosize   
                minRows={3} 
                input 
                placeholder=" Street Address " 
                style={{    
                  border: "0px ",
                  boxShadow: "rgb(0 0 0 / 43%) 0px 1px 6px 1px",
                  width: "95.5%",
                  margin: "0px 1px",
                  borderRadius: "3px",
                  outline: "none",
                  height: "48px",
                  padding: "5px"
                }} 
             />
             <Box height={15} ></Box>
            <TextareaAutosize   
                minRows={4}   
                placeholder=" Google Maps Link  " 
                style={{    
                  border: "0px ",
                  boxShadow: "rgb(0 0 0 / 43%) 0px 1px 6px 1px",
                  width: "95.5%",
                  margin: "0px 1px",
                  borderRadius: "3px",
                  outline: "none",
                  height: "48px",
                  padding: "5px"
                }}  
             />
    </Box>
  </Grid>
    
  <Grid item 
  xs={12}  sm={6} md={6} lg={6} 
  direction="column" 
  sx={{display:"flex" , alignItems: "center", mt:5,pr:2,pr:2
  }}>
    
    <Box  sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height:"140px",
                width: "75%",
                margin: "10px 0px 22px 0px",
             }} >

    <TextField   
         color="warning"  
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
         sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Business Name" />
    <TextField   
         color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
         sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} 
         placeholder="Business Type" />
    <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
         sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} 
         placeholder="Plaza / Market Name" />
    <TextField  
         color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
         sx={{ mt:1,mb:1, boxShadow: 3 ,borderRadius:1 }}
         placeholder="Business contact No" />

     </Box>
    <div>
        <h3>
        Business Pic Slide Show
        </h3>
    </div>

    <Box  sx={{ 
          width:"75%",
          height:"170px",
          margin:"0px 0px", 
          boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)" ,               
        }} ><MySliderSWP  /></Box> 
       
    <Box  sx={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height:"120px",
          width: "75%",
          margin: "10px 0px",                
        }} >

        <TextField   
             color="warning"  
             inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="User ID" />
        <TextField 
            color="warning" 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Password" />
        <TextField   color="warning" 
            inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} 
            placeholder="Confirm Password" />
        
    </Box>

        <MathValidation/>
        
    <Box  sx={{ 
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "130px",
                margin: "22px 0px 0px 0px ",
                width: "75%",
                alignContent: "space-around",
                justifyContent: "space-between",
                
             }} >
      <Button 
         variant="contained"  
         sx={{backgroundColor:"#70B243",
         '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
         }}> Submit
      </Button>
          
      <CommonBtn color={"#FFC619"} link={"/Customer_Account"} textvalue={"Customer Account"} widthval={"100%"} />     
      <CommonBtn color={"#F37825"} link={"/Agent_Account"} textvalue={"Agent Account"} widthval={"100%"} /> 

      </Box>

      <Box  sx={{ mt:1 }} >
          <HomeButton/>
      </Box> 
    </Grid>
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
