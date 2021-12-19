"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

var _Reducers = require("./Reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = {
  state: {
    users: [{
      name: "Pavel",
      surname: "Pavlov",
      id: 1
    }, {
      name: "Adolf",
      surname: "Hitler",
      id: "1488"
    }]
  },
  messages: [],
  newMessage: "",
  getState: function getState() {
    return this.state;
  },
  dispath: function dispath(action) {
    this.messages = (0, _Reducers.dialogs_reducer)(this.messages, action);
    this.newMessage = (0, _Reducers.text_area_reducer)(this.newMessage, action);
    this.users = (0, _Reducers.add_user)(this.users, action);
    this.callSubscriber(this);
  },
  callSubscriber: function callSubscriber() {
    console.log("text");
  },
  subscribe: function subscribe(observer) {
    this.callSubscriber = observer;
  }
};
exports.store = store;