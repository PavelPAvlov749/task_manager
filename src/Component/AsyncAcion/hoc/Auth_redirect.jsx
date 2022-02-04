import { Navigate } from "react-router-dom";
import React from "react";

export const With_auth_redirrect = (Component) =>{
    class Auth_redirect_comp extends React.Component
    {
        render()
        {
            if(!this.props.isAuth)
            {
                return <Navigate to="/login"/>
            }else{
                return <Component {...this.props}/>
            }
        }
    }
    return Auth_redirect_comp;
}