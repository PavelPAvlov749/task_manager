import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chat_api } from "../API/chat_api";
import { MessageType } from "./Chat";
import { listen_messages_start, send_message } from "../Redux/Chat_reducer";
import styles from "../../Styles/Chat.module.css";
import { Global_state_type } from "../Redux/redux_store";
import {actions} from "../Redux/Chat_reducer"




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
    const [auto_scroll,set_autoscroll] = useState(false);
    const chat_anchor_ref = useRef<HTMLDivElement>(null);
    const scroll_hanfler = (e:React.UIEvent<HTMLDivElement,UIEvent>) => {
        let element = e.currentTarget;
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) > 60 ){
            !auto_scroll && set_autoscroll(true)
        }else {
            !auto_scroll && set_autoscroll(false)
        }
    }
    useEffect(()=>{
        if(auto_scroll)
        {
            chat_anchor_ref.current?.scrollIntoView({behavior: "smooth"}); 
        }
    },[messages])

    return (
        <div id="messages" style={{ height: "400px", overflowY: "auto" , }} className={styles.messages} onScroll={scroll_hanfler}>
            {messages.map((el, index) => {
                return <Message key={index} message={el.message} userName={el.userName} photo={el.photo} userId={el.userId} />
            })}
            <div ref={chat_anchor_ref}></div>
        </div>
        
    )
};

const Message_input: React.FC<PropsType> = (props) => {
    let [new_message, set_new_message] = useState("");
    let status = useSelector((state: Global_state_type)=> {
        return state.chat.status;
    })
    console.log(status)
    //Send Mesage function clear the textarea value after sending
    const dispatch = useDispatch();
    const send_message_handler = () => {
        dispatch(send_message(new_message))
        set_new_message("");
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
                    disabled={status !== 'ready'}
                >Send</button>
            </div>
        </div>
    )
};

export const Chat_page: React.FC<PropsType> = (props) => {
    let messages = useSelector((state : Global_state_type)=>{
        return state.chat.messages
    })
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listen_messages_start())
        
    },[])

    let m = useSelector((state:Global_state_type)=>{
        return state.chat.messages;
    });
    return (
        <div>
            <Messages />
            <Message_input />
            
        </div>
    )
}