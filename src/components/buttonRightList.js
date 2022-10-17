
import {Box, Button,ButtonGroup, } from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GiteIcon from '@mui/icons-material/Gite';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export default function ButtonRightList() {
  return (
   
        <Box
           orientation="vertical"
           sx={{
             mr:1,
             display:"flex", 
             flexDirection:"column",
             justifyContent:"center",
             width:"100%" 
            }} 
        >
            <Button 
            startIcon={<Diversity1Icon/>} 
            variant="contained" 
            size='large'  
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#F9BC00",'&:hover': { backgroundColor: '#F9BC00', opacity: [0.9, 0.8, 0.7],} ,fontFamily:"'Noto Nastaliq Urdu', serif;" , }}>
              ضرورت رشتہ</Button>
            <Button 
            startIcon={<LocalTaxiIcon/>} 
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#8446B2",'&:hover': { backgroundColor: '#8446B2', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              ٹرانسپورٹ</Button>
            <Button 
            startIcon={<SmartphoneIcon/>} 
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#204D77",'&:hover': { backgroundColor: '#204D77', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              موبائیل</Button>
            <Button 
           startIcon={<DirectionsCarIcon/>} 
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#7C7C7C",'&:hover': { backgroundColor: '#7C7C7C', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              گاڑیاں</Button>
            <Button 
           startIcon={<GiteIcon/>} 
           variant="contained"   
           size='large' 
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#826409",'&:hover': { backgroundColor: '#826409', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              مکان</Button>
            <Button 
            startIcon={<StoreMallDirectoryIcon sx={{ml:1}}/> } 
            variant="contained"   
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#C15811",'&:hover': { backgroundColor: '#C15811', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              دکان</Button>
            <Button 
            startIcon={<ApartmentIcon/>} 
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#A5CB8B",'&:hover': { backgroundColor: '#A5CB8B', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
              ذمین</Button>
              <Button 
            startIcon={<AddAPhotoIcon/>} 
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#EDBD2B",'&:hover': { backgroundColor: '#EDBD2B', opacity: [0.9, 0.8, 0.7],}  ,fontFamily:"'Noto Nastaliq Urdu', serif;" ,}}>
              مشہورجگہ</Button>
            <Button 
            startIcon={<LocalLibraryIcon/>} 
            variant="contained"   
            size='large' 
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, justifyContent:"space-between" ,  backgroundColor:"#112F6D",'&:hover': { backgroundColor: '#112F6D', opacity: [0.9, 0.8, 0.7],}  ,fontFamily:"'Noto Nastaliq Urdu', serif;" , }}>
              کتب خانہ</Button>
          </Box>
        
  )
}
