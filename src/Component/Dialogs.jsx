import React from "react";
import styles from "../Styles/Dialog_container.module.css";
import { NavLink } from "react-router-dom";




export const User_title = () => {
    return (
        <figure className={styles.current_Interlocutor}>
            <img className={styles.current_Interlocutor_avater}></img>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
        </figure>
    )
}

export const Current_Message = () => {
    return (
        <section className={styles.message}>
            <User_title />
            <div>

            </div>
        </section>
    )
}


export const Dialog_list_item = (props) => {
    return (
        <div className={styles.dialog}>
            <li className={styles.users_list}>
                {props.name + " " + props.surname}
            </li>
        </div>
    )
}


export const Dialogs_list = (props) => {
    let users_list = props.users.map((el) => {
        return (
            <Dialog_list_item name={el.name} surname={el.surname} />
        )
    })

    return (
        <section className={styles.container_list}>
            <h2>List of dialogs</h2>
            <ul className={styles.users_list}>

                {users_list}

            </ul>
        </section>
    )
}


export const Current_dialog_box = (props) => {
    let text_content = React.createRef();
    let message_list = props.messages.map((el) => {
        return (
            <div>
                Pavel Pavlov :
                <br />
                {el}
            </div>
        )
    })
    
    return (
        <section className={styles.curent_dialog_container}>
            <div className={styles.text_box}>
                {message_list}
            </div>  
            <section className={styles.textarea}>
                <textarea cols="30" rows="10" className={styles.textarea} ref={text_content}
                onChange={()=>
                    {
                        props.dispatch(props.new_message_body("NEW-MESSAGE",text_content.current.value))
                    }
                }>


                </textarea>
                <button type="buttnon" 
                onClick={()=>
                {
                    if(text_content.current.value != "")
                    {
                        props.dispatch(props.add_new_message("ADD-MESSAGE",text_content.current.value))
                        text_content.current.value = "";
                    }
                    else
                    {
                        alert("Type text");
                    }
                    
                }}
                >Send</button>
                {/* <button type="button"></button> */}
            </section>

        </section>
    )
}

export const Dialogs_sidebar = () => {
    return (
        <section className={styles.dialogs_sidebar}>
            <h2>Settings</h2>
            <ul className={styles.dialogs_settingsList}>
                <li className={styles.settings_item}>
                    <NavLink to={"dialogs/black_list"}>Add to balck list</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/clear"}>Clear messages history</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/notifications"}>Turn off notifications</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/add_chat"}>Add user in chat</NavLink>
                </li>
            </ul>
        </section>
    )
}
