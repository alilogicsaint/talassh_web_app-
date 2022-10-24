import { Box, Button, } from '@mui/material';
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher  } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import CommonNavBtn from './commonNavBtn';



export default function NavBtnRight(props) {
    const Chwidth  = props.CHWidth;
  return (
    <Box
    orientation="vertical"
    sx={{
      display:"flex",
      justifyContent:"center", 
      flexDirection:"Column",
      width:Chwidth  
     }}>
      <CommonNavBtn dyn_Color= {"#F9BC00"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"ضرورت رشتہ"}  
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<BusinessIcon/>}  />
      <CommonNavBtn dyn_Color= {"#8446B2"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"ٹرانسپورٹ"}  
                    dyn_Value={"/Expert_Entery"} 
                    dyn_endIcons={<EngineeringIcon/>}  />

      <CommonNavBtn dyn_Color= {"#204D77"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"موبائیل"}  
                    dyn_Value={"/Helper_Entry"} 
                    dyn_endIcons={<HomeRepairServiceIcon/>}  />

      <CommonNavBtn dyn_Color= {"#7C7C7C"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"گاڑیاں"}  
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<GiBlockHouse/>}  />

      <CommonNavBtn dyn_Color= {"#826409"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"مکان"}  
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<SiHappycow/>}  />

      <CommonNavBtn dyn_Color= {"#C15811"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={"دکان "}  
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<Person3SharpIcon/>}  />

      <CommonNavBtn dyn_Color= {"#0773C0"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={" ذمین "}  
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<FaChalkboardTeacher/>}  />

      <CommonNavBtn dyn_Color= {"#EDBD2B"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={" مشہورجگہ "} 
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<GiTeacher/>}  />

      <CommonNavBtn dyn_Color= {"#112F6D"} dyn_Width={"110px"} dyn_height={"110px"} 
                    dyn_btnText={" کتب خانہ "} 
                    dyn_Value={"/Business_Entery"} 
                    dyn_endIcons={<GiWantedReward/>}  />
     </Box>
  )
}
