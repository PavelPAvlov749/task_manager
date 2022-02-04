import { usersAPI } from "../API/api";
import { set_current_userAC } from "./users_reducers";
const SET_USER_AUTH = "SET_USER_AUTH";
const TOOGLE_IS_FETCH = "TOGLE_IS_FETCH";

let initiaal_state = {
    auth: false,
}

export const Auth_reducer = (state = initiaal_state,action) => {
    switch(action.type){
        case SET_USER_AUTH:
            return {...state,auth: action.auth}
        default:
            return state
    }
}

export const set_user_authAC = (auth) =>
{
    return {
        type: "SET_USER_AUTH",
        auth: auth
    }
}

export const get_auth_user_data = ()=>(dispatch)=>{
    usersAPI.set_my_id().then(response=>{
        if(response.data.resultCode === 0){
            let {id,login,email}=response.data.data
            dispatch(set_user_authAC(id,login,email,true))
        }
    })
}

export const logout = () =>(dispatch) =>{
    usersAPI.log_out().then((response)=>{
        if(response.data.resultCode === 0){
            dispatch(set_user_authAC(false))
        }
        
    })
}
