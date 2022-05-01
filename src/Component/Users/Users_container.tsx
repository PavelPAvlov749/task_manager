//Imorting REACT,AXIOS and REDUX
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//Action creators import
import { actions } from "../Redux/users_reducers";
import { Get_async_users } from "../AsyncAcion/async_action";
import { Follow_async } from "../AsyncAcion/async_action";
import { Unfollow_async } from "../AsyncAcion/async_action";
//Importing selectors:
import { get_users_filter, Get_users_reselect } from "../Redux/users-selectors";
import { get_paige_size } from "../Redux/users-selectors";
import { get_current_paige } from "../Redux/users-selectors";
import { get_is_fetch } from "../Redux/users-selectors";
import { get_users_count } from "../Redux/users-selectors";
import { get_follow_fetch } from "../Redux/users-selectors";
//Importing the Thunk creators
//Importing USers presentation component
import { Users } from "./Users";
import preloader from "../../img/preloader.svg"
import styles from "../../Styles/Users.module.css"
//importing the DataAcsessLayer Object
import { ProfileType, usersAPI } from "../API/api";
import { Preloader } from "../Preloader/Preloader";
import { Filter_type } from "../Redux/users_reducers";
import { User_type } from "../Redux/Reducers";
import { Global_state_type } from "../Redux/redux_store";
import { threadId } from "worker_threads";
import { followAC } from "../Redux/dist/users_reducers";
import {useLocation, useNavigate} from "react-router-dom";
import { parse } from "path";
import { isParseTreeNode } from "typescript";
const queryString = require("querystring")

//Declaring Users API container component
//To add types to class component use this syntax "class My_class ectends React.Compoinent <PropsType,StateType>"
type Props_type = {
    follow: (_id: number) => void,
    unfollow: (_id: number) => void,
    set_users: (users: any) => void,
    set_current_page: (paige: any) => void,
    set_users_count: (count: number) => void,
    is_fetch: (is_fetch: boolean) => void,
    follow_fetch: (is_follow_fetch: boolean) => void,
    get_users: (current_paige: number, paige_size: number, filter: Filter_type) => void,
    users: Array<User_type>,
    paige_size: number,
    total_users_count: number,
    current_paige: number,
    is_follow_fetch: Array<number>,
    is_fetch_state: boolean,
    filter: Filter_type
};


export const Users_page: React.FC<Props_type> = (props) => {

    //useDispatch hook using insead functions from MapDispatchToProps
    const dispatch = useDispatch();
    //useSelector insead MapStateToProps
    const users = useSelector(Get_users_reselect);
    const page_size = useSelector(get_paige_size);
    const is_fetch = useSelector(get_is_fetch)
    const filter = useSelector(get_users_filter);
    const current_page = useSelector(get_current_paige);
    const is_follow_fetch = useSelector(get_follow_fetch);
    let history = useNavigate();
    //Set serach query parametrs
    useEffect(()=>{
        history(`?term=${filter.term}&friend=${filter.friend}&page=${current_page}`)
    },[filter,current_page])
    //Request users when Component did mount
    const location = useLocation();
    //Set query parametr in first render
    useEffect(() => {
        const parsed = queryString.parse(location.search.substring(1))
        let actual_page = current_page;
        let actual_filter = filter;
        //Converting query parametrs from string to number in parsed.page
        //And from string to boolean in parsed.friend
        if(!!parsed.page) {actual_page = Number(parsed.page)}
        if(!!parsed.term) {actual_filter = {...actual_filter,term : parsed.term}};
        if(!!parsed.friend) {actual_filter = {...actual_filter,friend : parsed.friend === "null" ? null : parsed.friend === "true" ? true : false }};
        console.log(parsed)
        dispatch(actions.set_filterAC(actual_filter))
        dispatch(Get_async_users(actual_page, page_size, actual_filter))
    }, []);
    //Request users if page was changed
    const on_page_change = function (page_number: number) {
        dispatch(Get_async_users(page_number, page_size, filter))
        dispatch(actions.set_current_pageAC(page_number));
    }
    //Request users if filter parametr has been changed and set page_number parametr to 1
    const on_filter_changed = function (filter: Filter_type) {
        dispatch(dispatch(Get_async_users(1, page_size, filter)));
        dispatch(actions.set_filterAC(filter));
    }
    //Set follow fetch if follow/unfollow button was clicked
    const follow_fetch = (is_follow_fetch:boolean)=>{
        dispatch((is_follow_fetch))
    }
    //Follow unfollow request function 
    const follow = function (userID:number){
        dispatch(followAC(userID))
    }
    const unfollow = function (userID:number){
        dispatch(unfollow(userID))
    }
    //If data is fetch (this.props.is_fetch) now component will return <Preloader> else will return <Users> component
    if (props.is_fetch_state) {
        return (
            <Preloader />
        )
    } else {
        return (<>
            {props.is_fetch_state ? <img src={preloader} className={styles.preloader} alt="#"></img> :
                <Users
                    current_paige={current_page}
                    on_page_change={on_page_change} users={users}
                    follow_fetch={follow_fetch}
                    is_follow_fetch={is_follow_fetch}
                    follow={follow}
                    unfollow={unfollow}
                    on_filter_changed={on_filter_changed}
                    filter={filter} />
            }
        </>)
    }
}

