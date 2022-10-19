import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function AddItem_Business_entry() {
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
              placeholder="Full Name"              
           />
           <TextField   
              fullWidth 
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Land Line Number "      
           />
           <TextField  
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Mobile No"             
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
              placeholder="Full Name"              
           />
           <TextField  
              fullWidth  
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Land Line Number "      
           />
           <TextField 
              fullWidth   
              color="warning"  
              sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
              inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} 
              placeholder="Mobile No"             
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
         }}> Submit
        </Button>
        <Button 
         variant="contained"  
         sx={{backgroundColor:"#70B243",
         m:"5px",
         '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
         }}> save
      </Button>
        </Box>
    </Grid>
    
</Grid>
    </div>
  )
}
