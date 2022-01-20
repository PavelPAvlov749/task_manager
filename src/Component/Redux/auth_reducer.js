const SET_USER_AUTH = "SET_USER_AUTH";
const TOOGLE_IS_FETCH = "TOGLE_IS_FETCH";

let initiaal_state = {
    auth: 1,
    
}

export const Auth_reducer = (state = initiaal_state,action) => {
    switch(action.type){
        case SET_USER_AUTH:
            if(action.auth == 0){
                return {...state,auth: true}
            }else{
                return{...state,auth: false}
            }
            
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
