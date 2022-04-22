import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import {set_user_authAC} from "./Redux/auth_reducer";
import {set_is_fetchAC} from "./Redux/users_reducers";
import { set_current_user } from "./AsyncAcion/async_action";
import { logout } from "./Redux/auth_reducer";
import {actions} from "../Component/Redux/users_reducers";

class Header_container extends React.Component
{
    componentDidMount(){

    }
    render()
    {
        return(
            <Header {...this.props}/>
        )
        
    }
}

let MapStateToProps = (state) =>
{
    return {
        auth: state.auth,
        current_user: state.current_user.me
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        set_user_authAC: (auth) => {
            dispatch(actions.set_user_authAC(auth));
        },
        set_is_fetchAC: (is_fetch)=> {
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