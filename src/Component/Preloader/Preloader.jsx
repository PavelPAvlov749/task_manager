import React from "react";
import Preloader_img from "../../img/preloader.svg"
import styles from "../../Styles/Preloader.module.css"

export const Preloader = function (){
    return (
        <div className={styles.preloader_container}>
            <br />
            <h4>Loading please wait...</h4>
            <img src={Preloader_img} alt="" />
        </div>
    )
}