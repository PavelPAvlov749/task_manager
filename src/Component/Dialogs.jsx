import React from "react";
import styles from "../Styles/Dialogs.module.css";



const Dialogs =  ()=> {

    return (
        <div className={styles.dialogs_container}>
            <div className={styles.dialog_list_container}>
                Dialog list:
                <hr />
                <section className={styles.dialogs}>
                    <ul className={styles.dialog_list}>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                        <li className={styles.dialogs_item}>
                            <figure>
                                <img src="#" alt="" />
                                User_name 
                                {/* <button type="button"></button>
                                <button type="button"></button> */}
                            </figure>
                        </li>
                    </ul>
                </section>
            </div>

            <div className={styles.dialog}>
                Dialogs
                <hr />
                <div className={styles.text_content}>
                    <div className="massages">hi</div>
                    <div className="massages">whats new</div>
                    <div className="massages">nothing</div>
                </div>
            </div>

        
        </div>
    )
}


export default Dialogs;