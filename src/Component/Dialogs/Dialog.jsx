import React from "react";
import styles from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";


const Dialog = (props) =>{
    let name = props.name_list;
    let path = "dialogs/" + props.id;
    return (
        <div className={styles.dialog + " " + styles.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


export default Dialog;