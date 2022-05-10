import { message } from "antd";
import react, { ReactText, useEffect, useState } from "react";
import styles from "../../Styles/Chat.module.css";

const web_socket_connectoin = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
export type MessageType = {
    message : string,
    photo : string,
    userId : number,
    userName : string
}

type PropsType = {

}
const Message :React.FC<MessageType> = (props)=>{


    return (
        <div>
            <div>
                <img src={props.photo} alt="#"/>
                <b>{props.userName}</b>
                <br/>
                    {props.message}
                <hr></hr>
            </div>
        </div>
    )
}
const Messages: React.FC<PropsType> = (props) => {
    const [messages,set_mesages] = useState<MessageType[]>([]);
    useEffect(()=>{
        web_socket_connectoin.addEventListener("message",(e)=>{
            let new_messages = JSON.parse(e.data)
            set_mesages((prev_messages)=>[...prev_messages,...new_messages]);
        })
    },[])
    return (
        <div id="messages" style={{height : "400px" , overflow : "auto"}} className={styles.messages}>
            {messages.map((el,index)=>{
                return <Message key={index} message={el.message} userName={el.userName} photo={el.photo} userId={el.userId}/>
            })}
        </div>
    )
}
const MessageForm: React.FC = (props) => {
    const [message,set_message] = useState("");
    const send_message = () =>{
        web_socket_connectoin.send(message);
        set_message("")
    }
    return (
        <div>
            <div>
                <textarea name="message" id="message_formm" cols={133} rows={10} title="message"
                    onChange={(e)=>{
                        set_message(e.currentTarget.value)
                    }} value={message}>
                </textarea>
            </div>
            <div>
                <button type="button" onClick={send_message}>send</button>
            </div>
        </div>
    )
}
export const ChatPage: React.FC<PropsType> = (props) => {
    return (
        <div>
            Chat
            <Messages />
            <MessageForm />
        </div>
    )

}