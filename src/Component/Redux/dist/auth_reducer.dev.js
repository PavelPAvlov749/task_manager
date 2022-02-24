"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.get_auth_user_data = exports.set_user_authAC = exports.Auth_reducer = void 0;

var _api = require("../API/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_AUTH = "SET_USER_AUTH";
var TOOGLE_IS_FETCH = "TOGLE_IS_FETCH";
var initiaal_state = {
  auth: false
};

var Auth_reducer = function Auth_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaal_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_AUTH:
      return _objectSpread({}, state, {
        auth: action.auth
      });

    default:
      return state;
  }
};

exports.Auth_reducer = Auth_reducer;

var set_user_authAC = function set_user_authAC(auth) {
  return {
    type: "SET_USER_AUTH",
    auth: auth
  };
};

exports.set_user_authAC = set_user_authAC;

var get_auth_user_data = function get_auth_user_data() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_api.usersAPI.set_my_id());

          case 2:
            response = _context.sent;

            if (response.data.resultCode === 0) {
              dispatch(set_user_authAC(true));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.get_auth_user_data = get_auth_user_data;

var logout = function logout() {
  return function (dispatch) {
    _api.usersAPI.log_out().then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(set_user_authAC(false));
      }
    });
  };
};

exports.logout = logout;