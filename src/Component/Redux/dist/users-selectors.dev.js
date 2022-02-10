"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_follow_fetch = exports.get_is_fetch = exports.get_current_paige = exports.get_users_count = exports.get_paige_size = exports.Get_users_reselect = void 0;

var _reselect = require("reselect");

var get_users = function get_users(state) {
  return state.users_paige.users;
};

var Get_users_reselect = (0, _reselect.createSelector)(get_users, function (users) {
  return users.filter(function (u) {
    return true;
  });
}); //......................

exports.Get_users_reselect = Get_users_reselect;

var get_paige_size = function get_paige_size(state) {
  return state.current_page.paige_size;
};

exports.get_paige_size = get_paige_size;

var get_users_count = function get_users_count(state) {
  return state.users_paige.total_users_count;
};

exports.get_users_count = get_users_count;

var get_current_paige = function get_current_paige(state) {
  return state.users_paige.current_paige;
};

exports.get_current_paige = get_current_paige;

var get_is_fetch = function get_is_fetch(state) {
  return state.users_paige.is_fetch;
};

exports.get_is_fetch = get_is_fetch;

var get_follow_fetch = function get_follow_fetch(state) {
  return state.users_paige.is_follow_fetch;
};

exports.get_follow_fetch = get_follow_fetch;