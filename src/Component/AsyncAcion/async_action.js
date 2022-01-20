import { follow_fetchAC, set_usersAC } from "../Redux/users_reducers";
import { set_is_fetchAC } from "../Redux/users_reducers";
import { set_users_countAC } from "../Redux/users_reducers";
import { set_current_pageAC } from "../Redux/users_reducers";
import { unfollowAC } from "../Redux/users_reducers";
import { followAC } from "../Redux/users_reducers";
import { usersAPI } from "../API/api";


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

class Data_access_layer
{
    constructor()
    {

    }
     
}