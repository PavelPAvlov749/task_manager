"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var react_1 = require("react");
var Profile_module_css_1 = require("../../Styles/Profile.module.css");
var Profile_status_1 = require("./Profile_status/Profile_status");
var Preloader_1 = require("../Preloader/Preloader");
exports.Profile = function (props) {
    if (true) {
        console.log(props.profile.profile.fullName);
        return (react_1["default"].createElement("div", { className: Profile_module_css_1["default"].Profile_container },
            react_1["default"].createElement("div", { className: Profile_module_css_1["default"].Profile },
                react_1["default"].createElement("img", { src: props.profile.profile.photos.large ? props.profile.profile.photos.large : "https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png", alt: "" }),
                react_1["default"].createElement("h1", null, props.profile.profile.fullName)),
            react_1["default"].createElement(Profile_status_1.Profile_status_with_hooks, { status: props.status })));
    }
    else {
        return react_1["default"].createElement(Preloader_1.Preloader, null);
    }
};
