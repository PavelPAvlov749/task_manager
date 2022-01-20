"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Get_async_users = exports.Unfollow_async = exports.Follow_async = void 0;

var _users_reducers = require("../Redux/users_reducers");

var _api = require("../API/api");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Data_access_layer = function Data_access_layer() {
  _classCallCheck(this, Data_access_layer);
};