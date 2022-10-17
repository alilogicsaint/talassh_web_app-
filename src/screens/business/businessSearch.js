import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../../components/buttonLeftlist'
import ButtonRightList from '../../components/buttonRightList'
import CenterButton from '../../components/CenterButton'
import Footer from '../../components/footer'
import { Navbar } from '../../components/navBar'
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getdata} from '../../store/action'


export default function BusinessSearch() {

    const state =useSelector(state =>state)
    const dispatch = useDispatch()
    let alltodos = state.data
    console.log(state)

    useEffect(()=>{
       dispatch(getdata())   
    },[]);

  return (
  
<div >
    
    <Navbar   />
    <Box sx={{
          height: 90,
        }}
      />
  
    <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 

      {/* button list 1 */}
    <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2} >
        <ButtonLeftlist/>
    </Grid> 

      {/* button list center 2 */}
    <Grid item xs={12} sm={6}  md={7} lg={7.9} spacing={2} >
               
        <Grid item xs={12} sm={12} md={4}  lg={12} >
            <Box sx={{p:2 , pl:20,pr:20 }} >
                <Box sx={{ display:"flex", justifyContent:"center",width:"100%" }}>
                    <div  style={mystyle.heading} >
                        <h2 style={mystyle.htag}>Business Search</h2>
                    </div>
                </Box>

            <Grid  item container direction="row"  >
                <Grid xs direction="column" sx={{p:2 }}  >
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                </Grid>
                <Grid xs direction="column" sx={{p:2 }} >
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                 </Grid> 
            </Grid>
          </Box>
        </Grid>

    </Grid>
  
    <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2}  >
          <ButtonRightList/>
    </Grid>
  
      </Grid>
    
    
    
      <Footer/>
      </div>

  )
}


const mystyle = {
    img:{
        width:"40%",
        height:"40%",
        padding: "10px",
    },

    heading:{
        display:"flex",
        fontSize:"28px",
        padding:"5px",
        alignItems: "flex-end",
    },
    img2:{
        width:"94%",
        height:"94%",
        padding: "10px",
    },
    htag:{
        margin:"0 auto"
    }
}



const inputstyle = {
    padding:"6px 10px", fontSize:"14px" , 
}