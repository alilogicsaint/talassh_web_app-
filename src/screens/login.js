import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist';
import ButtonRightList from '../components/buttons/buttonRightList';
import Footer from '../components/footer';
import { Navbar } from '../components/navBar';
import '../App.css'
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';
import { Navigate, useNavigate } from 'react-router';
import HeadingsMain from '../components/headings/heading';
import UserIcon from '../Assets/images/user.png'
import SubHeadings from '../components/headings/subheading';






export default function Login(props) {
 

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [user, setUser] = useState()
  
     function handleChange(e){

      const name = e.target.name;
      setUser({
         [name]: e.target.value
      })
      
    }
//  console.log("this is user =>",user)
const navigate = useNavigate();

    
  
   function logout(){
    props.logout()
   }

   function handleSubmit(e) {
       props.authenticate("030000030001")
       navigate("/");
      e.preventDefault();
      axios.post('/api/signin', {
          email: user.email,
          password: user.password,
      })
      .then((response) => {
          const token = response.data.token;
       
          console.log("token =======>",token);
      })
      .catch((error) => {
          console.log(error);
      });
    }
 
    return (
        <>
        <Navbar />
        <Box sx={{
              height: 90,
            }}
          />
      
        <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 
         
          {/* button list 1 */}
          <Grid item  xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
          <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
          <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>
          {/* button list center 2 */}
        <Grid item xs={12} sm={8}  md={8} lg={8} spacing={2} sx={{}} >
   <div className=''>
   {props.isAuthenticated ?
    <div className='logoutContainer'>
      <div style={{ textAlign:"center",width:"100%" }} >
      <HeadingsMain h_vlaue={" Login "} h_urdu={" "} />
     </div>
      <p>You are already logged in.</p>
      <button class="logoutBtn" onClick={()=>logout()}  >
        logout
      </button>
    </div>
    
    :<div class="LoginFormContainer" >
       
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className='loginicon_Container' >
      <img src={UserIcon} alt=""/>
      </div> 
      <SubHeadings subheadingvlaue={"Login"} />
      
      <div className='form-group'>
         <p>User ID</p>
         <input
            name='email'
            type='email'
            className='form-control'
            placeholder='email'
            // value={}
            onChange={(e)=>handleChange(e)} />
      </div>
      <div className='form-group'>
         <p>Password</p>
         <input
            name='password'
            type='password'
            className='form-control'
            placeholder='Password'
            // value={}
            onChange={(e)=>handleChange(e)} />
      </div>
      <div className='form-group'>
         <div> &nbsp;</div>
        <input type='submit' className='btn' value='Login' />
        
      </div>
    </form>
    </div>}
   
  </div>         

          

            </Grid>
      
            <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
            <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>
      
        </Grid>
        
        
        
          <Footer/>

     </>
      
    );
  }




  const hidbtnTabeMode={
    '@media (min-width:480px)and (max-width:880px)' : {
      display:"none",
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      display:"none",
    } 
  }
  
  
  const hidbtnWebMode={
    '@media (min-width:880px)and (max-width:2470px)' : {
      display:"none"
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      display:"none",
    } 
  }
  
  const hidbuttonMobile={
    '@media (min-width:880px)and (max-width:2470px)' : {
      display:"none"
    },
    '@media (min-width:480px)and (max-width:880px)' : {
      display:"none",
    },
  } 
  
  
  const sections3={
    margin:"40px 150px 0px 150px",
    '@media (min-width:480px)and (max-width:880px)' : {
      margin:"40px 10px 40px 10px !important",
    },
    '@media (min-width:280px)and (max-width:470px)' : {
      margin:"40px 40px 40px 40px !important",
    }
  }
  
  
  




