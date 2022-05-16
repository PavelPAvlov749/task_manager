import { SubMenuProps } from "antd";
import { MessageType } from "../Chat/Chat";
import { StatusType } from "../Redux/Chat_reducer";

//Declaring subscriber function type
type MessageRecievedSubscriberType = (messages:MessageType[])=>void;
type status_changed_subscriber_type = (status: StatusType) => void;
//Array of subscriber functions
let subscribers = {
    "message_recieved" : [] as MessageRecievedSubscriberType[],
    "status_changed" : [] as status_changed_subscriber_type[]
}
let ws : WebSocket;

type event_names = 'message_recieved' | 'status_changed';
//Close event handler function
const close_handler = ()=>{
    console.log("WebSocket was close");
    setTimeout(create_chanel,3000)
}
//WebSocket message event handler
const message_handler = (e:MessageEvent)=>{
    const new_mesages = JSON.parse(e.data);
    //Iterate on array of subscribers functions and push new_mesages into them
    subscribers['message_recieved'].forEach((sub)=>{
        sub(new_mesages);
        console.log(new_mesages)
    })
}
//Creating the webSocket chanel
const notify_subscribers = (status:StatusType) => {
    subscribers["status_changed"].forEach(s => s(status));
}
const open_handler = ()=>{
    notify_subscribers("ready")
}

const clean_up = function (){
    ws.removeEventListener("open",open_handler);
    ws.removeEventListener("message",message_handler);
    ws.removeEventListener("close",close_handler);
    subscribers['message_recieved'] = [];
    subscribers['status_changed'] = [];
    return subscribers;
}
const create_chanel = function (){
    ws?.removeEventListener("open",open_handler);
    ws?.removeEventListener("message",message_handler);
    ws?.removeEventListener("close",close_handler);
    ws?.close();
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    notify_subscribers("pending");
    
    ws.addEventListener("close",close_handler);
    ws.addEventListener("message",message_handler)
    ws.addEventListener("open",open_handler)
}
create_chanel();

//API instanse
export const chat_api = {
    start(){
        create_chanel();
    },
    stop(){
        clean_up();
        ws.close();

    },
    subscribe (event_name:event_names, callback:MessageRecievedSubscriberType | status_changed_subscriber_type ){
        // @ts-ignore
        subscribers[event_name]?.push(callback)
        console.log("subscribe sdfdf")
        return ()=> {
            // @ts-ignore
            subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(event_name:event_names,callback:MessageRecievedSubscriberType | status_changed_subscriber_type){
        // @ts-ignore
        subscribers[event_name].filter(s => s !== callback)
        return (()=>{
            // @ts-ignore
            subscribers[event_name] = subscribers[event_name].filter(s => s !== callback)
        })
    },
    send (message:string){
        ws.send(message);
    }
}