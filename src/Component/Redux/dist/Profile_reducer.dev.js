"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Set_photoAC = exports.Set_users_profileAC = exports.Profile_reducer = void 0;

var _api = require("../API/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USERS_PROFILE = "SET_USERS_PROFILE";
var SET_PHOTO = "SET_PHOTO";
var initial_state = {
  profile: {
    profile: null,
    photos: {
      large: null
    }
  }
};

var Profile_reducer = function Profile_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USERS_PROFILE:
      return _objectSpread({}, state, {
        profile: action.profile
      });

    case SET_PHOTO:
      return _objectSpread({}, state, {
        profile: _objectSpread({}, state.profile, {
          photos: action.photo
        })
      });

    default:
      return state;
  }
};

exports.Profile_reducer = Profile_reducer;

var Set_users_profileAC = function Set_users_profileAC(profile) {
  return {
    type: "SET_USERS_PROFILE",
    profile: profile
  };
};

exports.Set_users_profileAC = Set_users_profileAC;

var Set_photoAC = function Set_photoAC(photo) {
  return {
    type: "SET_PHOTO",
    photo: photo
  };
};

exports.Set_photoAC = Set_photoAC;