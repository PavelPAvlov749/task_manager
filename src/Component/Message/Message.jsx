import React from "react";
import styles from "../Dialogs/Dialogs.module.css"


const Message = (props)=>{
    return(
        <div className={styles.text_content}>
            {props.message_item}
        </div>
    )
}


export default Message;
  