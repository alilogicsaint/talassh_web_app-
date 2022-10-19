import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../../components/buttons/buttonLeftlist'
import ButtonRightList from '../../components/buttons/buttonRightList'
import CommonBtn from '../../components/buttons/Commonbtn'
import HomeButton from '../../components/buttons/homeButton'
import { Navbar } from '../../components/navBar'
import AddItem_Expert_entry from './components/AddItem_Expert_entry'
import DataTable from './components/datatableEntery'

export default function HelperEntry() {

//   const TabledataBusinessSearch = ["S.no",
//   "Shop Name",
//   "Main Category",
//   "Sub Category",
//   "Item Name",
//   "Model",
//   "Province",
//   "City",
//   "Uc/VC/M ain Areia"]
// const rowDdata=["ShopName","MainCategory","SubCategory","ItemName","Model","Province","City","UcMainArea"]
  
//   const state = useSelector(state =>state)
//   const dispatch = useDispatch()
  
//   useEffect(()=>{
//      dispatch(getTabledata())  
//   },[]);
  return (
    <div>
    
    <Navbar />

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
        Hepler ( کاریگر)
      </p>
</div>
        
        
    <Grid container  xs={12} sm={12}  md={12}  lg={12} >
        
    <Grid item  xs={12} sm={3} md={2}  lg={2}  > <ButtonLeftlist/> </Grid>

    <Grid container   xs={12} sm={6} md={7}  lg={7.9} sx={{mt:5}}   > 
        <Grid item xs={12} sm={12} md={4}  lg={7} >
          <Box sx={{p:2 }} >
                <Box sx={{ display:"flex", justifyContent:"flex-start",width:"100%" }}>
                    
                    <img style={mystyle.img} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />

                    <div  style={mystyle.heading} >
                        <h2 style={mystyle.htag}>Mani Fani Food Point</h2>
                    </div>

                </Box>
            <Grid  item container direction="row"  sx={{p:1 }}>
                <Grid xs direction="column"  >
                     <Typography>name</Typography>
                     <Typography>number</Typography>
                     <Typography>watsapp</Typography>
                     <Typography>email</Typography>
                     <Typography>facebook</Typography>
                     <Typography>instagram</Typography>
                </Grid>
                <Grid xs direction="column"  >
                     <Typography>country</Typography>
                     <Typography>state</Typography>
                     <Typography>U / VC/ Main Area </Typography>
                     <Typography>famous</Typography>
                     <Typography>address</Typography>
                 </Grid> 
            </Grid>
          </Box>
        </Grid>

    <Grid item xs={12} sm={12}  md={4}  lg={5} >
             
             <Box >
             <div>
             <img style={mystyle.img2} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
             </div>
             <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.73431278437604!2d67.35375724920635!3d24.86892417217729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3331717e1adcb%3A0xc33936eefc1f90f8!2sLogic%20Saint%20(Computer%20Institute%20%26%20Software%20House)!5e0!3m2!1sen!2s!4v1665752908230!5m2!1sen!2s" 
              width={"94%"} 
              height={"94%"} 
              style={{border: 1, padding:"10px"}} 
              allowFullScreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
             </div>
             </Box>
    </Grid>

          
    </Grid>
   
       
    <Grid item xs={12} sm={3} md={2}  lg={2} > <ButtonRightList/>  </Grid>
    </Grid>

    {/* section 2 */}
       
        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
              <div>
                <h1>
                    Add New Item
                </h1>
              </div>
             <Box >
              <AddItem_Expert_entry/>
             </Box>
        </Grid>
        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
              <div>
                <h1>
                   Existing Items Data
                </h1>
              </div>
             <Box >
              <DataTable/>
             </Box>
        </Grid>


        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
         <Box sx={{display:"flex", justifyContent:"space-around", width:"50%",margin:"0 auto" }}>
          <HomeButton/>  
          <CommonBtn color={"#72B347"} link={"/Helper_Search"} textvalue={"next page"} widthval={"200px"}/>
          <CommonBtn color={"#EDBD2B"} link={"/"} textvalue={"Add New Item"} widthval={"200px"} /> 
         </Box> 
       </Grid>
       
    
          
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
      fontSize:"15px",
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
