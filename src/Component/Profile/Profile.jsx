import React from "react";
import styles from "../../Styles/Profile.module.css";
import { Navigate } from "react-router-dom";
import { Profile_status, Profile_status_with_hooks } from "./Profile_status/Profile_status";
import { Preloader } from "../Preloader/Preloader";


export const Profile = (props) => {
    if(true)
    {
        console.log(props.profile.profile.fullName)
        return (
            <div className={styles.Profile_container}>
    
            
            <div className={styles.Profile}>
    
                <img
                    src={props.profile.profile.photos.large ? props.profile.profile.photos.large : "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png"}
                    alt="" />
                <h1>{props.profile.profile.fullName}</h1>
            </div>
    
            {/* <Profile_status status={props.status}/> */}
            <Profile_status_with_hooks status={props.status}/>
            </div>
        )
    }else{
        return <Preloader/>
    }

}