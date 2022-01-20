"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersAPI = void 0;

var axios = _interopRequireWildcard(require("axios"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var API_KEY = "eb25692d-120e-4f50-87e4-23bbda95a3fe";
var instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": API_KEY
  }
});
var usersAPI = {
  get_users: function get_users() {
    var current_paige = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
    return instance.get("users?page=".concat(current_paige, "&count=").concat(page_size)).then(function (response) {
      return response.data;
    });
  },
  get_profile: function get_profile(user_id) {
    return instance.get("profile/".concat(user_id)).then(function (response) {
      return response.data;
    });
  },
  follow: function follow(user_id) {
    return instance.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(user_id)).then(function (response) {
      return response;
    });
  },
  unfollow: function unfollow(user_id) {
    return instance["delete"]("https://social-network.samuraijs.com/api/1.0/follow/".concat(user_id)).then(function (response) {
      return response;
    });
  }
};
exports.usersAPI = usersAPI;