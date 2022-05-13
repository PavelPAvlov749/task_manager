import { message } from "antd";
import React from "react";
import react, { ReactText, useEffect, useState } from "react";
import styles from "../../Styles/Chat.module.css";


//Type for single message compoent
export type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

//Props type for ChatPage chodrens components
type MessagesPropsType = {
    messages: Array<MessageType>,
    web_socket: WebSocket | null,
    is_web_socket_ready: "pending" | "ready",
    set_is_web_socket_ready: (is_ready: "pending" | "ready") => void,
}
//Single Message compomemt 
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
//All messages block compomnent render the array of Message components after maping data from server
const Messages: React.FC<MessagesPropsType> = (props) => {
    return (
        <div id="messages" style={{ height: "400px", overflow: "auto" }} className={styles.messages}>
            {props.messages.map((el, index) => {
                return <Message key={index} message={el.message} userName={el.userName} photo={el.photo} userId={el.userId} />
            })}
        </div>
    )
};
//Chat input component
const Message_form: React.FC<MessagesPropsType> = (props) => {
    let [new_message, set_new_message] = useState("");
    //Send Mesage function clear the textarea value after sending
    const send_message = function () {
        //If new message equals empty string throw an error
        try {
            if (new_message.length < 1) {
                throw new Error;
            } else {
                props.web_socket?.send(new_message)
                set_new_message("");
            }
        } catch (ex) {
            console.log(ex)
        }
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
                <button type="button" onClick={send_message}
                    //Button should be disabled if webSocket is null(by default value) or web_socket has pending status
                    disabled={props.web_socket === null || props.is_web_socket_ready === "pending"}
                >Send</button>
            </div>

        </div>
    )
}

//Main Chat component
//Using React.memo to optimize render calls
export const ChatPage: React.FC<MessagesPropsType> = React.memo((props) => {
    //Creating web socket connection
    let [is_web_socket_ready, set_is_web_socket_ready] = useState<"pending" | "ready">("pending");
    let [web_socket, set_web_socket] = useState<WebSocket | null>(null);

    useEffect(() => {
        let ws: WebSocket;
        const close_handler = function () {
            console.log("Atteintion : WebSocket chanel was closed!")
            //Recursive call create_chanel function each 3 seconds try to reconnect
            setTimeout(create_chanel, 3000);
        }
        const create_chanel = function () {
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
            //If webSocket already exist and dont close eventListener would be removed
            if (ws !== null) {
                ws.removeEventListener("close", close_handler);

            }

            //If web socket was closed create nw instance of webSocket and reconnect
            ws.addEventListener("close", close_handler)
            set_web_socket(ws);


        }

        create_chanel();

        return ()=>{
            //When component will unmount we should close webSocket connection and remove event listeners
            ws.removeEventListener("close",close_handler);
            ws.close();
        }

    }, [])

    //WebSocket close event listener creating new instance of webSocjet if an error ocured and set is_web_socket_ready in "pending" state
    useEffect(() => {
        web_socket?.addEventListener("close", () => {
            set_web_socket(new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"));
            set_is_web_socket_ready("pending");
        })
    }, [web_socket]);
    //webSocket Open event litener
    useEffect(() => {
        const open_handler = ()=>{
            set_is_web_socket_ready("ready");
        }
        web_socket?.addEventListener("open",open_handler)
        //Returning the clean-up function ti remove all old event listebers
        return ()=>{
            web_socket?.removeEventListener("open",open_handler);
        }
    }, [web_socket]);
    let [messages, set_messages] = useState<Array<MessageType>>([]);

    //Requesting messages from the server them parse them to string useing effect once when component did monted
    useEffect(() => {
        web_socket?.addEventListener("message", (e) => {
            let new_messages = JSON.parse(e.data);
            set_messages((prev_messages) => [...prev_messages, ...new_messages]);
        })
    }, [web_socket]);
    console.log(is_web_socket_ready)
    return (
        <div>
            <Messages messages={messages} web_socket={web_socket} is_web_socket_ready={is_web_socket_ready} set_is_web_socket_ready={set_is_web_socket_ready} />
            <Message_form messages={messages} web_socket={web_socket} is_web_socket_ready={is_web_socket_ready} set_is_web_socket_ready={set_is_web_socket_ready} />
        </div>
    )
});