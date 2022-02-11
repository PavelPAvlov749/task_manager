import React from "react";
import styles from "../../../Styles/Status.module.css";
import { useState } from "react";
import { useEffect } from "react";



export const Profile_status_with_hooks = (props) => {

    //Using useState hook.UseState returns array with 2 items,first - local state data,second - a function that changin state data
    let [edit_mode,set_edit_mode] = useState(false);
    let [status,set_status] = useState(props.status);

    //Using useEffect Hook.UseEffect works every time wneh the specifeied dependencies(Pointed in second argument as array)changes.
    //In this case every change in "props.status"
    //As first argument "useEffect" takes handler function
    //If second argument is a empty array, useEffect will work like "ComponentDidMount" in class-components
    //If second argiments is empty will work with every render

    useEffect(()=>{
        set_status(props.status);
    },[props.status])

    const activate_edit_mode = ()=>{
        set_edit_mode(true)
    }
    const deactivate_edit_mode = ()=> {
        set_edit_mode(false)
        props.update_status(status)
    }

    const on_status_change = (e)=> {
        set_status(e.currentTarget.value)
    }
    
    return (
        <section className={styles.status_container}>
            {!edit_mode &&
                <div className={styles.status_text}>
                    <span onClick={
                        activate_edit_mode
                    }>{props.status}</span>
                </div>}
            {edit_mode &&
                <section className={styles.status_container} onBlur={deactivate_edit_mode}>
                    <div>
                        <input onChange={on_status_change} autoFocus={true} value={status} onBlur={deactivate_edit_mode}/>
                    </div>
                </section>}
        </section>
    )
};



