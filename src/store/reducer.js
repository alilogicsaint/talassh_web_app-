

const INITIAL_STATE={
    user: [],
    data:[],
};

const AppReducer =(state = INITIAL_STATE,action)=>{
  
    switch (action.type){
        case "GETDATA":
            return{
                ...state,
                user:action.user
            }
        case "GETTABLEDATA":
                return{
                    ...state,
                    data:action.data
                }
        default:
                return state
    }
    
}

export default AppReducer;
