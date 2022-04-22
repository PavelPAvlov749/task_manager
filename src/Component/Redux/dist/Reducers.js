"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Add_User_action_creator = exports.new_message_action = exports.new_message_body = exports.set_users = exports.add_user = exports.text_area_reducer = exports.dialogs_reducer = exports.messages_reducer = void 0;
var ADD_MESSAGE = "ADD-MESSAGE";
var NEW_MESSAGE = "NEW-MESSAGE";
var ADD_USER = "ADD-USER";
var initial_state = {
    messages: ["dfkgdpfkg", "slkdjgswdjg"],
    newMessage: "Type text",
    users: [
        {
            name: "Pavel",
            surname: "Pavlov",
            id: 1
        },
        {
            name: "Adolf",
            surname: "Hitler",
            id: "1488"
        },
        {
            name: "Joseph",
            surname: "Gebels",
            id: 1
        },
        {
            name: "Fridrich",
            surname: "Gimler",
            id: "1488"
        },
        {
            name: "German",
            surname: "Gofmann",
            id: 1
        },
        {
            name: "Alina",
            surname: "Bauer",
            id: "1488"
        },
        {
            name: "John",
            surname: "Davis",
            id: 1
        },
        {
            name: "Leonardo",
            surname: "Da-vinci",
            id: "1488"
        },
    ]
};
exports.messages_reducer = function (state, action) {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.push(action.text);
            return state;
        case "NEW-MESSAGE":
            state = action.text;
            return state;
        case "ADD-USER":
            state.push(action.user);
            return state;
        default:
            return state;
    }
};
exports.dialogs_reducer = function (state, action) {
    if (state === void 0) { state = initial_state.messages; }
    if (action.type === "ADD-MESSAGE") {
        var stateCopy = __spreadArrays(state);
        stateCopy.push(action.text);
        return stateCopy;
    }
    else {
        return state;
    }
};
exports.text_area_reducer = function (state, action) {
    if (state === void 0) { state = initial_state.newMessage; }
    if (action.type === "NEW-MESSAGE") {
        state = action.text;
    }
    return state;
};
exports.add_user = function (state, action) {
    if (state === void 0) { state = initial_state; }
    if (action.type === "ADD-USER") {
        var stateCopy = __spreadArrays(state.users);
        stateCopy.push(action.user);
        return stateCopy;
    }
    return state;
};
exports.set_users = function (state, action) {
    if (state === void 0) { state = initial_state; }
    return state;
};
//Defining the Action creatots //////////////////////////////
exports.new_message_body = function (_type, _text) {
    return ({
        type: _type,
        text: _text
    });
};
exports.new_message_action = function (_type, _text) {
    return ({
        type: _type,
        text: _text
    });
};
exports.Add_User_action_creator = function (_type, _text) {
    return ({
        type: _type,
        text: _text
    });
};
