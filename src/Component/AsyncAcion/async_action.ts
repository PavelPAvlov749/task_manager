//Response code enums
import { result_codes } from "../API/api";
//Importing action creators
import { Users_action_type as Action_users_type } from "../Redux/users_reducers";
import { set_user_authAC } from "../Redux/auth_reducer";
import { stopSubmit } from "redux-form";
import { Set_users_profileAC } from "../Redux/Profile_reducer";
import { Set_photoAC } from "../Redux/Profile_reducer";
import { actions } from "../Redux/users_reducers";
//Impoerting Data Access Layer
import { usersAPI } from "../API/api";
import { ProfileApi } from "../API/api";
//Redux thunk action import
import { ThunkAction} from "redux-thunk";
import { Dispatch } from "redux";
import {Global_state_type} from "../Redux/redux_store";
import { Action } from "history";
import { User_type } from "../Redux/Reducers";
//Declaring the thunk creators :

//Declaring the type to getState function
type get_state_type = () => Global_state_type;
//Dedcalring the type of Dispatch Dispatch was impoerted feom "redux"
type Dispatch_type = Dispatch<Action_users_type>;
//Declaring the universal type fir all thunk_creators,thunkAction was impoerted from "redux-thunk"
type Thunk_type = ThunkAction<void,Global_state_type,unknown,Action_users_type>;

export type Users_action_type = typeof actions;

export const set_current_user = function ():Thunk_type
{
    return function (dispatch,getState)
    {
        usersAPI.set_my_id().then((response)=>{
            
            dispatch(actions.set_current_userAC(response.data.id));
        })
    }
}
export const Follow_async = function (_id:number):Thunk_type
{
    return function  (dispatch)
    {
        dispatch(actions.follow_fetchAC(true,_id));
        usersAPI.follow(_id).then((response:any)=>{
            dispatch(actions.follow_fetchAC(false,_id));
            dispatch(actions.followAC(_id));
        })
    }
}
export const Unfollow_async = function (_id:number):Thunk_type
{
    return function (dispatch)
    {
        dispatch(actions.follow_fetchAC(true,_id));
        usersAPI.unfollow(_id).then((response:any)=>{
            dispatch(actions.follow_fetchAC(false,_id));
            dispatch(actions.unfollowAC(_id));
        })
    }
}

export const Get_async_users = function (current_page:number,paige_size:number):Thunk_type
{
    return async function (dispatch)
    {
        dispatch(actions.set_is_fetchAC(true))
    
        let data = await usersAPI.get_users(current_page,paige_size);
            dispatch(actions.set_usersAC(data.items));
            dispatch(actions.set_users_countAC(data.totalCount));
            dispatch(actions.set_is_fetchAC(false)); 
    }
};

export const get_users_status = function (id:number):Thunk_type
{
    return function(dispatch)
    {
        ProfileApi.get_status(id).then((response:any)=>{
            console.log(response.data)
            dispatch(actions.set_statusAC(response.data));
        })
    }
};
// @ts-ignore
export const Login_thunk = function (formData:any):Thunk_type
{

    return function (dispatch){
        usersAPI.login(formData).then((response)=>{
            dispatch(actions.set_current_userAC(response.data.data.userId))
            if(response.data.resultCode === result_codes.Success){
                // @ts-ignore
                dispatch(set_user_authAC(true))
            }else{
                // @ts-ignore
                dispatch(set_user_authAC(false))
                if(response.data.messages.length > 0){
                    
                    // @ts-ignore
                    dispatch(stopSubmit("login",{_error: response.data.messages[0]}))
                }else{
                    // @ts-ignore
                    dispatch(stopSubmit("login",{_error: "Unknown Error.Please try again."}))
                }
            }
            
        })
    }
}
    
export const get_async_user_profile = (id:number):Thunk_type => {
    debugger;   
    return (dispatch) => {
        // dispatch(set_is_fetchAC(true))
        usersAPI.get_profile(id).then((data:any)=>{
            // @ts-ignore
            dispatch(Set_users_profileAC(data));
            // dispatch(set_is_fetchAC(false))
        })
    }
};


export const update_user_status = function (_text:string):Thunk_type
{
    return function (dispatch)
    {
        ProfileApi.update_status(_text);
        dispatch(actions.update_statusAC(_text));
    }
}
export const update_photo_thunk = function (photo:string):Thunk_type
{
    return async function (dispatch){
        let response = await usersAPI.set_photo(photo);
        debugger;
        if(response.data.resultCode === 0){
            // @ts-ignore
            dispatch(Set_photoAC(response.data.data.photos.large))
            console.log(response)
        }
     
    }
}