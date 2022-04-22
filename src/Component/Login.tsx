import React from "react";
import styles from "../Styles/Login.module.css";
import { Field, reduxForm ,InjectedFormProps} from "redux-form";
import { usersAPI } from "./API/api";
import { connect } from "react-redux";
import { Login_thunk } from "./AsyncAcion/async_action";
import { Auth_redirect } from "./Dialogs/New_Dialogs";
import { With_auth_redirrect } from "./AsyncAcion/hoc/Auth_redirect";
import { Navigate } from "react-router-dom";
import { Global_state_type } from "./Redux/redux_store";
import { cp } from "fs";
import { field_validator_type } from "../Validator/Vlidator";
  

type login_form_values_type = {
    Login: string,
    Password: string,
}
type Login_form_own_props = {
    captcha_url : string,
    onSubmit: any
}

const create_field = (
    placeholder:string,
    name :string,
    validators:Array<field_validator_type>,
    component: string | React.Component | React.FC,
    props : {},
    text : string
)=>{
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} text={text} props={props}></Field>
        </div>
    )
}


const Login_form : React.FC<InjectedFormProps<login_form_values_type,Login_form_own_props> & Login_form_own_props> = ({handleSubmit , error , captcha_url}) => {
    return (
        <form onSubmit={handleSubmit}>
            <span>{}</span>
            <div>
                <Field type="text" placeholder="Login" name='Login' component="input" className={error && styles.login_input_has_error} />
            </div>
            <div>
                <Field type="text" placeholder="password" name="Password" component="input" className={error&& styles.login_input_has_error} />
            </div>

            <div>
                <span>Remember me</span><Field type="checkbox" component="input" name="Remember_me" id="checkbox" className={styles.checkbox} />
            </div>
            <button>Login</button>
            {error && <p className={styles.common_error}>{error}</p>}
        </form>
    )
}
const Login_redux_form = reduxForm<login_form_values_type,Login_form_own_props>({ form: "login" })(Login_form)

type MapDispatchPropsType = {
    login_th : (formData:login_form_values_type) => void
}
type MapStatePropsType = {
    isAuth : boolean,
    captcha_url : string
}


export const Login : React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    let onSubmit = (formData :login_form_values_type & Login_form_own_props) => {
        props.login_th(formData);
    }
    if (props.isAuth === false) {
        return (
            <div className={styles.login}>
                <h1>Login</h1>
                <Login_redux_form onSubmit={onSubmit} captcha_url={props.captcha_url} />
            </div>)
    } else {
        console.log(props.isAuth)
        return <Navigate to="/profile_me" />

    }

}

let MapStateToProps = (state : Global_state_type):MapStatePropsType => {
    return {
        isAuth: state.auth.auth,
        captcha_url : "lsdhfsjdf"
    }
}
let MapDispatchToProps = (dispatch:any) => {
    return {
        login_th: (formData:any) => {
            dispatch(Login_thunk(formData))
        }
    }
}

export const Login_container = connect(MapStateToProps, MapDispatchToProps)(Login)