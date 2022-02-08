//importing React,Redux components

import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

//Another imports
import { Set_users_profileAC } from "../Redux/Profile_reducer";
import { usersAPI } from "../API/api";
import { Profile } from "./Profile";
import { ProfileApi } from "../API/api";
import { get_users_status } from "../AsyncAcion/async_action";
import { Preloader } from "../Preloader/Preloader";
import { set_is_fetchAC } from "../Redux/users_reducers";

export const Prof_container_API = (props) => {


    const params = useParams();
    const id = params.id;

    props.set_fetch(true);
    usersAPI.get_profile(id).then((data) => {
        props.Set_users_profileAC(data)
    })
    props.set_fetch(false)
    props.Get_async_status(id);
    return (
        <Profile {...props} />

    )
};

let MapStateToProps = (state) => {
    return {
        profile: state.profile,
        isAuth: state.auth.auth,
        status: state.status.status,
        // isFetch: state.is_fetch
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        Set_users_profileAC: (profile) => {
            dispatch(Set_users_profileAC(profile))
        },
        Get_async_status: (id) => {
            dispatch(get_users_status(id))
        },
        set_fetch: (value) => {
            dispatch(set_is_fetchAC(value))
        }
    }
};

export const Prof_container = connect(MapStateToProps, MapDispatchToProps)(Prof_container_API);