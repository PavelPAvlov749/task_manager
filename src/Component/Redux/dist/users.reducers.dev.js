"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.set_usersAC = exports.unfolowAC = exports.folowAC = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLOW = "FOLLOW";
var UNFOLOW = "UNFOLLOW";
var SET_USERS = "SET-USERS";
var initiaal_state = {
  users: [{
    id: 1,
    name: "Pavel",
    status: "Developer",
    followed: true,
    location: {
      city: "Omsk",
      contry: "Russia"
    }
  }, {
    id: 2,
    name: "Sergey",
    status: "Junior-Developer",
    followed: false,
    location: {
      city: "Novosibirsk",
      contry: "Russia"
    }
  }]
};

var users_reducer = function users_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaal_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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

    case UNFOLOW:
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
        users: [].concat(_toConsumableArray(state.users), _toConsumableArray(action.users))
      });

    default:
      return state;
  }
};

var folowAC = function folowAC(_userID) {
  return {
    type: "FOLLOW",
    userID: _userID
  };
};

exports.folowAC = folowAC;

var unfolowAC = function unfolowAC(_userID) {
  return {
    type: "UNFOLLOW",
    userID: _userID
  };
};

exports.unfolowAC = unfolowAC;

var set_usersAC = function set_usersAC(users) {
  return {
    type: "SET-USERS",
    users: users
  };
};

exports.set_usersAC = set_usersAC;
var _default = users_reducer;
exports["default"] = _default;