import React from "react";
import styles from "../../Styles/Users.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import {User_type} from "../Redux/users_reducers";
import {Filter_type} from "../Redux/users_reducers";
import { useDispatch, useSelector } from "react-redux";
//Importing slectors
import { get_users_count } from "../Redux/users-selectors";
import {get_paige_size} from "../Redux/users-selectors";



//Declarong componentr for serching users with redux formik lib.
type users_search_props_type = {
    on_filter_changed : (filter:Filter_type)=> void
}

type users_serach_type = {
    term : string
}
type Form_type = {
    term : string,
    friend: "true" | "fasle" | "null"
}
//Users search form field by Formik
const Users_search_form :React.FC<users_search_props_type> = React.memo((props) => {

    //Formik uses string by default values of select,so we convert Formik values type to boolean or null,
    //Then puting them into on_filter_changed function
    const set_submit = (values:Form_type, { setSubmitting }:{setSubmitting : (isSubmitting:boolean)=> void}) => {
        const filter : Filter_type = {
            term : values.term,
            friend : values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        //Puttong data from form value to on_fiter_chanced function from Users_Container component
        props.on_filter_changed(filter)
    }
    return (
        <div className={styles.users_search_container}>
            <h3>Search users : </h3>
            <Formik className={styles.formik} initialValues={{ term: '',friend:"null"}} onSubmit={set_submit}>
                <Form>
                    <Field type="text" name="term"></Field>
                    <Field as="select" name="friend">
                        <option value="null">All users</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" className={styles.submit_button}>Search</button>
                </Form>
            </Formik>
        </div>
    )
});

type Props_type = {
    current_paige: number,
    follow_fetch: (value:boolean)=>void,
    is_follow_fetch:  Array<number>,
    follow : (_id:number)=> void,
    unfollow : (_id:number)=>void,
    on_page_change : (e:any)=>void,
    users : Array<User_type>,
    on_filter_changed : (filter:Filter_type)=> void,
    filter: Filter_type
}
//Main users container Component ,takin parametrs users<Array>,
export const Users :React.FC<Props_type>= React.memo((props) => {

    //useSelector hook will recive selector function that returns any value frim state in this case will return total_users_count
    const total_users_count = useSelector(get_users_count);
    const page_size = useSelector(get_paige_size);
    //Setting the number of users pages
    let paiges_count = Math.ceil(total_users_count / page_size);
    let paiges = [];
    for (let i = 1; i <= paiges_count; ++i) {
        paiges.push(i);
    }
    let portion_size = 5;
    let portion_count = Math.ceil(paiges_count / portion_size);
    let [portion_number, set_portion_number] = useState(1);
    let left_portion_page_number = (portion_number - 1) * portion_size + 1;
    let right_portion_page_number = portion_number * portion_size;
    return (

        <div className={styles.users_container}>
            <Users_search_form {...props} />
            <div className={styles.paginator_container}>
                <div className={styles.paginator}>
                    <button className={styles.paginator_btn} disabled={portion_number >= 1? true : false}
                        onClick={() => { set_portion_number(portion_number - 1) }}>Back</button>


                    {paiges.filter((el) => el >= left_portion_page_number && el <= right_portion_page_number).map((el) => {
                        return (
                            <span className={props.current_paige === el ? styles.selected_paige : styles.paiges}
                                onClick={(e) => { props.on_page_change(el) }}>{el}</span>
                        )
                    })}

                    <button id={styles.paginator_btn}
                        onClick={() => { set_portion_number(portion_number + 1) }}>Next</button>
                </div>
            </div>

            {props.users.map((el:any) => {
                return (
                    <div className={styles.users_list}>

                        <section className={styles.users}>
                            <NavLink to={"/profile/" + el.id}>
                                <img src={el.photos.small != null ? el.photos.small : "https://avatars.githubusercontent.com/u/91758623?s=40&v=4"} alt="https://avatars.githubusercontent.com/u/91758623?s=40&v=4" />
                            </NavLink>
                            <div className={styles.user_data}>
                                {el.name}<br />
                                {"STATUS: " + el.status ? el.status:""}<br />
                            </div>

                            {/* FOLLOW UNFOLLOW BUTTONS TOOGLE */}

                            {el.followed ? <button type="button"
                                //DISABLING BUTTOM FUNCTION
                                disabled={props.is_follow_fetch.some((id:number) => id === el.id)}
                                onClick={() => {
                                    // props.follow_fetch(true, el.id)

                                    //Server Requsest
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "eb25692d-120e-4f50-87e4-23bbda95a3fe"
                                        }
                                    }).then((response) => {
                                        if (response.status === 200) {

                                            props.unfollow(el.id)
                                            // props.follow_fetch(false, el.id)
                                        }
                                    })
                                }}>Unfollow</button> : <button disabled={props.is_follow_fetch.some((id:number) => id === el.id)} type="button"
                                    onClick={() => {
                                        // props.follow_fetch(true, el.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "eb25692d-120e-4f50-87e4-23bbda95a3fe"
                                            }
                                        }).then((response) => {
                                            if (response.status === 200) {

                                                props.follow(el.id)
                                                // props.follow_fetch(false, el.id);
                                            }
                                        })
                                    }}>Follow</button>}
                        </section>
                    </div>
                )
            })}
        </div>
    )

})