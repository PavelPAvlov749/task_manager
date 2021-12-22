import {combineReducers, createStore} from "redux";
import { dialogs_reducer} from "./Reducers";
import {text_area_reducer} from "./Reducers";
import {add_user} from "./Reducers";


let reducers = combineReducers({
    messages:dialogs_reducer,
    newMessage:text_area_reducer,
    users: add_user
});

export let  store = createStore(reducers);