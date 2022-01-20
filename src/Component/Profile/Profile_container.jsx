import React from "react";
import { Profile } from "./Profile";
import * as axios from "axios";
import { Set_users_profileAC } from "../Redux/Profile_reducer";
import { connect } from "react-redux";
import Header from "../Header";



class Profile_containerAPI extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
    
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
            console.log(response.fullName)
            console.log(response.data.fullName)
            window.response = response.data
            this.props.Set_users_profileAC(response.data);
            console.log("Container props is :")
            console.log(this.props)
        })
    }
    render (){
        return (
            <Header {...this.props}/>
            
        )
    }
}


let MapStateToProps = (state) => {
    return {
        profile : state.profile,
        isAuth: state.auth.auth
    }
}
let MapDispatchToProps = (dispatch)=>
{
    return {
        Set_users_profile: (profile)=>{
            dispatch(Set_users_profileAC(profile));
        }
    }
}


let Profile_container = connect (MapStateToProps,{Set_users_profileAC})(Profile_containerAPI);

export default Profile_container;