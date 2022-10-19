import { Grid,  Button,ButtonGroup, Box,} from '@mui/material';
import {Navbar} from "../components/navBar";
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import CenterButton from "../components/buttons/CenterButton";
import Footer from "../components/footer";


export default function Home(props) {

  return (
  <div >
    
  <Navbar   />
  <Box sx={{
        height: 90,
      }}
    />

    <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 
   
    {/* button list 1 */}
    <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2} 
      >
      <ButtonLeftlist/>
    </Grid> 
    {/* button list center 2 */}
      <Grid item xs={12} sm={6}  md={7} lg={7.9} spacing={2} sx={{}} >
          <CenterButton/>
      </Grid>

      <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2} 
      sx >
        <ButtonRightList/>
      </Grid>

    </Grid>
  
  
  
    <Footer/>
    </div>
  )
}







