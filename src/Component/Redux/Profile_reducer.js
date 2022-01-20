const SET_USERS_PROFILE = "SET_USERS_PROFILE";

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