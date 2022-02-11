"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_user_status = exports.Login_thunk = exports.get_users_status = exports.Get_async_users = exports.Unfollow_async = exports.Follow_async = exports.set_current_user = void 0;

var _users_reducers = require("../Redux/users_reducers");

var _auth_reducer = require("../Redux/auth_reducer");

var _reduxForm = require("redux-form");

var _api = require("../API/api");

//Importing action creators
//Impoerting Data Access Layer
//Declaring the thunk creators :
var set_current_user = function set_current_user() {
  return function (dispatch) {
    _api.usersAPI.set_my_id().then(function (response) {
      dispatch((0, _users_reducers.set_current_userAC)(response.data.data.id));
    });
  };
};

exports.set_current_user = set_current_user;

var Follow_async = function Follow_async(_id) {
  return function (dispatch) {
    dispatch((0, _users_reducers.follow_fetchAC)(true));

    _api.usersAPI.follow(_id).then(function (response) {
      dispatch((0, _users_reducers.follow_fetchAC)(false));
      dispatch((0, _users_reducers.followAC)(_id));
    });
  };
};

exports.Follow_async = Follow_async;

var Unfollow_async = function Unfollow_async(_id) {
  return function (dispatch) {
    dispatch((0, _users_reducers.follow_fetchAC)(true));

    _api.usersAPI.unfollow(_id).then(function (response) {
      dispatch((0, _users_reducers.follow_fetchAC)(false));
      dispatch((0, _users_reducers.unfollowAC)(_id));
    });
  };
};

exports.Unfollow_async = Unfollow_async;

var Get_async_users = function Get_async_users(current_page, paige_size) {
  return function (dispatch) {
    dispatch((0, _users_reducers.set_is_fetchAC)(true));

    _api.usersAPI.get_users().then(function (data) {
      dispatch((0, _users_reducers.set_usersAC)(data.items));
      dispatch((0, _users_reducers.set_users_countAC)(data.totalCount));
      dispatch((0, _users_reducers.set_is_fetchAC)(false));
    });
  };
};

exports.Get_async_users = Get_async_users;

var get_users_status = function get_users_status(id) {
  return function (dispatch) {
    _api.ProfileApi.get_status(id).then(function (response) {
      console.log(response.data);
      dispatch((0, _users_reducers.set_statusAC)(response.data));
    });
  };
};

exports.get_users_status = get_users_status;

var Login_thunk = function Login_thunk(formData) {
  return function (dispatch) {
    _api.usersAPI.login(formData).then(function (response) {
      dispatch((0, _users_reducers.set_current_userAC)(response.data.data.userId));

      if (response.data.resultCode === 0) {
        dispatch((0, _auth_reducer.set_user_authAC)(true));
      } else {
        dispatch((0, _auth_reducer.set_user_authAC)(false));

        if (response.data.messages.length > 0) {
          dispatch((0, _reduxForm.stopSubmit)("login", {
            _error: response.data.messages[0]
          }));
        } else {
          dispatch((0, _reduxForm.stopSubmit)("login", {
            _error: "Unknown Error.Please try again."
          }));
        }
      }
    });
  };
};

exports.Login_thunk = Login_thunk;

var update_user_status = function update_user_status(_text) {
  return function (dispatch) {
    _api.ProfileApi.update_status(_text);

    dispatch((0, _users_reducers.update_statusAC)(_text));
  };
};

exports.update_user_status = update_user_status;