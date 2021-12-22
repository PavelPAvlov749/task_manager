"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _Reducers = require("./Reducers");

var reducers = (0, _redux.combineReducers)({
  messages: _Reducers.dialogs_reducer,
  newMessage: _Reducers.text_area_reducer,
  users: _Reducers.add_user
});
var store = (0, _redux.createStore)(reducers);
exports.store = store;