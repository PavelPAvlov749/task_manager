import React from "react";
import styles from "../../Styles/Profile.module.css";
import { Navigate } from "react-router-dom";
import { Profile_status } from "./Profile_status/Profile_status";


export const Profile = (props) => {

    return (
        <div className={styles.Profile_container}>

        
        <div className={styles.Profile}>

            <img
                src={props.profile.profile.photos.large ? props.profile.profile.photos.large : "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png"}
                alt="" />
            <h1>{props.profile.profile.fullName}</h1>
        </div>

        <Profile_status status={props.status}/>
        </div>
    )
}