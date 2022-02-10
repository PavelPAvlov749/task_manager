"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = exports.initialize_sucsessAC = exports.App_reducer = void 0;

var _auth_reducer = require("./auth_reducer");

var _async_action = require("../AsyncAcion/async_action");

var _api = require("../API/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_INITIALIZE = "SET_INITIALIZE";
var initial_state = {
  initialized: false
};

var App_reducer = function App_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_INITIALIZE:
      return _objectSpread({}, state, {
        initialized: true
      });

    default:
      return state;
  }
};

exports.App_reducer = App_reducer;

var initialize_sucsessAC = function initialize_sucsessAC() {
  return {
    type: "SET_INITIALIZE"
  };
};

exports.initialize_sucsessAC = initialize_sucsessAC;

var initialize = function initialize() {
  return function (dispatch) {
    var propmise = dispatch((0, _auth_reducer.get_auth_user_data)());
    var propmise_2 = dispatch((0, _async_action.set_current_user)()); //When all promises has resolved,then dispatch will call "initialize_sucsessAC" :

    Promise.all([propmise, propmise_2]).then(function () {
      setTimeout(2000, function () {});
      dispatch(initialize_sucsessAC());
    });
  };
};

exports.initialize = initialize;