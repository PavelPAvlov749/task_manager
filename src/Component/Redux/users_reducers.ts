import { InferActionType } from "./redux_store";

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
const SET_FILTER = "SET_FILTER";

export type photos_type = {
    small: string,
    large: string
}
export type contacts_type = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type User_type = {
    id: number,
    name: string,
    status?: string,
    photos?: photos_type,
    followed?: boolean,
}
export type Filter_type = {
    term : string,
    friend : boolean
}

let initiaal_state = {
    users: [] as Array<User_type>,
    paige_size: 5 as number,
    total_users_count: 0 as number,
    current_paige: 1 as number,
    is_fetch: false as boolean,
    is_follow_fetch: [] as Array<number>,
    current_user: null,
    status: "" as string,
    filter: {
        term : "" as string,
        friend : null as null | boolean,
    }
};

export type Users_action_type = InferActionType<typeof actions>;

const users_reducer = (state = initiaal_state, action: Users_action_type) => {
    switch (action.type) {
        case FOLLOW_FETCH:
            return {
                ...state,
                is_follow_fetch: action.is_follow_fetch
                    ? [...state.is_follow_fetch, action.userID]
                    : state.is_follow_fetch.filter(id => id != action.userID)
            }

        case FOLOW:
            return {
                ...state, users: state.users.map((el) => {
                    if (el.id === action.userID) {
                        return { ...el, followed: true }
                    }
                    return el;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((el) => {
                    if (el.id === action.userID) {
                        return { ...el, followed: false };
                    }
                    return el;
                })
            };

        case SET_USERS:
            return { ...state, users: action.users };

        case SET_CURRENT_PAGE:
            return { ...state, current_paige: action.current_page }

        case SET_STATUS:
            return { ...state, status: action.status }

        case UPDATE_STATUS:
            return { ...state, status: action.status }

        case SET_USERS_COUNT:
            return { ...state, total_users_count: action.users_count }

        case TOOGLE_IS_FETCH:
            return { ...state, is_fetch: action.is_fetch }

        case SET_CURRENT_USER:
            return { ...state, current_user: action.current_user_id }
        case SET_FILTER : 
            return {...state,filter :{...state.filter,term : action.payload}}
        default:
            return state;
    }
}

export const actions = {
    follow_fetchAC: (_is_follow_fetch: boolean, _userID: number) => ({
        type: "FOLLOW_FETCH",
        is_follow_fetch: _is_follow_fetch,
        userID: _userID
    } as const),
    set_is_fetchAC: (_is_fetch: boolean) => ({
        type: "TOOGLE_IS_FETCH",
        is_fetch: _is_fetch
    } as const),

    followAC: (_userID: number) => ({
        type: "FOLLOW",
        userID: _userID
    } as const),
    unfollowAC: (_userID: number) => ({

        type: "UNFOLLOW",
        userID: _userID
    } as const),
    set_usersAC: (users: Array<User_type>) => ({
        type: "SET-USERS",
        users: users
    } as const),
    set_current_pageAC: (page: User_type) => ({
        type: "SET-CURRENT-PAGE",
        current_page: page
    } as const),
    set_users_countAC: (count: number) => ({
        type: "SET-USERS-COUNT",
        users_count: count
    } as const),
    set_current_userAC: (id: number) => ({
        type: "SET_CURRENT_USER",
        current_user_id: id
    } as const),
    set_statusAC: (status: string) => ({
        type: "SET_STATUS",
        status: status
    } as const),
    update_statusAC: (status_text: string) => ({
        type: "UPDATE_STATUS",
        status: status_text
    } as const),
    set_filterAC: (filter:Filter_type) => ({
        type : "SET_FILTER",
        payload : filter
    }as const)
}



export default users_reducer;