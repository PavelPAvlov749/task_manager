import { Global_state_type, InferActionType } from "./redux_store";
import { MessageType } from "../Chat/Chat";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react";
import { chat_api } from "../API/chat_api";

const MESSAGES_RECIEVED = "MESSAGES_RECIEVED";

const initial_state = {
    messages : [] as MessageType[]
}

type initiaal_state_type = typeof initial_state;

type action_type = InferActionType<typeof actions>
type ThunkType = ThunkAction<void,Global_state_type,unknown,action_type>
const chat_reducer = (state = initial_state,action: action_type) => {
    switch(action.type){
        case  MESSAGES_RECIEVED : 
            return {
                ...state,
                messages : [...state.messages,...action.payload.messages]
            }
    }
}

export const actions = {
    messages_revieved : (messages:MessageType[])=>({
        type : "MESSAGES_RECIEVED",
        payload : {messages}
    }as const)
}

export const listen_messages_start = ():ThunkType => async (dispatch)=>{
    chat_api.subscribe((messages)=>{
        dispatch(actions.messages_revieved(messages));
    })
};
export const messages_listen_stop = ():ThunkType => async (dispatch)=> {
    chat_api.unsubscribe(()=>{

    })
}