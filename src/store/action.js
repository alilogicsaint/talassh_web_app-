import axios from "axios"

 const getdata=()=>{
    return(dispatch)=>{       
    axios.get('https://test-api-for-data-default-rtdb.firebaseio.com/user.json')
    .then(function (response) {
    dispatch({type:"GETDATA", data:response.data})
     })
    
 };

 }
export {
    getdata,
}



