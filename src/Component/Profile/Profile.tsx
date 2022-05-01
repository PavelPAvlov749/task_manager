import React from "react";
import styles from "../../Styles/Profile.module.css";
import { Navigate } from "react-router-dom";
import { Profile_status_with_hooks } from "./Profile_status/Profile_status";
import { Preloader } from "../Preloader/Preloader";

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
type Props_type = {
    profile : Profile_type,
    status: string,
}
export const Profile : React.FC<Props_type> = React.memo((props) => {
    if(true)
    {
        return (
            <div className={styles.Profile_container}>
    
            
            <div className={styles.Profile}>
                <img
                    src={props.profile.profile.photos.large ? props.profile.profile.photos.large : "https://avatars.githubusercontent.com/u/91758623?s=40&v=4"}
                    alt="" />
                <h1>{props.profile.profile.fullName}</h1>
                <div className={styles.about}>
                <h3>About me :</h3>
                <h3>Contacts :</h3>
                <h3>Looking for a Job :</h3>
                <h3>Show/Hide Description</h3>
                <ul>
                    <li>
                        <span>Facebook : </span>
                    </li>
                    <li>
                        <span>
                            Intsagramm :
                        </span>
                    </li>
                    <li>
                        <span>
                            Twitter : 
                        </span>
                    </li>
                    <li>
                        <span>
                            LinkedIN :
                        </span>
                    </li>
                    <li>
                        <span>
                            VK :
                        </span>
                    </li>
                </ul>
                </div>

            </div>
    
            {/* <Profile_status status={props.status}/> */}
            <Profile_status_with_hooks status={props.profile.profile.status}/>
            </div>
        )
    }else{
        return <Preloader/>
    }

})