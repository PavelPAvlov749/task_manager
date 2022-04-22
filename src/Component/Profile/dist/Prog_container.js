"use strict";
//importing React,Redux components
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Prof_container = exports.Prof_container_API = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_2 = require("react");
//Another imports
var Profile_reducer_1 = require("../Redux/Profile_reducer");
var api_1 = require("../API/api");
var Profile_1 = require("./Profile");
var async_action_1 = require("../AsyncAcion/async_action");
var users_reducers_1 = require("../Redux/users_reducers");
var async_action_2 = require("../AsyncAcion/async_action");
exports.Prof_container_API = function (props) {
    var params = react_router_dom_1.useParams();
    var id = params.id;
    var _a = react_1["default"].useState(props.profile.photos.large), photo = _a[0], set_photo = _a[1];
    react_2.useEffect(function () {
        api_1.usersAPI.get_profile(id).then(function (data) {
            return props.Set_users_profileAC(data);
        });
    }, [photo]);
    // props.set_fetch(true);
    // usersAPI.get_profile(id).then((data) => {
    //     props.Set_users_profileAC(data)
    //     // props.set_fetch(false)
    // })
    props.Get_async_status(id);
    return (react_1["default"].createElement(Profile_1.Profile, __assign({}, props)));
};
var MapStateToProps = function (state) {
    return {
        profile: state.profile,
        isAuth: state.auth.auth,
        status: state.status.status,
        isFetch: state.is_fetch
    };
};
var MapDispatchToProps = function (dispatch) {
    return {
        Set_users_profileAC: function (profile) {
            dispatch(Profile_reducer_1.Set_users_profileAC(profile));
        },
        Get_async_status: function (id) {
            dispatch(async_action_1.get_users_status(id));
        },
        set_fetch: function (value) {
            dispatch(users_reducers_1.set_is_fetchAC(value));
        },
        get_async_user: function (id) {
            dispatch(async_action_2.get_async_user_profile(id));
        }
    };
};
exports.Prof_container = react_redux_1.connect(MapStateToProps, MapDispatchToProps)(exports.Prof_container_API);
