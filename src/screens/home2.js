import React  from 'react'
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getdata} from '../store/action'



export default function Home2() {
    


    const state =useSelector(state =>state)
    const dispatch = useDispatch()
    let alltodos = state.data
    console.log(state)

    useEffect(()=>{
       dispatch(getdata())   
    },[]);
  
   
    return (
        <div>
            <h1>homepage</h1>
          
            <p>{alltodos.name}</p>
            <p>{alltodos.country}</p>
            <p>{alltodos.email}</p>
            <p>{alltodos.facebook}</p>
            <p>{alltodos.famous}</p>
            <p>{alltodos.instagram}</p>
            <p>{alltodos.name}</p>
            <p>{alltodos.number}</p>
            <p>{alltodos.state}</p>
            <p>{alltodos.watsapp}</p>
            
            <div>
            {/* {alltodos.map((item, i) => (
               <div className="travelcompany-input" key={i}>
               <li className="input-label"> 
                    id ={ item.id }title= {item.title}
               </li>
               </div>
             ))} */}
            </div>
           

        </div>
    )
}