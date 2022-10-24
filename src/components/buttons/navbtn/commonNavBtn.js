import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export default function CommonNavBtn(props) {
    
    const DynColor  = props.dyn_Color 
    const DynWidth  = props.dyn_Width
    const Dynheight = props.dyn_height
    const Dynvalue  = props.dyn_Value
    const endIcons  = props.dyn_endIcons
    const btnText   = props.dyn_btnText

    const navigate = useNavigate();

    function handleClick(e) {
      navigate(e);
    } 

  return ( 
    <Button 
      endIcon={endIcons} 
      variant="contained"  
      size='large'
      value={Dynvalue}
      className={"navbtnSqr"}
      onClick={(e)=>{handleClick(e.target.value)}}
      sx={{ 
            ...btnsleft.common,
            minWidth: DynWidth,
            height: Dynheight,
            backgroundColor:DynColor,
            '&:hover': { backgroundColor:DynColor, 
            opacity: [0.9, 0.8, 0.7],},
            flexDirection: "column-reverse",
            padding:" 24px 5px",
            }}>
      {btnText}
    </Button> 
  )
}


const btnsleft={
    common:{
      fontFamily:"'Noto Nastaliq Urdu', serif;", 
      boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
      m: 1 ,
      justifyContent:"space-between"   , 
    }
  }