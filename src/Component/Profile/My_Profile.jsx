//Importing React components :
import { Profile_status_with_hooks } from "./Profile_status/Profile_status";
//Importing ReactLib
import React from "react";
import { Navigate } from "react-router-dom";
//importing redux
import { connect } from "react-redux";
//Importing action creators and thunks
import { Set_users_profileAC } from "../Redux/Profile_reducer";
import { update_user_status } from "../AsyncAcion/async_action";
import { get_users_status } from "../AsyncAcion/async_action";
import {Set_photoAC} from "../Redux/Profile_reducer";
import {update_photo_thunk} from "../AsyncAcion/async_action"
//Importing styles
import styles from "../../Styles/my_profile.module.css";
import { usersAPI } from "../API/api";
//Another imports:
import axios from "axios";


//If avatar photo in unset use this photo instead
const PHOTO_AVATAR_UNSET = "https://sun9-27.userapi.com/impg/_2g-5c4XtZP0olYTnhZtULcmGaHOsTRblWkgXw/-hzr7We1P_I.jpg?size=604x604&quality=96&sign=02e418d5ed10b576fc20461f6bccfbfc&type=album";


//Short description,show when state.description_hide === true
const Short_description = function (props) {
    return (
        <div>
            <ul className={styles.short_description}>
                <li>
                    <span>
                        <h4>Self information:</h4> Altermann
                    </span>
                </li>
            </ul>
        </div>
    )
}
//Full description show when state.description_hide === false
const Full_description = function (props) {
    return (
        <div>
            <ul className={styles.full_description}>
                <li>
                    <span>
                        <h4>Self information:</h4> Altermann
                    </span>
                </li>
                <li>
                    <span>
                        <h4>Looking for a job:</h4>
                    </span>
                </li>
                <li>
                    <span>
                        <h4>Last Tasks:</h4> This fucking Profile component
                    </span>
                </li>
                <li>
                    <span>
                        <h4>Country:</h4> Russia
                    </span>
                </li>
                <li>
                    <span>
                        <h4>City:</h4> Omsk
                    </span>
                </li>
                <li>
                    <span>
                        <h4>Age:</h4> 28
                    </span>
                </li>
            </ul>
        </div>
    )
}
//Declarin Profile Component
class My_profile extends React.Component {
    state = {
        //Show/hide description
        description_hide: 1
    }
    
    
    getUsers()
    {
        const instance = axios.create(
            {
                withCredentials:false,
                baseURL: "localhost:5000",
            }
        )
        instance.get("/users").then((response)=>{
            console.log(response)
        })
    }
    onPhotoUpdate (e){
    
    this.props.set_photo(e.target.files[0])
    }
    render() {
        console.error(this.state.description_hide)
        return (

            <section className={styles.me_container}>
                <div className={styles.avatar}>
                    <img src={this.props.profile.profile.photos.large 
                    ? this.props.profile.profile.photos.large : PHOTO_AVATAR_UNSET}
                        alt="" />
                    <input type="file" onClick={this.onPhotoUpdate.bind(this)} />
                </div>
                <div className={styles.control_list}>



                </div>
                <div className={styles.info}>
                    <h2>{this.props.profile.profile.fullName}</h2>
                    {/* <Profile_status status={this.props.status} className={styles.status} update_status={this.props.update_status} /> */}
                    <Profile_status_with_hooks status={this.props.status} className={styles.status} update_status={this.props.update_status}/>
                </div>

                <section className={styles.description}>
                    <h2>Description :</h2>
                    {this.state.description_hide ? 
                    <button onClick={this.show_description} type="button">Show</button> 
                    :<button onClick={this.hide_description} type="button">Hide</button>}
                    <hr />
                    {this.state.description_hide ? <Short_description /> :
                        <Full_description />}
                    <button type="button" 
                    onClick={this.getUsers}>Edit profile</button>
                </section>
            </section>
        )
    }
    hide_description = () => {
        this.setState(
            {
                description_hide: true
            }
        )
    }
    show_description = () => {
        this.setState({
            description_hide: false
        })
    }
}

//Container Component for Profile Class Component
export const My_profile_container_1 = function (props) {
    usersAPI.get_profile(props.me).then((data) => {
        props.set_profile(data)
    })
    props.get_users_status(props.me)
    if (props.isAuth === true) {
        return (
            <section>
                <My_profile {...props} />
                
            </section>
        )
    }else {
        return <Navigate to="/login"/>
    }
};
const MapStateToProps = (state) => {
    return {
        me: state.current_user.current_user,
        profile: state.profile,
        status: state.status.status,
        isAuth: state.auth.auth

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        set_profile: (_id) => {
            dispatch(Set_users_profileAC(_id))
        },
        update_status: (_text) => {
            dispatch(update_user_status(_text))
        },
        get_users_status: (_id) => {
            dispatch(get_users_status(_id))
        },
        set_photo :(photo)=>{
            dispatch(update_photo_thunk(photo))
        }
    }
}

export const My_profile_container = connect(MapStateToProps, mapDispatchToProps)(My_profile_container_1);