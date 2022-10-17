
import { Box, Button,ButtonGroup, } from '@mui/material';
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher  } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import { useNavigate } from 'react-router';






export default function ButtonLeftlist() {

  const navigate = useNavigate();

  function handleClick(e) {
    navigate(e);
  } 

  return (
    
    <Box
    orientation="vertical"
    sx={{ml:1,
      display:"flex",
      justifyContent:"center", 
      flexDirection:"Column",
      width:"100%"  
     }}>

           <Button 
           endIcon={<BusinessIcon/>} 
           variant="contained"  
           size='large'
           value="/Business_Entery"
           onClick={(e)=>{handleClick(e.target.value)}}
           sx={{ boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m:1 ,pt:1, justifyContent:"space-between" , backgroundColor:"#FFC294",'&:hover': { backgroundColor: '#FFC294', opacity: [0.9, 0.8, 0.7],}  ,  fontFamily:"'Noto Nastaliq Urdu', serif;" }}>کاروبر</Button>
           
           
           <Button endIcon={<EngineeringIcon/>} 
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#89CAFF",'&:hover': { backgroundColor: '#89CAFF', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>  کاریگر</Button>

           <Button 
             endIcon={<HomeRepairServiceIcon/>}
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#588539",'&:hover': { backgroundColor: '#588539', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>مزدورہیلپر</Button>
           
           <Button 
            endIcon={<GiBlockHouse/>}  
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#AFBBCB",'&:hover': { backgroundColor: '#AFBBCB', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            گھریلوسامان</Button>
           
           <Button 
           endIcon={<SiHappycow/>}
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#FFC106",'&:hover': { backgroundColor: '#FFC106', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            مالمویشی</Button>
           <Button 
           endIcon={<Person3SharpIcon/>}
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#06B354",'&:hover': { backgroundColor: '#06B354', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            عالم ومفتی</Button>
           <Button 
           endIcon={<FaChalkboardTeacher/>} 
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#0773C0",'&:hover': { backgroundColor: '#0773C0', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            امام حافظ و قاری</Button>
           <Button 
           endIcon={<GiTeacher></GiTeacher>}
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#8446B2",'&:hover': { backgroundColor: '#8446B2', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;",}}>
            اساتزہکرام</Button>
            <Button
            endIcon={<GiWantedReward />} 
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , backgroundColor:"#C70F0F",'&:hover': { backgroundColor: '#C70F0F', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;", }}>
            تلاش گمشدہ</Button>
           
         </Box>    
        
     
  )
}
