import React from "react";
import styles from "../../Styles/Dialog_container.module.css";
import { NavLink } from "react-router-dom";
import { With_auth_redirrect } from "../AsyncAcion/hoc/Auth_redirect";
import { Field,reduxForm } from "redux-form";
import { Min_lenght_creator } from "../../Validator/Vlidator";
import { required } from "../../Validator/Vlidator";
import { Textarea } from "../Form/Form";
import {compose} from "redux";

const min_lenght = Min_lenght_creator(1)

const Textarea_form = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" component={Textarea} cols="30" rows="10" validate={[required,min_lenght]}/>
            <button>Send</button>
        </form>
    )
}

const Textarea_redux_form = reduxForm ({form:"message",validate:required})(Textarea_form);

const Dialog_list_item = (props) => {
    return (
        <div className={styles.dialog}>
            <li className={styles.users_list}>


                <img src="https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png" alt="" />

                <a href="#">
                    {props.name + " " + props.surname}
                </a>


            </li>
        </div>
    )
};

class Dialog_list_class_component extends React.PureComponent
{

    componentDidUpdate()
    {
        
        console.log("RENDER UPDATE");
    };
    // shouldComponentUpdate(nextProps,nextState)
    // {
    //     return nextState != this.state || nextProps != this.props;
    // }
    render ()
    {
        console.log("RENDER")
        let users_list = this.props.users.users.map((el) => {
            return (
                <Dialog_list_item name={el.name} surname={el.surname} />
            )
        })
    
        return (
            <section className={styles.container_list}>
                <h2>List of dialogs</h2>
                <ul className={styles.users_list}>
    
                    {users_list}
    
                </ul>
            </section>
        )
    }
};

const Dialogs_list = React.memo(props => {
    let users_list = props.users.users.map((el) => {
        return (
            <Dialog_list_item name={el.name} surname={el.surname} />
        )
    })

    return (
        <section className={styles.container_list}>
            <h2>List of dialogs</h2>
            <ul className={styles.users_list}>

                {users_list}

            </ul>
        </section>
    )
});

const Current_dialog_box = (props) => {
    let text_content = React.createRef();
    let message_list = props.messages.map((el) => {
        return (
            <div>
                Pavel Pavlov :
                <br />
                {el}
            </div>
        )
    })
    const onSubmit = (formData)=>{
        props.sendMessage("ADD-MESSAGE",formData.message)
        formData.message = "";
    }
    return (
        <section className={styles.curent_dialog_container}>
            <div className={styles.text_box}>
                {message_list}
            </div>
            <section className={styles.textarea}>
                <Textarea_redux_form onSubmit={onSubmit} new_message={props.newMessage}/>
            </section>

        </section>
    )
};

const Dialogs_sidebar = (props) => {
    return (
        <section className={styles.dialogs_sidebar}>
            <h2>Settings </h2>
            <ul className={styles.dialogs_settingsList}>
                <li className={styles.settings_item}>
                    <NavLink to={"dialogs/black_list"}>Add to balck list</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/clear"}>Clear messages history</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/notifications"}>Turn off notifications</NavLink>
                </li>
                <li>
                    <NavLink to={"dialogs/add_chat"}>Add user in chat</NavLink>
                </li>
            </ul>
        </section>
    )
};


export const Dialogs_container_new = (props) => {

    return (
        <div className={styles.Dialogs_container}>
            {/* <Dialog_list_class_component users={props.users}/> */}
            <Dialogs_list users={props.users} />
            <Current_dialog_box messages={props.messages} sendMessage={props.sendMessage} />
            <Dialogs_sidebar />
        </div>

    )
};

//Use HOC to redirrect if isAuth != true
//Custom compose HOC
let My_func = function (fn){
    return (Comp)=>{
        return fn(Comp)
    }
}

export let Auth_redirect = My_func(With_auth_redirrect)(Dialogs_container_new);
// export let Auth_redirect = compose(
//     With_auth_redirrect
// )(Dialogs_container_new)

