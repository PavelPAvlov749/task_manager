const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE = "NEW-MESSAGE";
const ADD_USER = "ADD-USER";


let initial_state = {
    messages: [],
    newMessage:"Type text",
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
    ]
};

export const messages_reducer = (state,action)=>
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


export const dialogs_reducer = (state = initial_state.messages,action)=>{
    if(action.type === "ADD-MESSAGE")
    {
        
        let stateCopy = [...state];
        stateCopy.push(action.text);
        console.log("Dialogs reducer");
        return stateCopy;
    }
    else{
        return state;
    }
}

export const text_area_reducer = (state = initial_state.newMessage,action)=>{
    if(action.type === "NEW-MESSAGE")
    {
        state = action.text;
        console.log("I am reducer text area");
    }
    return state;
}

export const add_user = (state = initial_state,action) =>{
    if(action.type === "ADD-USER")
    {
      
        let stateCopy = [...state.users];
        stateCopy.push(action.user);
        return stateCopy;
    }
    return state;
}
export const set_users = (state = initial_state,action) =>{

    return state;
}

//Defining the Action creatots //////////////////////////////

export let new_message_body = (_type,_text) =>
{
    return (
        {
            type:_type,
            text:_text
        }
    )
}
export let new_message_action = (_type,_text) =>
{
    return(
        {
            type:_type,
            text:_text
        }
    )
}
export let Add_User_action_creator = function (_type,_text)
{
    return (
        {
            type:_type,
            text:_text
        }
    )
}