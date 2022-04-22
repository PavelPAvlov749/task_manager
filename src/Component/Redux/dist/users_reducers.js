"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.update_statusAC = exports.set_statusAC = exports.set_current_userAC = exports.set_users_countAC = exports.set_current_pageAC = exports.set_usersAC = exports.unfollowAC = exports.followAC = exports.set_is_fetchAC = exports.follow_fetchAC = void 0;
var FOLOW = "FOLLOW";
var UNFOLLOW = "UNFOLLOW";
var SET_USERS = "SET-USERS";
var SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
var SET_USERS_COUNT = "SET-USERS-COUNT";
var TOOGLE_IS_FETCH = "TOOGLE_IS_FETCH";
var FOLLOW_FETCH = "FOLLOW_FETCH";
var SET_CURRENT_USER = "SET_CURRENT_USER";
var SET_STATUS = "SET_STATUS";
var UPDATE_STATUS = "UPDATE_STATUS";
var initiaal_state = {
    users: [],
    paige_size: 5,
    total_users_count: 0,
    current_paige: 1,
    is_fetch: false,
    is_follow_fetch: [],
    current_user: null,
    status: ""
};
var users_reducer = function (state, action) {
    if (state === void 0) { state = initiaal_state; }
    switch (action.type) {
        case FOLLOW_FETCH:
            return __assign(__assign({}, state), { is_follow_fetch: action.is_fetch
                    ? __spreadArrays(state.is_follow_fetch, [action.userID]) : state.is_follow_fetch.filter(function (id) { return id != action.userID; }) });
        case FOLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (el) {
                    if (el.id === action.userID) {
                        return __assign(__assign({}, el), { followed: true });
                    }
                    return el;
                }) });
        case UNFOLLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (el) {
                    if (el.id === action.userID) {
                        return __assign(__assign({}, el), { followed: false });
                    }
                    return el;
                }) });
        case SET_USERS:
            return __assign(__assign({}, state), { users: action.users });
        case SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { current_paige: action.current_page });
        case SET_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case UPDATE_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case SET_USERS_COUNT:
            return __assign(__assign({}, state), { total_users_count: action.users_count });
        case TOOGLE_IS_FETCH:
            return __assign(__assign({}, state), { is_fetch: action.is_fetch });
        case SET_CURRENT_USER:
            return __assign(__assign({}, state), { current_user: action.current_user_id });
        default:
            return state;
    }
};
exports.follow_fetchAC = function (_is_follow_fetch, _userID) {
    return {
        type: "FOLLOW_FETCH",
        is_follow_fetch: _is_follow_fetch,
        userID: _userID
    };
};
exports.set_is_fetchAC = function (_is_fetch) {
    return {
        type: "TOOGLE_IS_FETCH",
        is_fetch: _is_fetch
    };
};
exports.followAC = function (_userID) {
    return {
        type: "FOLLOW",
        userID: _userID
    };
};
exports.unfollowAC = function (_userID) {
    return {
        type: "UNFOLLOW",
        userID: _userID
    };
};
exports.set_usersAC = function (users) {
    return {
        type: "SET-USERS",
        users: users
    };
};
exports.set_current_pageAC = function (page) {
    return {
        type: "SET-CURRENT-PAGE",
        current_page: page
    };
};
exports.set_users_countAC = function (count) {
    return {
        type: "SET-USERS-COUNT",
        users_count: count
    };
};
exports.set_current_userAC = function (id) {
    return {
        type: "SET_CURRENT_USER",
        current_user_id: id
    };
};
exports.set_statusAC = function (status) {
    return {
        type: "SET_STATUS",
        status: status
    };
};
exports.update_statusAC = function (status_text) {
    return {
        type: "UPDATE_STATUS",
        status: status_text
    };
};
exports["default"] = users_reducer;
