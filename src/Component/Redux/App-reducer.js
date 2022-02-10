import { get_auth_user_data } from "./auth_reducer";
import { set_current_user } from "../AsyncAcion/async_action";
import { set_user_authAC } from "./auth_reducer";
import { usersAPI } from "../API/api";

const SET_INITIALIZE = "SET_INITIALIZE"

let initial_state = {
    initialized : false
}

export const App_reducer = function (state = initial_state,action)
{
    switch(action.type){
        case SET_INITIALIZE :
            return {...state,initialized : true};
        default:
            return state;
    }
}

export const initialize_sucsessAC = () => {
    return {
        type: "SET_INITIALIZE",
    }
}

export const initialize = () => (dispatch) => {
    let propmise = dispatch(get_auth_user_data())
    let propmise_2 = dispatch(set_current_user())

    //When all promises has resolved,then dispatch will call "initialize_sucsessAC" :
    Promise.all([propmise,propmise_2]).then(()=>{
        setTimeout(2000,()=>{})
        dispatch(initialize_sucsessAC())
    })
}