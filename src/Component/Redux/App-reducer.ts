import { get_auth_user_data } from "./auth_reducer";
import { set_current_user } from "../AsyncAcion/async_action";
import { usersAPI } from "../API/api";
import { InferActionType } from "./redux_store";

const SET_INITIALIZE = "TM/APP/SET_INITIALIZE";


let initial_state = {
    initialized : false
}

export type Initial_State_Type = typeof initial_state;
type Action_Type = InferActionType<typeof actions>

export const App_reducer = (state = initial_state,action:Action_Type) : Initial_State_Type =>
{
    switch(action.type){
        case SET_INITIALIZE :
            return {...state,initialized : true};
        default:
            return state;
    }
}
export const actions = {
    initialize_sucsessAC : () => ({
            type: "TM/APP/SET_INITIALIZE",
        }as const)
}

export const initialize = () => (dispatch:any) => {
    let propmise = dispatch(get_auth_user_data())
    let propmise_2 = dispatch(set_current_user())

    //When all promises has resolved,then dispatch will call "initialize_sucsessAC" :
    Promise.all([propmise,propmise_2]).then(()=>{
        //setTimeout(2000,()=>{})
        dispatch(actions.initialize_sucsessAC())
    })
}

