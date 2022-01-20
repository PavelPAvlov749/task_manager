import React from "react";
import styles from "../../Styles/Profile.module.css";
import { Navigate } from "react-router-dom";


export const Profile = (props) => {

    console.log("Profile_props is:" + props)
    window.props = props;
    if(props.isAuth === true){
        
    }
    return (
        <div className={styles.Profile_container}>

        
        <div className={styles.Profile}>

            <img
                src={props.profile.profile.photos.large ? props.profile.profile.photos.large : "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png"}
                alt="" />
            <h1>{props.profile.profile.fullName}</h1>
        </div>
        </div>
    )
}