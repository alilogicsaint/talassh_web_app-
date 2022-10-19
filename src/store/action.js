import axios from "axios"

 const getdata=()=>{
    return async (dispatch) => {       
    await axios.get('https://test-api-for-data-default-rtdb.firebaseio.com/user.json')
    .then(function (response) {

    dispatch({type:"GETDATA", user:response.data})
     }).catch(err => console.error(err.message));
    };
 }

 const getTabledata =()=>  {
    return async (dispatch) => {       
    await axios.get('https://test-api-for-data-default-rtdb.firebaseio.com/data.json')
    .then( function (response) {
       
    dispatch({type:"GETTABLEDATA", data:response.data})
     }).catch(err => console.error(err.message));
    };
 }



export {
    getdata,
    getTabledata,
}



