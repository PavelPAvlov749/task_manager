"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delete_taskAC = exports.add_taskAC = exports.task_reducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_TASK = "ADD_TASK";
var DELETE_TASK = "DELETE_TASK";
var GET_TASK = "GET_TASK";
var UPDATE_TASK = "UPDATE_TASK";
var initial_state = {
  user_tasks: []
};

var task_reducer = function task_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TASK:
      return _objectSpread({}, state, {}, state.user_tasks.push({
        Begin: action.begin,
        Description: action.description,
        Status: action.status,
        Progress: action.progress // task_id: state.user_tasks.length()

      }));

    case DELETE_TASK:
      return _objectSpread({}, state, {
        user_tasks: state.user_tasks.filter(function (t) {
          t.id != action.id;
        })
      });

    default:
      return state;
  }
};

exports.task_reducer = task_reducer;

var add_taskAC = function add_taskAC(Begin, Description, Status, Progress) {
  return {
    type: "ADD_TASK",
    begin: Begin,
    description: Description,
    status: Status,
    progress: Progress
  };
};

exports.add_taskAC = add_taskAC;

var delete_taskAC = function delete_taskAC(_task_id) {
  return {
    type: "DELETE_TASK",
    id: _task_id
  };
};

exports.delete_taskAC = delete_taskAC;