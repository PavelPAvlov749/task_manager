import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chat_api } from "../API/chat_api";
import { MessageType } from "./Chat";
import { listen_messages_start, send_message } from "../Redux/Chat_reducer";
import styles from "../../Styles/Chat.module.css";
import { Global_state_type } from "../Redux/redux_store";



type PropsType = {
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div>
            <img src={props.photo} alt="#" />
            <b>
                {props.userName}
            </b>
            <br />
            {props.message}
            <hr></hr>
        </div>
    )
};

const Messages: React.FC<PropsType> = (props) => {
    let messages = useSelector((state: Global_state_type) => state.chat.messages);

    return (
        <div id="messages" style={{ height: "400px", overflow: "auto" }} className={styles.messages}>
            {messages.map((el, index) => {
                return <Message key={index} message={el.message} userName={el.userName} photo={el.photo} userId={el.userId} />
            })}
        </div>
    )
};

const Message_input: React.FC<PropsType> = (props) => {
    let [new_message, set_new_message] = useState("");
    //Send Mesage function clear the textarea value after sending
    const dispatch = useDispatch();
    const send_message_handler = () => {
        dispatch(send_message(new_message))
    }

    return (
        <div>
            <div>
                <textarea name="message" id="message_form" cols={133} rows={10} title="message"
                    value={new_message}
                    onChange={(e) => {
                        set_new_message(e.currentTarget.value)
                    }}
                ></textarea>
            </div>
            <div>
                <button type="button" onClick={send_message_handler}
                    //Button should be disabled if webSocket is null(by default value) or web_socket has pending status
                    disabled={false}
                >Send</button>
            </div>
        </div>
    )
};

export const Chat_page: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listen_messages_start())
    },[])
    let m = useSelector((state:Global_state_type)=>{
        return state.chat.messages;
    });
    console.log(m)
    return (
        <div>
            <Messages />
            <Message_input />
        </div>
    )
}