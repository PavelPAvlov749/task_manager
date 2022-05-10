import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { User_type} from "./Redux/users_reducers";
import { set_current_user } from "./AsyncAcion/async_action";
import { logout } from "./Redux/auth_reducer";
import {actions} from "./Redux/users_reducers";
import { auth_actions } from "./Redux/auth_reducer";
import { Global_state_type } from "./Redux/redux_store";
import { Dispatch } from "redux";

type PropsType = {
    auth : boolean,
    current_user : User_type,
    set_user_authAC : (auth:boolean)=> void,
    set_is_fetchAC : (is_fetch:boolean)=>void,
    set_current_user : ()=>void
}

class Header_container extends React.Component<PropsType>
{
    render()
    {
        return(
            <Header {...this.props}/>
        )
        
    }
}

let MapStateToProps = (state:Global_state_type) =>
{
    return {
        auth: state.auth.auth,
        current_user: state.current_user
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        set_user_authAC: (auth:boolean) => {
            dispatch(auth_actions.set_user_authAC(auth));
        },
        set_is_fetchAC: (is_fetch:boolean)=> {
            dispatch(actions.set_is_fetchAC(is_fetch))
        },
        set_current_user:()=>{
            dispatch(set_current_user())
        },
        logout: ()=>{
            dispatch(logout())
        }
    }
}
export const Header_heigh_container = connect(MapStateToProps,mapDispatchToProps)(Header_container);