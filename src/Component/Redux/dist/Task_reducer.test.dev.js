"use strict";

var _Task_reducer = require("./Task_reducer");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it("User tasks should take a new ellement with values: begin description,status,progress", function () {
  var action = (0, _Task_reducer.add_taskAC)("Begin", "Description", "Status", "Progress");
  var state = {
    user_tasks: []
  };
  var new_state = (0, _Task_reducer.task_reducer)(state, action);
  expect(new_state.user_tasks.length).toBe(1);
});
it("Users task array should be decremented", function () {
  var state = {
    user_tasks: [{
      id: 1,
      Task: "slkjglwrjglj"
    }, {
      id: 2,
      Task: "slkjglwrjglj"
    }, {
      id: 3,
      Task: "slkjglwrjglj"
    }, {
      id: 4,
      Task: "slkjglwrjglj"
    }]
  };
  var action = (0, _Task_reducer.delete_taskAC)(1);
  var new_state = (0, _Task_reducer.task_reducer)(state, action);
  expect(new_state.user_tasks.length).toBe(3);
});