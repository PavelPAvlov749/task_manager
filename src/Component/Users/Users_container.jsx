//Imorting REACT,AXIOS and REDUX
import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
//Action creators import
import { followAC } from "../Redux/users_reducers";
import { unfollowAC } from "../Redux/users_reducers";
import { set_usersAC } from "../Redux/users_reducers";
import { set_current_pageAC } from "../Redux/users_reducers";
import { set_users_countAC } from "../Redux/users_reducers";
import { set_is_fetchAC } from "../Redux/users_reducers";
import { follow_fetchAC } from "../Redux/users_reducers";
import { Get_async_users } from "../AsyncAcion/async_action";
import { Follow_async } from "../AsyncAcion/async_action";
import { Unfollow_async } from "../AsyncAcion/async_action";
//Importing the Thunk creators
// import { get_users_thunkCreator } from "../Redux/users_reducers";
//Importing USers presentation component
import { Users } from "./Users";
import preloader from "../../img/preloader.svg"
import styles from "../../Styles/Users.module.css"
//importing the DataAcsessLayer Object
import {usersAPI} from "../API/api.js";



//Declaring Users API container component
class UsersAPI extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.get_users(this.props.current_paige,this.props.paige_size);

    }
    on_page_change = (page_number) => {
        this.props.is_fetch(true)
        this.props.set_current_page(page_number);
        usersAPI.get_users(this.props.current_paige,this.props.paige_size).then((data) => {
                this.props.is_fetch(false);
                this.props.set_users(data.items);
            })

    }

    render() {
        return (<>
            {this.props.is_fetch === true ? <img src={preloader} className={styles.preloader}></img> :
                <Users total_users_count={this.props.total_users_count}
                    paige_size={this.props.paige_size}
                    current_paige={this.props.current_paige}
                    on_page_change={this.on_page_change} users={this.props.users}
                    follow_fetch={this.props.follow_fetch}
                    is_follow_fetch={this.props.is_follow_fetch}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow} />
                    
            }
        </>)
    }
}


//Users upper level container

let mapStateToProps = (state) => {
    return {
        users: state.users_paige.users,
        paige_size: state.users_paige.paige_size,
        total_users_count: state.users_paige.total_users_count,
        current_paige: state.users_paige.current_paige,
        is_fetch: state.users_paige.is_fetch,
        is_follow_fetch : state.users_paige.is_follow_fetch
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(Follow_async(userID))
        },
        unfollow: (userID) => {
            dispatch(Unfollow_async(userID))
        },
        set_users: (users) => {
            dispatch(set_usersAC(users))
        },
        set_current_page: (paige) => {
            dispatch(set_current_pageAC(paige))
        },
        set_users_count: (count) => {
            dispatch(set_users_countAC(count))
        },
        is_fetch: (is_fetch) => {
            dispatch(set_is_fetchAC(is_fetch))
        },
        follow_fetch: (is_follow_fetch) => {
            dispatch((is_follow_fetch))
        },
        get_users: (current_paige,paige_size) => {
            dispatch(Get_async_users(current_paige,paige_size))
        }
    }
}

export const Users_container = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);