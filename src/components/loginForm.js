import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CommonBtn from './buttons/Commonbtn'
import HomeButton from './buttons/homeButton'

export default function LoginForm() {
  return (
    <div style={{margin:"130px auto", display: "flex",justifyContent: "center"}} >
        <Box sx={{display:"flex",justifyContent:"center", width:"50%",flexDirection:'column'}}>
            <div style={{display:"flex", justifyContent:"space-between" ,padding:10}} >
                <p style={{width:120,fontSize:"20px",fontWeight:"400"}}>User ID</p><TextField fullWidth/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between",padding:10}} >
                <p style={{width:120,fontSize:"20px",fontWeight:"400"}} >Password</p><TextField fullWidth />
            </div>
           
        <Box sx={{ pl:20,pr:1, display:"flex", flexDirection:"column"}}>
            <Box sx={{ height:"10px"}}></Box>
        <CommonBtn color={"#73B349"} link={"/Business_Account"} textvalue={"Enter"} widthval={"100%"} />
            <Box sx={{ height:"10px"}}></Box>
        <CommonBtn color={"#F57E2F"} link={"/Business_Account"} textvalue={"Forgot Password"} widthval={"100%"} />
            <Box sx={{ height:"10px"}}></Box>
        <CommonBtn color={"#3C6EC8"} link={"/Business_Account"} textvalue={"Signup"} widthval={"100%"} />
            <Box sx={{ height:"10px"}}></Box>
        <HomeButton />  
        </Box>

        </Box>
        
    </div>
  )
}
