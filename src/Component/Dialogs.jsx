import React from "react";
import styles from "../Styles/Dialogs.module.css";
import { new_user } from "./Redux/State";
import { Add_User_action_creator } from "./Redux/Reducers";
import { new_message_action } from "./Redux/Reducers";
import { new_message_body } from "./Redux/Reducers";


const Dialogs =  (props)=> {

    let text_content = React.createRef();
    let user_list = props.users.map((el)=>
    {
        return (
            <div>
                {el.name + " " + el.surname}
            </div>
        )
    });
    let message_list = props.messages.map((el)=>
    {
        return (
            <div>
                Pavel Pavlov :
                <br />
                {el}
            </div>
        )
    })
    
    return (
        <div className={styles.dialogs_container}>
            <div className={styles.dialog_list_container}>
                Dialog list:
                <hr />
                {user_list}
                
                <section className={styles.dialogs}>
                </section>

            </div>
            <div className={styles.dialog}>
                Dialogs
                <hr />
                <div className={styles.text_content}>
                    {message_list}
                    <br />
                </div>
                <div className={styles.side_bar}>


                </div>
                <textarea name="" id="text" cols="30" rows="10" ref={text_content} className={styles.textarea} onChange={
                    ()=>
                    {
                        props.dispatch(new_message_body("NEW-MESSAGE",text_content.current.value));
                        console.log(props.newMessage);
                    }
                }
                ></textarea>
                <button type="button" className={styles.button} 
                onClick={()=>
                {
                    props.dispatch(new_message_action("ADD-MESSAGE",text_content.current.value));
                    text_content.current.value = "";
                }}
                >Send</button>
                
            </div>
        </div>
    )
}


export default Dialogs;