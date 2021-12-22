import React from "react";
import { User_title } from "./Dialogs";
import { Current_Message } from "./Dialogs";
import { Current_dialog_box } from "./Dialogs";
import { Dialogs_sidebar } from "./Dialogs";
import { Dialogs_list } from "./Dialogs";
import { Dialog_list_item } from "./Dialogs";
//Importing styles
import styles from "../Styles/Dialog_container.module.css"

//importing the main state object
import { store } from "./Redux/State";

//Importing reducers :
import { dialogs_reducer } from "./Redux/Reducers";
import { text_area_reducer } from "./Redux/Reducers";
import { add_user } from "./Redux/Reducers";
//Importing action creator functions:
import { Add_User_action_creator } from "./Redux/Reducers";
import { new_message_body } from "./Redux/Reducers";
import { new_message_action } from "./Redux/Reducers";


const Dialogs_container = ()=>
{
    
    
    return (
        <div className={styles.Dialogs_container}>
            <Dialogs_list users={store.state.users}/>
            <Current_dialog_box messages={store.messages} dispatch={store.dispath.bind(store)} new_message={store.newMessage}
            add_new_message={new_message_action} dialogs_reducer={dialogs_reducer} new_message_body={new_message_body}/>
            <Dialogs_sidebar />
        </div>
    )
}

export default Dialogs_container;