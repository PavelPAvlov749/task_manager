import {result_codes} from "../API/api";
import { usersAPI } from "../API/api";
import { Global_state_type, InferActionType } from "./redux_store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {Action} from "redux";

//Declaring types
type initiaal_state_type = typeof initiaal_state;
type Action_Type = InferActionType<typeof actions>;
type Dispatch_type = Dispatch<Action_Type>;
type Thunk_type = ThunkAction<void,Global_state_type,unknown,Action_Type>;
//Base Thunk generic type for all Thunk Craetors
export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R,Global_state_type,unknown,A>;


const SET_USER_AUTH = "SET_USER_AUTH";
const TOOGLE_IS_FETCH = "TOGLE_IS_FETCH";


let initiaal_state = {
    auth: false,
}

export const actions = {
    set_user_authAC : (auth:boolean) =>
    {
        return {
            type: "SET_USER_AUTH",
            auth: auth
        }
    }
}

export const Auth_reducer = (state = initiaal_state,action:Action_Type) => {
    switch(action.type){
        case SET_USER_AUTH:
            return {...state,auth: action.auth}
        default:
            return state
    }
}



export const get_auth_user_data = () :CommonThunkType<Action_Type> =>async(dispatch:Dispatch_type)=>{
    let response = await usersAPI.set_my_id()
        if(response.resultCode === result_codes.Success){
            dispatch(actions.set_user_authAC(true))
        }
    
    
}

export const logout = ():CommonThunkType<Action_Type> => async(dispatch:Dispatch_type) =>{
    let response = await usersAPI.log_out().then((response)=>{
        if(response.data.resultCode === 0)
        {
            dispatch(actions.set_user_authAC(false))
        }
    })
}
