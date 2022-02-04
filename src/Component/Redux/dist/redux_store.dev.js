"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _Reducers = require("./Reducers");

var _users_reducers = _interopRequireDefault(require("./users_reducers"));

var _Profile_reducer = require("./Profile_reducer");

var _auth_reducer = require("./auth_reducer");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  messages: _Reducers.dialogs_reducer,
  newMessage: _Reducers.text_area_reducer,
  users: _Reducers.add_user,
  users_paige: _users_reducers["default"],
  current_page: _users_reducers["default"],
  total_users_count: _users_reducers["default"],
  is_fetch: _users_reducers["default"],
  profile: _Profile_reducer.Profile_reducer,
  auth: _auth_reducer.Auth_reducer,
  is_follow_fetch: _users_reducers["default"],
  current_user: _users_reducers["default"],
  status: _users_reducers["default"],
  login: _auth_reducer.Auth_reducer,
  email: _auth_reducer.Auth_reducer,
  userID: _auth_reducer.Auth_reducer,
  form: _reduxForm.reducer,
  message: _reduxForm.reducer
});
var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
exports.store = store;
window.store = store;