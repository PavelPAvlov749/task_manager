import React from "react";
import styles from "../../Styles/Users.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import {User_type} from "../Redux/users_reducers";



//Declarong componentr for serching users with redux formik lib.
type users_search_props_type = {
    
}

type users_serach_type = {
    term : string
}
const Users_search_form :React.FC<users_search_props_type> = (props) => {
    const set_submit = (values:users_search_props_type, { setSubmitting }:{setSubmitting : (isSubmitting:boolean)=> void}) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }
    return (
        <div className={styles.users_search_container}>
            <h3>Search users : </h3>
            <Formik className={styles.formik} initialValues={{ term: '', }} onSubmit={set_submit}>
                <Form>
                    <Field type="text" name="term"></Field>
                    <button type="submit" className={styles.submit_button}>Search</button>
                </Form>
            </Formik>
        </div>
    )
};

type Props_type = {
    total_users_count: number,
    paige_size: number,
    current_paige: number,
    follow_fetch: (value:boolean)=>void,
    is_follow_fetch:  Array<number>,
    follow : (_id:number)=> void,
    unfollow : (_id:number)=>void,
    on_page_change : (e:any)=>void,
    users : Array<User_type>,
}
//Main users container Component ,takin parametrs users<Array>,
export const Users :React.FC<Props_type>= (props) => {

    //Setting the number of users pages

    let paiges_count = Math.ceil(props.total_users_count / props.paige_size);
    let paiges = [];
    for (let i = 1; i <= paiges_count; ++i) {
        paiges.push(i);
    }
    let portion_size = 5;
    let portion_count = Math.ceil(paiges_count / portion_size);
    let [portion_number, set_portion_number] = useState(1);
    let left_portion_page_number = (portion_number - 1) * portion_size + 1;
    let right_portion_page_number = portion_number * portion_size;
    console.log(props.current_paige);
    console.log(right_portion_page_number);
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
                                {"NAME: " + el.name}<br />
                                {"STATUS: " + el.status}<br />
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

}