"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task_class = function Task_class(_name, _desc) {
  _classCallCheck(this, Task_class);

  this.text = undefined;
  this.description = _desc;
  this.time = new Date();
  this.status = "New";
  this.progress = 0;
  this.name = _name;
};

var _default = Task_class;
exports["default"] = _default;