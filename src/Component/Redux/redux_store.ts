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
import {compose} from "redux";



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
    user_task:task_reducer,
    term: users_reducer
});
type PropertieTypes<T> = T extends {[key:string]:infer U} ? U : never;
export type InferActionType<T extends {[key:string]: (...args:any)=> any}> = ReturnType<PropertieTypes<T>>;

console.log(reducers);
//TS operator typeof in this case should return the type of reducer recived from combineReducers() function 
//combineReducers return new global reducer <function>
//Getting the global reducer type
type Root_reducer_type = typeof reducers;

//because reducer function returns state<Obj> we can recive state type from TS operator ReturnType
//Return type will return return statements of object that we transferred to ReturnType
//In this case we will get the globas state type
//Getting the global state type
export type Global_state_type = ReturnType<Root_reducer_type>;
//Also wen create an object that will have the same structure as global state
//Example :
let state : Global_state_type;

//If we want to TS to ignore some pieces of code ew can add this string before ignored code "// @ts-ignore"
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

//export let  store = createStore(reducers,applyMiddleware(thunk));

// @ts-ignore
window.store= store;



