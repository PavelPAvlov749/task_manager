"use strict";
exports.__esModule = true;
exports.Profile_status_with_hooks = void 0;
var react_1 = require("react");
var Status_module_css_1 = require("../../../Styles/Status.module.css");
var react_2 = require("react");
var react_3 = require("react");
exports.Profile_status_with_hooks = function (props) {
    //Using useState hook.UseState returns array with 2 items,first - local state data,second - a function that changin state data
    var _a = react_2.useState(false), edit_mode = _a[0], set_edit_mode = _a[1];
    var _b = react_2.useState(props.status), status = _b[0], set_status = _b[1];
    //Using useEffect Hook.UseEffect works every time wneh the specifeied dependencies(Pointed in second argument as array)changes.
    //In this case every change in "props.status"
    //As first argument "useEffect" takes handler function
    //If second argument is a empty array, useEffect will work like "ComponentDidMount" in class-components
    //If second argiments is empty will work with every render
    react_3.useEffect(function () {
        set_status(props.status);
    }, [props.status]);
    var activate_edit_mode = function () {
        set_edit_mode(true);
    };
    var deactivate_edit_mode = function () {
        set_edit_mode(false);
        props.update_status(status);
    };
    var on_status_change = function (e) {
        set_status(e.currentTarget.value);
    };
    return (react_1["default"].createElement("section", { className: Status_module_css_1["default"].status_container },
        !edit_mode &&
            react_1["default"].createElement("div", { className: Status_module_css_1["default"].status_text },
                react_1["default"].createElement("span", { onClick: activate_edit_mode }, props.status)),
        edit_mode &&
            react_1["default"].createElement("section", { className: Status_module_css_1["default"].status_container, onBlur: deactivate_edit_mode },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("input", { onChange: on_status_change, autoFocus: true, value: status, onBlur: deactivate_edit_mode })))));
};
