import { Navigate } from "react-router-dom";
import React, { Component } from "react";


export let Auth_redirect = (Component,props)=>{
    if(props.isAuth == false)
    {
        return <Navigate to="login"/>
    }else{
        <Component props={...props}/>
    }
}
