//Imorting REACT,AXIOS and REDUX
import React from "react";
import { connect } from "react-redux";
//Action creators import
import { set_usersAC } from "../Redux/users_reducers";
import { set_current_pageAC } from "../Redux/users_reducers";
import { set_users_countAC } from "../Redux/users_reducers";
import { set_is_fetchAC } from "../Redux/users_reducers";
import { Get_async_users } from "../AsyncAcion/async_action";
import { Follow_async } from "../AsyncAcion/async_action";
import { Unfollow_async } from "../AsyncAcion/async_action";
//Importing selectors:
import { Get_users_reselect } from "../Redux/users-selectors";
import { get_users } from "../Redux/users-selectors";
import { get_paige_size } from "../Redux/users-selectors";
import { get_current_paige } from "../Redux/users-selectors";
import { get_is_fetch } from "../Redux/users-selectors";
import { get_users_count } from "../Redux/users-selectors";
import { get_follow_fetch } from "../Redux/users-selectors";
//Importing the Thunk creators
 import { get_users_thunkCreator } from "../Redux/users_reducers";
//Importing USers presentation component
import { Users } from "./Users";
import preloader from "../../img/preloader.svg"
import styles from "../../Styles/Users.module.css"
//importing the DataAcsessLayer Object
import {usersAPI} from "../API/api";

// {
// const users_api = function(props)
// {
//     return (
//         <div>
//             {props.is_fetch === true ? <img src={preloader} className={styles.preloader}></img>:
//             <Users props={...props}/>}
//         </div>
//     )
// }
// let MapStateToProps = (state)=> {
//     return {
//         users: Get_users_reselect(state),
//         paige_size: get_paige_size(state),
//         total_users_count: get_users_count(state),
//         current_paige: get_current_paige(state),
//         is_fetch: get_is_fetch(state),
//         is_follow_fetch : get_follow_fetch(state)
//     }
// };
// let MapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(Follow_async(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(Unfollow_async(userID))
//         },
//         set_users: (users) => {
//             dispatch(set_usersAC(users))
//         },
//         set_current_page: (paige) => {
//             dispatch(set_current_pageAC(paige))
//         },
//         set_users_count: (count) => {
//             dispatch(set_users_countAC(count))
//         },
//         is_fetch: (is_fetch) => {
//             dispatch(set_is_fetchAC(is_fetch))
//         },
//         follow_fetch: (is_follow_fetch) => {
//             dispatch((is_follow_fetch))
//         },
//         get_users: (current_paige,paige_size) => {
//             dispatch(Get_async_users(current_paige,paige_size))
//         }
//     }
// }
// export const Users_container_2 = connect(MapStateToProps,MapDispatchToProps)(users_api);
// }



//Declaring Users API container component
//To add types to class component use this syntax "class My_class ectends React.Compoinent <PropsType,StateType>"
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
        users: Get_users_reselect(state),
        paige_size: get_paige_size(state),
        total_users_count: get_users_count(state),
        current_paige: get_current_paige(state),
        is_fetch: get_is_fetch(state),
        is_follow_fetch : get_follow_fetch(state)
        
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