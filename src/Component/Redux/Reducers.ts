import { type } from "os";

const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE = "NEW-MESSAGE";
const ADD_USER = "ADD-USER";

export type User_type = {
    name : string,
    surname : string,
    id: number
}



let initial_state = {
    messages: ["dfkgdpfkg","slkdjgswdjg"] as Array<String>,
    newMessage:"Type text" as String,
    users: [
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
        {
            name:"Joseph",
            surname:"Gebels",
            id:1,
        },
        {
            name:"Fridrich",
            surname:"Gimler",
            id:"1488"
        },
        {
            name:"German",
            surname:"Gofmann",
            id:1,
        },
        {
            name:"Alina",
            surname:"Bauer",
            id:"1488"
        },
        {
            name:"John",
            surname:"Davis",
            id:1,
        },
        {
            name:"Leonardo",
            surname:"Da-vinci",
            id:"1488"
        },  
    ] as Array<User_type>
};

export const messages_reducer = (state:any,action:any)=>
{
    switch(action.type){
        case "ADD-MESSAGE":
            state.push(action.text)
            return state;

        case "NEW-MESSAGE":
            state = action.text;
            return state;

        case "ADD-USER":
            state.push(action.user);
            return state;

        default : 
            return state        
    }
}


export const dialogs_reducer = (state = initial_state.messages,action:any)=>{
    if(action.type === "ADD-MESSAGE")
    {
        
        let stateCopy = [...state];
        stateCopy.push(action.text);
        return stateCopy;
    }
    else{
        return state;
    }
}

export const text_area_reducer = (state = initial_state.newMessage,action:any)=>{
    if(action.type === "NEW-MESSAGE")
    {
        state = action.text;
    }
    return state;
}

export const add_user = (state = initial_state,action:any) =>{
    if(action.type === "ADD-USER")
    {
      
        let stateCopy = [...state.users];
        stateCopy.push(action.user);
        return stateCopy;
    }
    return state;
}
export const set_users = (state = initial_state,action:any) =>{

    return state;
}

//Defining the Action creatots //////////////////////////////

export let new_message_body = (_type:any,_text:string) =>
{
    return (
        {
            type:_type,
            text:_text
        }
    )
}
export let new_message_action = (_type:any,_text:string) =>
{
    return(
        {
            type:_type,
            text:_text
        }
    )
}
export let Add_User_action_creator = function (_type:any,_text:string)
{
    return (
        {
            type:_type,
            text:_text
        }
    )
}