"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

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
    if (action.type === "ADD-USER") {
      this.state.users.push({
        name: action.text,
        surname: action.text
      });
    } else if (action.type === "ADD-MESSAGE") {
      this.messages.push(action.text);
    } else if (action.type === "NEW-MESSAGE") {
      this.newMessage = action.text;
    }

    this.callSubscriber(this);
  },
  add_user: function add_user(_name, _surname) {
    this.state.users.unshift({
      name: _name,
      surname: _surname
    });
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