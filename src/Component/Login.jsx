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
                <Field type="text" placeholder="Login" name='Login' component="input" className={props.error && styles.login_input_has_error} />
            </div>
            <div>
                <Field type="text" placeholder="password" name="Password" component="input" className={props.error&& styles.login_input_has_error} />
            </div>

            <div>
                <span>Remember me</span><Field type="checkbox" component="input" name="Remember_me" id="checkbox" className={styles.checkbox} />
            </div>
            <button>Login</button>
            {props.error && <p className={styles.common_error}>{props.error}</p>}
        </form>
    )
}
const Login_redux_form = reduxForm({ form: "login" })(Login_form)

export const Login = (props) => {
    let onSubmit = (formData) => {
        props.login_th(formData);
    }
    if (props.isAuth === false) {
        return (
            <div className={styles.login}>
                <h1>Login</h1>
                <Login_redux_form onSubmit={onSubmit} />
            </div>)
    } else {
        console.log(props.isAuth)
        return <Navigate to="/profile_me" />

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