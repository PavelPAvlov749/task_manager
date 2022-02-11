//Importing action creators
import { follow_fetchAC, set_usersAC, update_statusAC } from "../Redux/users_reducers";
import { set_is_fetchAC } from "../Redux/users_reducers";
import { set_current_userAC } from "../Redux/users_reducers";
import { set_users_countAC } from "../Redux/users_reducers";
import { unfollowAC } from "../Redux/users_reducers";
import { followAC } from "../Redux/users_reducers";
import { set_statusAC } from "../Redux/users_reducers";
import { set_user_authAC } from "../Redux/auth_reducer";
import { stopSubmit } from "redux-form";

//Impoerting Data Access Layer
import { usersAPI } from "../API/api";
import { ProfileApi } from "../API/api";

//Declaring the thunk creators :

export const set_current_user = function ()
{
    return function (dispatch)
    {
        usersAPI.set_my_id().then((response)=>{
            
            dispatch(set_current_userAC(response.data.data.id))
        })
    }
}
export const Follow_async = function (_id)
{
    return function (dispatch)
    {
        dispatch(follow_fetchAC(true));
        usersAPI.follow(_id).then((response)=>{
            dispatch(follow_fetchAC(false));
            dispatch(followAC(_id));
        })
    }
}
export const Unfollow_async = function (_id)
{
    return function (dispatch)
    {
        dispatch(follow_fetchAC(true));
        usersAPI.unfollow(_id).then((response)=>{
            dispatch(follow_fetchAC(false));
            dispatch(unfollowAC(_id));
        })
    }
}

export const Get_async_users = function (current_page,paige_size)
{
    return function (dispatch)
    {
        dispatch(set_is_fetchAC(true))
    
        usersAPI.get_users().then((data)=>{
            dispatch(set_usersAC(data.items))
            dispatch(set_users_countAC(data.totalCount))
            dispatch(set_is_fetchAC(false))
        })
    }
};

export const get_users_status = function (id)
{
    return function(dispatch)
    {
        ProfileApi.get_status(id).then((response)=>{
            console.log(response.data)
            dispatch(set_statusAC(response.data))
        })
    }
};

export const Login_thunk = function (formData){

    return function (dispatch){
        usersAPI.login(formData).then((response)=>{
            dispatch(set_current_userAC(response.data.data.userId))
            if(response.data.resultCode === 0){
                dispatch(set_user_authAC(true))
            }else{
                dispatch(set_user_authAC(false))
                if(response.data.messages.length > 0){
                    dispatch(stopSubmit("login",{_error: response.data.messages[0]}))
                }else{
                    dispatch(stopSubmit("login",{_error: "Unknown Error.Please try again."}))
                }
            }
            
        })
    }
  
}


export const update_user_status = function (_text){
    return function (dispatch)
    {
        ProfileApi.update_status(_text);
        dispatch(update_statusAC(_text));
    }
}