import React from "react";



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
    newMessage: "",
    getState(){
        return this.state;
    },
    dispath(action){
        if(action.type === "ADD-USER")
        {
            this.state.users.push(
                {
                    name:action.text,
                    surname:action.text
                }
            )
        }
        else if(action.type === "ADD-MESSAGE")
        {
            this.messages.push(action.text);
        }
        else if (action.type === "NEW-MESSAGE")
        {
            this.newMessage = action.text;
        }
        this.callSubscriber(this)
    },

    add_user(_name,_surname){
        this.state.users.unshift(
            {
                name:_name,
                surname:_surname
            }
        );
        this.callSubscriber(this);

    },
    callSubscriber(){
        console.log("text")
    },
    subscribe(observer)
    {
        this.callSubscriber = observer;
    }

}

