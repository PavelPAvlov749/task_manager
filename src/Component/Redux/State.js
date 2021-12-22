import React from "react";
import { dialogs_reducer } from "./Reducers";
import { text_area_reducer } from "./Reducers";
import { add_user } from "./Reducers";



export let store = {
    state:{
        users:[
            {
                name:"Pavel",
                surname:"Pavlov",
                id:1,
            },
            {
                name:"Adolf",
                surname:"Hitler",
                id:"1488"
            },
        ]
    },
    messages : [],
    newMessage: "Type text",
    getState(){
        return this.state;
    },
    dispath(action){
        this.messages = dialogs_reducer(this.messages,action);
        this.newMessage = text_area_reducer(this.newMessage,action);
        this.users = add_user(this.users,action);
        
        this.callSubscriber(this)
    },
    callSubscriber(){
        console.log("text")
    },
    subscribe(observer)
    {
        this.callSubscriber = observer;
    }

}


