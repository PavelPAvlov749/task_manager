import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import {set_user_authAC} from "./Redux/auth_reducer";
import {set_is_fetchAC} from "./Redux/users_reducers";

class Header_container extends React.Component
{
    componentDidMount(){
        this.props.set_is_fetchAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
        .then((response) => {
            window.auth = response;
            window.my_auth = this.props.auth
            this.props.set_user_authAC(response.data.resultCode)
            console.log("response data :" + response.data.resultCode)
            this.props.set_is_fetchAC(false);
        })
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
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        set_user_authAC: (auth) => {
            dispatch(set_user_authAC(auth));
        },
        set_is_fetchAC: (is_fetch)=> {
            dispatch(set_is_fetchAC(is_fetch))
        }
    }
}
export const Header_heigh_container = connect(MapStateToProps,mapDispatchToProps)(Header_container);