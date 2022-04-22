import { get_auth_user_data } from "./auth_reducer";
import { set_current_user } from "../AsyncAcion/async_action";
import { set_user_authAC } from "./auth_reducer";
import { usersAPI } from "../API/api";

const SET_INITIALIZE = "SET_INITIALIZE";

export type Initial_State_Type = {
    initialized : boolean
};

let initial_state: Initial_State_Type = {
    initialized : false
}


export const App_reducer = (state = initial_state,action:any) : Initial_State_Type =>
{
    switch(action.type){
        case SET_INITIALIZE :
            return {...state,initialized : true};
        default:
            return state;
    }
}

let Set_Initialize_Action_Type = "SET_INITIALIZE";

type Action_Type = {
    type : typeof SET_INITIALIZE
}

export const initialize_sucsessAC = (): Action_Type => {
    return {
        type: "SET_INITIALIZE",
    }
}
//Creating the action types and action function types



export const initialize = () => (dispatch:any) => {
    let propmise = dispatch(get_auth_user_data())
    let propmise_2 = dispatch(set_current_user())

    //When all promises has resolved,then dispatch will call "initialize_sucsessAC" :
    Promise.all([propmise,propmise_2]).then(()=>{
        //setTimeout(2000,()=>{})
        dispatch(initialize_sucsessAC())
    })
}

