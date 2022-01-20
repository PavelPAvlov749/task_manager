"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users_container = void 0;

var _reactRedux = require("react-redux");

var _UsresAPI = _interopRequireDefault(require("./UsresAPI"));

var _Reducers = require("./Redux/Reducers");

var _users_reducers = require("./Redux/users_reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users_paige.users,
    paige_size: state.users_paige.paige_size,
    total_users_count: state.users_paige.total_users_count,
    current_paige: state.users_paige.current_paige
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    follow: function follow(userID) {
      dispatch((0, _users_reducers.followAC)(userID));
    },
    unfollow: function unfollow(userID) {
      dispatch((0, _users_reducers.unfollowAC)(userID));
    },
    set_users: function set_users(users) {
      dispatch((0, _users_reducers.set_usersAC)(users));
    },
    set_current_page: function set_current_page(paige) {
      dispatch((0, _users_reducers.set_current_pageAC)(paige));
    },
    set_users_count: function set_users_count(count) {
      dispatch((0, _users_reducers.set_users_countAC)(count));
    }
  };
};

var Users_container = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UsresAPI["default"]);
exports.Users_container = Users_container;