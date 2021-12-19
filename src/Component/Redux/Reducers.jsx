const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE = "NEW-MESSAGE";
const ADD_USER = "ADD-USER";



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


export const dialogs_reducer = (state,action)=>{
    if(action.type === "ADD-MESSAGE")
    {
        state.push(action.text)
        console.log("Dialogs reducer")
    }
    return state;
}

export const text_area_reducer = (state,action)=>{
    if(action.type === "NEW-MESSAGE")
    {
        state = action.text;
        console.log("I am reducer text area")
    }
    return state;
}

export const add_user = (state,action) =>{
    if(action.type === "ADD-USER")
    {
        state.users.push(action.user);
    }
    return state;
}

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
export let Add_User_action_creator = function (_type,_text){
    return (
        {
            type:_type,
            text:_text
        }
    )
}