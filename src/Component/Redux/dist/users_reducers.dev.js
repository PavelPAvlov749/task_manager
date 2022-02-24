"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.update_statusAC = exports.set_statusAC = exports.set_current_userAC = exports.set_users_countAC = exports.set_current_pageAC = exports.set_usersAC = exports.unfollowAC = exports.followAC = exports.set_is_fetchAC = exports.follow_fetchAC = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var initiaal_state = _defineProperty({
  users: [],
  paige_size: 5,
  total_users_count: 0,
  current_paige: 1,
  is_fetch: false,
  is_follow_fetch: [],
  current_user: null,
  status: ""
}, "is_fetch", null);

var users_reducer = function users_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaal_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW_FETCH:
      return _objectSpread({}, state, {
        is_follow_fetch: action.is_fetch ? [].concat(_toConsumableArray(state.is_follow_fetch), [action.userID]) : state.is_follow_fetch.filter(function (id) {
          return id != action.userID;
        })
      });

    case FOLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (el) {
          if (el.id === action.userID) {
            return _objectSpread({}, el, {
              followed: true
            });
          }

          return el;
        })
      });

    case UNFOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (el) {
          if (el.id === action.userID) {
            return _objectSpread({}, el, {
              followed: false
            });
          }

          return el;
        })
      });

    case SET_USERS:
      return _objectSpread({}, state, {
        users: action.users
      });

    case SET_CURRENT_PAGE:
      return _objectSpread({}, state, {
        current_paige: action.current_page
      });

    case SET_STATUS:
      return _objectSpread({}, state, {
        status: action.status
      });

    case UPDATE_STATUS:
      return _objectSpread({}, state, {
        status: action.status
      });

    case SET_USERS_COUNT:
      return _objectSpread({}, state, {
        total_users_count: action.users_count
      });

    case TOOGLE_IS_FETCH:
      return _objectSpread({}, state, {
        is_fetch: action.is_fetch
      });

    case SET_CURRENT_USER:
      return _objectSpread({}, state, {
        current_user: action.current_user_id
      });

    default:
      return state;
  }
}; //Users Action Creators


var follow_fetchAC = function follow_fetchAC(_is_follow_fetch, _userID) {
  return {
    type: "FOLLOW_FETCH",
    is_follow_fetch: _is_follow_fetch,
    userID: _userID
  };
};

exports.follow_fetchAC = follow_fetchAC;

var set_is_fetchAC = function set_is_fetchAC(_is_fetch) {
  return {
    type: "TOOGLE_IS_FETCH",
    is_fetch: _is_fetch
  };
};

exports.set_is_fetchAC = set_is_fetchAC;

var followAC = function followAC(_userID) {
  return {
    type: "FOLLOW",
    userID: _userID
  };
};

exports.followAC = followAC;

var unfollowAC = function unfollowAC(_userID) {
  return {
    type: "UNFOLLOW",
    userID: _userID
  };
};

exports.unfollowAC = unfollowAC;

var set_usersAC = function set_usersAC(users) {
  return {
    type: "SET-USERS",
    users: users
  };
};

exports.set_usersAC = set_usersAC;

var set_current_pageAC = function set_current_pageAC(page) {
  return {
    type: "SET-CURRENT-PAGE",
    current_page: page
  };
};

exports.set_current_pageAC = set_current_pageAC;

var set_users_countAC = function set_users_countAC(count) {
  return {
    type: "SET-USERS-COUNT",
    users_count: count
  };
};

exports.set_users_countAC = set_users_countAC;

var set_current_userAC = function set_current_userAC(id) {
  return {
    type: "SET_CURRENT_USER",
    current_user_id: id
  };
};

exports.set_current_userAC = set_current_userAC;

var set_statusAC = function set_statusAC(status) {
  return {
    type: "SET_STATUS",
    status: status
  };
};

exports.set_statusAC = set_statusAC;

var update_statusAC = function update_statusAC(status_text) {
  return {
    type: "UPDATE_STATUS",
    status: status_text
  };
};

exports.update_statusAC = update_statusAC;
var _default = users_reducer;
exports["default"] = _default;