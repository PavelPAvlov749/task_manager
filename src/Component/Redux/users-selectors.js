import { createSelector } from 'reselect';


export const get_users = (state)=> {
    return state.users_paige.users
};

export const Get_users_reselect = createSelector(get_users,(users)=> {
    return users.filter(u => true);
})


//......................
export const get_paige_size = function (state){
    return state.current_page.paige_size;
};
export const get_users_count = function (state){
    return state.users_paige.total_users_count;
};
export const get_current_paige = function (state){
    return state.users_paige.current_paige;
};
export const get_is_fetch = function (state){
    return state.users_paige.is_fetch;
};
export const get_follow_fetch = function (state){
    return state.users_paige.is_follow_fetch;
};
export const get_users_filter = function (state){
    return state.users_paige.filter
}
