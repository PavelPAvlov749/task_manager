import { Global_state_type, InferActionType } from "./redux_store";
import { MessageType } from "../Chat/Chat";
import { ThunkAction } from "redux-thunk";
import { chat_api } from "../API/chat_api";
import { Dispatch } from "redux";
import { message } from "antd";

const MESSAGES_RECIEVED = "MESSAGES_RECIEVED";
const SEND_MESSAGE = "SEND_MESSAGE";

const initial_state = {
    messages: [] as MessageType[]
};

type initiaal_state_type = typeof initial_state;

type action_type = InferActionType<typeof actions>
type ThunkType = ThunkAction<void, Global_state_type, unknown, action_type>

export const chat_reducer = (state = initial_state, action: action_type) => {
    switch (action.type) {
        case MESSAGES_RECIEVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default :
            return state
    }
};

export const actions = {
    messages_revieved: (messages: MessageType[]) => ({
        type: "MESSAGES_RECIEVED",
        payload: { messages }
    } as const)
};
let new_message_handler: ((messages: MessageType[]) => void) | null = null;

const new_mesage_handler_creator = (dispatch: Dispatch) => {
    if (new_message_handler !== null) {
        return new_message_handler;
    } else {
        new_message_handler = (messages: MessageType[]) => {
            dispatch(actions.messages_revieved(messages))
        };
        return new_message_handler;
    }
};
export const listen_messages_start = (): ThunkType =>
    async (dispatch: Dispatch) => {
        chat_api.start();
        chat_api.subscribe(new_mesage_handler_creator(dispatch));
    };
export const messages_listen_stop = (): ThunkType =>
    async (dispatch) => {
        chat_api.stop();
        chat_api.unsubscribe(new_mesage_handler_creator(dispatch));
    };
export const send_message = (message:string):ThunkType => async (dispatch) =>{
    chat_api.send(message)
}