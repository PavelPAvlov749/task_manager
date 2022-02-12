import {applyMiddleware,combineReducers, createStore} from "redux";
import { dialogs_reducer} from "./Reducers";
import {text_area_reducer} from "./Reducers";
import {add_user} from "./Reducers";
import users_reducer from "./users_reducers";
import {Profile_reducer} from "./Profile_reducer";
import {Auth_reducer} from "./auth_reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { App_reducer } from "./App-reducer";
import {task_reducer} from "./Task_reducer";



let reducers = combineReducers({
    messages:dialogs_reducer,
    newMessage:text_area_reducer,
    users: add_user,
    users_paige: users_reducer,
    current_page: users_reducer,
    total_users_count:users_reducer,
    is_fetch:users_reducer,
    profile:Profile_reducer,
    auth: Auth_reducer,
    is_follow_fetch: users_reducer,
    current_user:users_reducer,
    status:users_reducer,
    login:Auth_reducer,
    email:Auth_reducer,
    userID:Auth_reducer,
    form:formReducer,
    message:formReducer,
    initialized:App_reducer,
    users_task:task_reducer
});

export let  store = createStore(reducers,applyMiddleware(thunk));
window.store = store;

