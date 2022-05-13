import { MessageType } from "../Chat/Chat";

//Declaring subscriber function type
type SubscriberType = (messages:MessageType[])=>void
//Array of subscriber functions
let subscribers : SubscriberType[]= [];
let ws : WebSocket;
//Creating the webSocket chanel
const create_chanel = function (){
    ws?.removeEventListener("close",close_handler);
    ws?.close();
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    ws.addEventListener("close",close_handler)
}
//Close event handler function
const close_handler = ()=>{
    console.log("WebSocket was close");
    setTimeout(create_chanel,3000)
}
//WebSocket message event handler
const message_handler = (e:MessageEvent)=>{
    const new_mesages = JSON.parse(e.data);
    //Iterate on array of subscribers functions and push new_mesages into them
    subscribers.forEach((sub)=>{
        sub(new_mesages);
    })
}
//API instanse
export const chat_api = {
    subscribe (callback:SubscriberType){
        subscribers.push(callback)
        return ()=> {
            subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback:SubscriberType){
        subscribers.filter(s => s !== callback)
    }
}