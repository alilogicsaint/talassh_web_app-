import { FormControl, FormHelperText, Grid, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist';
import ButtonRightList from '../components/buttons/buttonRightList';
import Footer from '../components/footer';
import LoginForm from '../components/loginForm';
import { Navbar } from '../components/navBar';


export default function Login() {
    const [name, setName] = React.useState('Composed TextField');
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
        <>
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
       Login 
      </p>
</div>
      
          <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 
         
          {/* button list 1 */}
          <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2} 
            >
            <ButtonLeftlist/>
          </Grid> 
          {/* button list center 2 */}
            <Grid item xs={12} sm={6}  md={7} lg={7.9} spacing={2} sx={{}} >
            
                <LoginForm/>
          

            </Grid>
      
            <Grid item xs={12} sm={3}  md={2} lg={2} spacing={2} 
            sx >
              <ButtonRightList/>
            </Grid>
      
          </Grid>
        
        
        
          <Footer/>

     </>
      
    );
  }