//importing React,Redux components

import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import useState from "react"
//IMPORTING TYPES 
import {Global_state_type} from "../Redux/redux_store";
//Another imports
import { actions } from "../Redux/users_reducers";
import { profile_actions } from "../Redux/Profile_reducer";
import { usersAPI } from "../API/api";
import { Profile } from "./Profile";
import { ProfileApi } from "../API/api";
import { get_users_status } from "../AsyncAcion/async_action";
import { Preloader } from "../Preloader/Preloader";
import { get_async_user_profile } from "../AsyncAcion/async_action";
let a : number = 0;

let func = (a :number,b:number):number =>{
    return a +b;
}
type Photos_type = {
    small : string,
    large : string,
}

type Profile_type = {
    profile : {
        fullName : string,
        status : string,
        photos : Photos_type
    }
}
type MapStateProps_type = {
    profile : Profile_type,
    auth : boolean,
    status :  string,
    is_fetch : boolean,
}
type MapDispatchProps_type = {
    Set_users_profileAC: (_data:any)=>void,
    Get_async_status: (_id:any)=>void,
    set_fetch: (value:any)=>void,
    get_async_user: (_id:number)=>void
}
type OwnStateProps_type = {
    page_title: string
}

type State_props_type = MapStateProps_type & MapDispatchProps_type & OwnStateProps_type;



export const Prof_container_API : React.FC<State_props_type> = (props: State_props_type) => {

    const params = useParams();
  
    const id = Number(params.id);
    let [photo,set_photo] = React.useState(props.profile.profile.photos.large);
    useEffect(()=>{
        usersAPI.get_profile(id).then((data:any)=>{
            return props.Set_users_profileAC(data);
        })
    },[photo])

    // props.set_fetch(true);
    // usersAPI.get_profile(id).then((data) => {
    //     props.Set_users_profileAC(data)
    //     // props.set_fetch(false)
    // })
    //props.Get_async_status(id);
    return (
       <Profile {...props}/>

    )
};


let MapStateToProps = (state:State_props_type):MapStateProps_type => {
    return {
        profile: state.profile,
        auth: state.auth,
        status: state.status,
        is_fetch: state .is_fetch
    }
};

let MapDispatchToProps = (dispatch:any) => {
    return {
        Set_users_profileAC: (profile:any) => {
            dispatch(profile_actions.Set_users_profileAC(profile))
        },
        Get_async_status: (id:string) => {
            dispatch(get_users_status(id))
        },
        set_fetch: (value:any) => {
            dispatch(actions.set_is_fetchAC(value))
        },
        get_async_user:(id:number)=>{
            dispatch(get_async_user_profile(id))
        }
    }
};

export const Prof_container = connect<MapStateProps_type,MapDispatchProps_type,OwnStateProps_type,State_props_type>
    (MapStateToProps, MapDispatchToProps)(Prof_container_API);