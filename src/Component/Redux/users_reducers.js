import { usersAPI } from "../API/api";

const FOLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TOOGLE_IS_FETCH = "TOOGLE_IS_FETCH";
const FOLLOW_FETCH = "FOLLOW_FETCH";



let initiaal_state = {
    users:[],
    paige_size : 8,
    total_users_count : 0,
    current_paige: 1,
    is_fetch: false,
    is_follow_fetch: []
}

const users_reducer = (state = initiaal_state,action)=>{
    switch(action.type)
    {
        case FOLLOW_FETCH:
            return {...state,
                is_follow_fetch: action.is_fetch
                ? [...state.is_follow_fetch,action.userID]
                : state.is_follow_fetch.filter(id => id != action.userID)
            }

        case FOLOW :
            return {...state,users: state.users.map((el)=>{
                if(el.id === action.userID)
                {
                    return {...el,followed: true}
                }
                return el;
            })};
        case UNFOLLOW:
            return {...state,users: state.users.map((el)=>{
                if(el.id === action.userID)
                {
                    return {...el,followed: false};
                }
                return el;
            })};
        case SET_USERS:
            return {...state,users: action.users};

        case SET_CURRENT_PAGE:
            return {...state,current_paige: action.current_page}

        case SET_USERS_COUNT:
            return {...state,total_users_count: action.users_count}
        case TOOGLE_IS_FETCH:
            return {...state,is_fetch: action.is_fetch}
        default:
            return state;
    }
}

//Users Action Creators
export const follow_fetchAC = (_is_follow_fetch,_userID)=>{
    return {
        type: "FOLLOW_FETCH",
        is_follow_fetch:_is_follow_fetch,
        userID : _userID
    }
}
export const set_is_fetchAC = (_is_fetch) =>
{
    return {
        type:"TOOGLE_IS_FETCH",
        is_fetch: _is_fetch
    }
}
export const followAC = (_userID)=>{
    return {
        type: "FOLLOW",
        userID:_userID
    }
}
export const unfollowAC = (_userID) =>{
    return {
        type: "UNFOLLOW",
        userID:_userID
    }
}
export const set_usersAC = (users) => {
    return {
        type: "SET-USERS",
        users:users
    }
}
export const set_current_pageAC = (page) => {
    return {
        type: "SET-CURRENT-PAGE",
        current_page: page
    }
}
export const set_users_countAC = (count)=>{
        return {
            type: "SET-USERS-COUNT",
            users_count:count
        }
    }

// export const get_users_thunkCreator = function(current_page,paige_size)
// {
//     return (dispatch) => {

//         dispatch(is_fetch(true));
//         usersAPI.get_users(current_page,paige_size).then((data) => {
//                 dispatch(set_users(data.items));
//                 dispatch(set_users_count(data.totalCount));
//                 dipsatch(is_fetch(false));
//             })
//     }
// }
export default users_reducer;