import React from "react";  
import { Dialogs_container_new } from "./New_Dialogs";
//Importing reducers :
import { dialogs_reducer } from "../Redux/Reducers";
import { text_area_reducer } from "../Redux/Reducers";
import { add_user } from "../Redux/Reducers";
//Importing action creator functions:
import { Add_User_action_creator } from "../Redux/Reducers";
import { new_message_body } from "../Redux/Reducers";
import { new_message_action } from "../Redux/Reducers";
import { connect } from "react-redux";

//Export React-Redux-Store
export const StoreContext = React.createContext(null);



let mapStateToProps = (state) => {
    return {
        messages: state.messages,
        newMessage: state.newMessage,
        users: state.users,
        isAuth: state.auth.auth
        
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (action,text) => {
        
        dispatch(new_message_action(action,text))
        },
        add_user:(action,text) => {
            dispatch(Add_User_action_creator(action,text))
        }
    }
}

export const Redux_container = connect(mapStateToProps, mapDispatchToProps)(Dialogs_container_new);

