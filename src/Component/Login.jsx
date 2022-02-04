import React from "react";
import styles from "../Styles/Login.module.css";
import { Field, reduxForm } from "redux-form";
import { usersAPI } from "./API/api";
import { connect } from "react-redux";
import { Login_thunk } from "./AsyncAcion/async_action";
import { Auth_redirect } from "./Dialogs/New_Dialogs";
import { With_auth_redirrect } from "./AsyncAcion/hoc/Auth_redirect";
import { Navigate } from "react-router-dom";


const Login_form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder="Login" name='Login' component="input" />
            </div>
            <div>
                <Field type="text" placeholder="password" name="Password" component="input" />
            </div>

            <div>
                <span>Remember me</span><Field type="checkbox" component="input" name="Remember_me" id="checkbox" className={styles.checkbox} />
            </div>
            <button>Login</button>
        </form>
    )
}
const Login_redux_form = reduxForm({ form: "login" })(Login_form)

export const Login = (props) =>
{
    let onSubmit = (formData) => 
    {
        props.login_th(formData);
    }
    console.log(props.isAuth)
    if(props.isAuth === false){
        console.log(props.isAuth)
        return (
            <div className={styles.login}>
                <h1>Login</h1>
                <Login_redux_form onSubmit={onSubmit} />
            </div>)
    }else {
        console.log(props.isAuth)
        return <Navigate to="/profile_me"/>
        
    }
        
}

let MapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        login_th: (formData) => {
            dispatch(Login_thunk(formData))
        }
    }
}

export const Login_container = connect(MapStateToProps, MapDispatchToProps)(Login)