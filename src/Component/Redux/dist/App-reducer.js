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
exports.__esModule = true;
exports.initialize = exports.initialize_sucsessAC = exports.App_reducer = void 0;
var auth_reducer_1 = require("./auth_reducer");
var async_action_1 = require("../AsyncAcion/async_action");
var SET_INITIALIZE = "SET_INITIALIZE";
var initial_state = {
    initialized: false
};
exports.App_reducer = function (state, action) {
    if (state === void 0) { state = initial_state; }
    switch (action.type) {
        case SET_INITIALIZE:
            return __assign(__assign({}, state), { initialized: true });
        default:
            return state;
    }
};
var Set_Initialize_Action_Type = "SET_INITIALIZE";
exports.initialize_sucsessAC = function () {
    return {
        type: "SET_INITIALIZE"
    };
};
//Creating the action types and action function types
exports.initialize = function () { return function (dispatch) {
    var propmise = dispatch(auth_reducer_1.get_auth_user_data());
    var propmise_2 = dispatch(async_action_1.set_current_user());
    //When all promises has resolved,then dispatch will call "initialize_sucsessAC" :
    Promise.all([propmise, propmise_2]).then(function () {
        //setTimeout(2000,()=>{})
        dispatch(exports.initialize_sucsessAC());
    });
}; };
