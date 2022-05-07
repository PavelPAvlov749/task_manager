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
            set_mesages(JSON.parse(e.data));
        })
    },[])
    return (
        <div id="messages" style={{height : "400px" , overflow : "auto"}} className={styles.messages}>
            {messages.map((el)=>{
                return <Message message={el.message} userName={el.userName} photo={el.photo} userId={el.userId}/>
            })}
        </div>
    )
}
const MessageForm: React.FC = (props) => {
    return (
        <div>
            <div>
                <textarea name="message" id="message_formm" cols={133} rows={10} title="message" >
                </textarea>
            </div>
            <div>
                <button type="button">send</button>
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