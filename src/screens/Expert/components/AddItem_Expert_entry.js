import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function AddItem_Expert_entry() {
  return (
    <div>
    <Grid item container xs={12} >

    <Grid xs={12}  md={4} lg={3}>
       <Box  sx={{width:"90%",padding:"10px" }}>
           <TextField 
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" , }}}  
              placeholder="Experty Name"              
           />
           <TextField   
              fullWidth 
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Experience in Years"      
           />
           <TextField  
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Demanded Salary"             
           />
    </Box>
    </Grid>
    
    <Grid xs={12}  sm={4} lg={3}>
    <Box  sx={{width:"90%",padding:"10px" }}>
           <TextField  
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" , }}}  
              placeholder="Payment Type (D) o(M)"              
           />
           <TextField  
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Experience Details"      
           />
           
    </Box>
    </Grid>
    
    <Grid xs={12}  sm={4} lg={3} >
        <Box sx={{width:"90%",padding:"10px" ,display: "flex",
           alignContent: "center",
           alignItems: "center", }}>
           <img  style={{width:"90%",height:"90%",}}   src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
        </Box>
    </Grid>

    
    <Grid xs={12}  sm={4} lg={3}
         sx={{
            display:'flex',
            flexDirection:"column", 
            justifyContent: "center",           
     }}
    >
        <Box sx={{
               display:'flex',
               flexDirection:"column",
               padding:"10px"
        }}>
        <Button 
         variant="contained"  
         sx={{
         backgroundColor:"#70B243",
         m:"5px",
         '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
         }}> Save
        </Button>
        <Button 
         variant="contained"  
         sx={{backgroundColor:"#70B243",
         m:"5px",
         '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
         }}> Add New
      </Button>
        </Box>
    </Grid>
    
</Grid>
    </div>
  )
}
