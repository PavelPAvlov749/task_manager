import React from "react";
import styles from "../../Styles/Users.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios";




export const Users = (props) => {

    //Setting the number of users pages

    let paiges_count = Math.ceil(props.total_users_count / props.paige_size);
    let paiges = [];
    for (let i = 1; i <= paiges_count; ++i) {
        paiges.push(i);
    }

    return (
        <div className={styles.users_container}>
            ACTUAL USERS :
            <hr />
            {paiges.map((el) => {
                return (
                    <span className={props.current_paige === el ? styles.selected_paige : styles.paiges}
                        onClick={(e) => { props.on_page_change(el) }}>{el}</span>
                )
            })}
            <hr />
            {props.users.map((el) => {
                return (
                    <section className={styles.users}>
                        <NavLink to={"/profile/" + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png"} alt="" />
                        </NavLink>
                        <div className={styles.user_data}>
                            {"NAME: " + el.name}<br />
                            {"STATUS: " + el.status}<br />
                        </div>

                        {/* FOLLOW UNFOLLOW BUTTONS TOOGLE */}

                        {el.followed ? <button type="button"
                            //DISABLING BUTTOM FUNCTION
                            disabled={props.is_follow_fetch.some(id => id === el.id)}
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
                            }}>Unfollow</button> : <button disabled={props.is_follow_fetch.some(id => id === el.id)} type="button"
                                onClick={() => {
                                    // props.follow_fetch(true, el.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "eb25692d-120e-4f50-87e4-23bbda95a3fe"
                                        }
                                    }).then((response) => {
                                        window.follow = response;
                                        if (response.status === 200) {

                                            props.follow(el.id)
                                            // props.follow_fetch(false, el.id);
                                        }
                                    })

                                }}>Follow</button>}



                    </section>
                )
            })}
        </div>
    )

}