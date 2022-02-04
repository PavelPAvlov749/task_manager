const FOLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TOOGLE_IS_FETCH = "TOOGLE_IS_FETCH";
const FOLLOW_FETCH = "FOLLOW_FETCH";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";



let initiaal_state = {
    users:[],
    paige_size : 8,
    total_users_count : 0,
    current_paige: 1,
    is_fetch: false,
    is_follow_fetch: [],
    current_user : null,
    status : ""
};

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

        case SET_STATUS:
            return {...state,status: action.status}

        case UPDATE_STATUS:
            return {...state,status:action.status}     

        case SET_USERS_COUNT:
            return {...state,total_users_count: action.users_count}

        case TOOGLE_IS_FETCH:
            return {...state,is_fetch: action.is_fetch}

        case SET_CURRENT_USER:
                return {...state,current_user : action.current_user_id}

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
export const set_current_userAC = (id)=>
{
    return {
        type : "SET_CURRENT_USER",
        current_user_id: id
    }
}
export const set_statusAC = (status) =>{
    return {
        type: "SET_STATUS",
        status : status
    }
}
export const update_statusAC = (status_text) => {
    return {
        type: "UPDATE_STATUS",
        status: status_text
    }
}

export default users_reducer;