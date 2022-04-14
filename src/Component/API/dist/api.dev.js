"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileApi = exports.usersAPI = void 0;

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
      console.log(response.data);
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
  },
  set_my_id: function set_my_id() {
    return instance.get("auth/me").then(function (response) {
      return response;
    });
  },
  login: function login(formData) {
    return instance.post("auth/login", {
      email: formData.Login,
      password: formData.Password,
      rememberMe: formData.Remember_me
    }).then(function (response) {
      return response;
    });
  },
  log_out: function log_out() {
    return instance["delete"]("auth/login").then(function (response) {
      return response;
    });
  },
  set_photo: function set_photo(photo) {
    var formData = new FormData();
    formData.append("image", photo);
    return instance.put('profile/photo', formData, {
      headers: {
        "Content-Type": "multipart/form=data"
      }
    }).then(function (response) {
      console.log("PHOTO API RESPONSE : ");
      console.log(response);
      return response;
    });
  }
};
exports.usersAPI = usersAPI;
var ProfileApi = {
  get_profile: function get_profile(_id) {
    return instance.get("profile/".concat(_id)).then(function (response) {
      return response.data;
    });
  },
  get_status: function get_status(_id) {
    return instance.get("profile/status/".concat(_id)).then(function (response) {
      return response;
    });
  },
  update_status: function update_status(_text) {
    return instance.put("profile/status", {
      status: _text
    });
  },
  set_avatar: function set_avatar(_path) {
    return instance.put("profile/photo");
  }
};
exports.ProfileApi = ProfileApi;