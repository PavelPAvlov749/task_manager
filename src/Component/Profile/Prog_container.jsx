//importing React,Redux components

import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

//Another imports
import { Set_users_profileAC } from "../Redux/Profile_reducer";
import { usersAPI } from "../API/api";
import { Profile } from "./Profile";



export const Prof_container_API = (props)=>{

    
    const params = useParams();
    const id = params.id;

    usersAPI.get_profile(id).then((data)=>{
        props.Set_users_profileAC(data)
    })

    return(
        <Profile {...props}/>
    )
};

let MapStateToProps = (state)=>{
    return {
        profile: state.profile,
        isAuth: state.auth.auth
    }
};

let MapDispatchToProps = (dispatch)=>{
    return {
        Set_users_profileAC: (profile)=>{
            dispatch(Set_users_profileAC(profile))
        }
    }
};

export const Prof_container = connect(MapStateToProps,MapDispatchToProps)(Prof_container_API);