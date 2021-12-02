import React from "react";
import styles from "../Styles/Dialogs.module.css";



const Dialogs =  ()=> {

    return (
        <div className={styles.dialogs_container}>
            <div className={styles.dialog_list}>
                Dialog list:
                <hr />
            </div>

            <div className={styles.dialog}>
                Dialogs
                <hr />
                <div className={styles.text_content}>
                    No massages yet...
                </div>
            </div>

        
        </div>
    )
}


export default Dialogs;