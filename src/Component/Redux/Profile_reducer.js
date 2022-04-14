import { usersAPI } from "../API/api";


const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_PHOTO = "SET_PHOTO";

let initial_state ={
    profile:{
        profile:null,
        photos:{
            large:null
        }
    }
}

export const Profile_reducer = (state = initial_state,action) =>{
    switch(action.type)
    {
        case SET_USERS_PROFILE:
        
            return {...state,profile: action.profile}
        case SET_PHOTO :
            return {...state,profile : {...state.profile,photos :action.photo}}
        default:
            return state;
    }
}

export const Set_users_profileAC = (profile)=>
{
    return {
        type: "SET_USERS_PROFILE",
        profile:profile
    }
}
export const Set_photoAC = (photo)=>{
    return {
        type: "SET_PHOTO",
        photo: photo
    }
}