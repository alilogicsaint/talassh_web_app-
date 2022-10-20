import { Button, Grid,TextareaAutosize, TextField, } from '@mui/material'
import React, { useState } from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { Navbar } from '../components/navBar';
import { Box } from '@mui/system'
import Footer from '../components/footer';
import MathValidation from '../components/MathValidation';
import HomeButton from '../components/buttons/homeButton';
import CommonBtn from '../components/buttons/Commonbtn';
import { ImageUpload } from '../components/imgUpandShow/uploadimage';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import MySliderSWP from '../components/slider/slider';
import profilePlaceholder from '../Assets/images/400X400placeholder.png'
// import MathValidation from '../components/MathValidatiobn/MathValidation'

export default function AgentAccount() {
   
   const [Fullname, setFullname] = useState('')
   const [LineNumber, setLinemumber] = useState()
   const [MobileNo, setMobileNo] = useState()
   const [WhatsappNo, setWhatsappNo] = useState()
  
   var data =[
      Fullname,
      LineNumber,
      MobileNo,
      WhatsappNo,
    ]
   function collectdata(){
    let send = data
    console.log(send)
   }
   


return (
  <div>
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
       Agent Account
    </p>
  </div>
  
  <Grid container xs direction="row" > 
   
    <Grid item  xs={12} sm={12}  md={12} lg={2}  > 
      <ButtonLeftlist/> 
    </Grid>
   
    <Grid item xs={12} sm={12} md={7}  lg={7.9}  sx={{ }} >
       <Box 
         sx={{
           width:"100%",
           display:"flex", 
           justifyContent: "space-evenly", 
           alignContent: "center",
           flexDirection: "row",
           flexWrap:"wrap"}}>
         <Grid item 
                 xs={12}  sm={5} md={6} lg={5} 
                 direction="column" 
                 sx={{display:"flex" , 
                 alignItems: "center",
                 mt:5,pl:2,pr:2  
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
                border: "2px solid gray",
                boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)"           
             }} >

            <ImageUpload Cheight={"100%"} CWidth={"100%"} imgLink={profilePlaceholder} />
             
             </Box>

            <TextField 
                onChange={(e)=>{setFullname(e.target.value)}}
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }}  
                placeholder="Full Name"              
                 />
            <TextField   
                onChange={(e)=>{setLinemumber(e.target.value)}}
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Land Line Number "      
             />
            <TextField  
                onChange={(e)=>{setMobileNo(e.target.value)}} 
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Mobile No"                  
             />
            <TextField  
                onChange={(e)=>{setWhatsappNo(e.target.value)}}  
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Whatsapp No"                 
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Email Address"              
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Facebook ID "                 
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Instagram ID"                
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Country"                    
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="Province / Estate "     
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="City "                           
             />
            <TextField   
                color="warning" sx={mystyle.TextFieldsx} 
                inputProps={{style:mystyle.TextInSty }} 
                placeholder="UC/ VC/ Main Area "    
             />
            <TextField  
                color="warning" sx={mystyle.TextFieldsx}
                inputProps={{style:mystyle.TextInSty }}  
                placeholder="Nearest Famous Place "
             />
            <TextareaAutosize   
                minRows={3}  
                placeholder=" Street Address "  
             />
             <Box height={20} ></Box>
            <TextareaAutosize   
                minRows={4}   
                placeholder=" Google Maps Link  "  
             />
         </Box>
  </Grid>
    
  <Grid item 
  xs={12}  sm={6} md={6} lg={6} 
  direction="column" 
  sx={{display:"flex" , alignItems:"center", mt:5,pr:2,pr:2}}>
    
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
         inputProps={{style:mystyle.TextInSty }}  
         sx={mystyle.TextFieldsx } placeholder="CNIC" />
    <TextField   
         color="warning" 
         inputProps={{style:mystyle.TextInSty }}  
         sx={mystyle.TextFieldsx } 
         placeholder="CNIC Issue Date" />
    <TextField   color="warning" 
         inputProps={{style:mystyle.TextInSty }} sx={mystyle.TextFieldsx} 
         placeholder="CNIC Expiry Code" />
    <TextField  
         color="warning" 
         inputProps={{style:mystyle.TextInSty }} sx={mystyle.TextFieldsx}
         placeholder="Enter Admin Code" />

     </Box>
    <div>
        <h3>
        Business Pic Slide Show
        </h3>
    </div>

    {/* <img 
    style={{width:"75%",height:"140px"}}  alt="profile"
    src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" /> */}
     <Box  sx={{ 
          width:"75%",
          height:"170px",
          margin:"0px 0px", 
          boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)" ,               
        }} ><MySliderSWP  /></Box> 
    <Box  sx={{ 
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          height:"120px",
          width: "75%",
          margin:"10px 0px",                
        }} >

        <TextField   
             color="warning"  
             inputProps={{style:mystyle.TextInSty }}  
             sx={mystyle.TextFieldsx } placeholder="User ID" />
        <TextField 
            color="warning" 
            inputProps={{style:mystyle.TextInSty }}  sx={mystyle.TextFieldsx} placeholder="Password" />
        <TextField   color="warning" 
            inputProps={{style:mystyle.TextInSty }}  sx={mystyle.TextFieldsx} 
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
            onClick={collectdata()}
            sx={{backgroundColor:"#70B243",
            '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
             }}> Submit
        </Button>
          <CommonBtn color={"#FFC619"} link={"/Business_Account"} textvalue={"BusinessAccount"} widthval={"100%"} />     
          <CommonBtn color={"#F37825"} link={"/Customer_Account"} textvalue={"Customer Account"} widthval={"100%"} />
      </Box>

      <Box  sx={{ mt:1 }} >
          <HomeButton/>
      </Box> 
    </Grid>
      
      </Box> 
  </Grid>
    
    <Grid item  xs={12} sm={12}  md={12} lg={2} > 
    <ButtonRightList/>  
    </Grid>

    </Grid>
    
    <Footer/>

    </div>
  )
}



const mystyle={
  TextFieldsx:{
    mt:1, 
    boxShadow: 3 ,
    borderRadius:1
  },
  TextInSty:{
    padding:"6px 10px", 
    fontSize:"14px"
  }
}