class UsersAPI extends React.Component<Props_type> {
    constructor(props: Props_type) {
        super(props);

    }
    componentDidMount() {
        this.props.is_fetch(true);
        this.props.get_users(this.props.current_paige, this.props.paige_size, this.props.filter);

        this.props.is_fetch(false);

    }
    on_page_change = (page_number: number) => {
        this.props.is_fetch(true)
        this.props.set_current_page(page_number);
        this.props.get_users(this.props.current_paige, this.props.paige_size, this.props.filter)
        actions.set_filterAC(this.props.filter)
        // usersAPI.get_users(this.props.current_paige, this.props.paige_size,filter.term).then((data) => {
        //     this.props.set_users(data.items);
        //     this.props.is_fetch(false);
        // });


    }
    on_filter_changed = (filter: Filter_type) => {
        this.props.is_fetch(true);
        actions.set_filterAC(filter);
        usersAPI.get_users(this.props.current_paige, this.props.paige_size, filter).then((data) => {
            actions.set_users_countAC(data.totalCount);
            this.props.set_users(data.items);
            this.props.is_fetch(false);
        })
    }
    render() {
        //If data is fetch (this.props.is_fetch) now component will return <Preloader> else will return <Users> component
        if (this.props.is_fetch_state) {
            return (
                <Preloader />
            )
        } else {
            return (<>
                {this.props.is_fetch_state ? <img src={preloader} className={styles.preloader} alt="#"></img> :
                    <Users
                        current_paige={this.props.current_paige}
                        on_page_change={this.on_page_change} users={this.props.users}
                        follow_fetch={this.props.follow_fetch}
                        is_follow_fetch={this.props.is_follow_fetch}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        on_filter_changed={this.on_filter_changed}
                        filter={this.props.filter} />
                }
            </>)
        }
    }
};

//Users upper level container

let mapStateToProps = (state: Global_state_type) => {

    return {
        users: Get_users_reselect(state),
        paige_size: get_paige_size(state),
        total_users_count: get_users_count(state),
        current_paige: get_current_paige(state),
        is_fetch_state: get_is_fetch(state),
        is_follow_fetch: get_follow_fetch(state),
        filter: get_users_filter(state)
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(Follow_async(userID))
        },
        unfollow: (userID: number) => {
            dispatch(Unfollow_async(userID))
        },
        set_users: (users: any) => {
            dispatch(actions.set_usersAC(users))
        },
        set_current_page: (paige: number) => {
            dispatch(actions.set_current_pageAC(paige))
        },
        set_users_count: (count: number) => {
            dispatch(actions.set_users_countAC(count))
        },
        is_fetch: (is_fetch: boolean) => {
            dispatch(actions.set_is_fetchAC(is_fetch))
        },
        follow_fetch: (is_follow_fetch: boolean) => {
            dispatch((is_follow_fetch))
        },
        get_users: (current_paige: number, paige_size: number, filter: Filter_type) => {
            dispatch(Get_async_users(current_paige, paige_size, filter))
        }
    }
}

export const Users_container = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);