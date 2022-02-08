//Importing React,Redux,React-Redux,Axios :
import React from 'react';
import { connect } from 'react-redux';

//Importing React-Routing:
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";

//Importing React Components :
import Sidebar from './Component/Sidebar/Sidebar';
import Container from './Component/Tasks/container';
import Foot from './Component/footer';
import Settings from "./Component/Settings/Settings.jsx";
import Statistics from "./Component/Statistic/Statistics.jsx";
import { Users_container } from './Component/Users/Users_container.jsx';
import { Prof_container } from './Component/Profile/Prog_container';
import { Header_heigh_container } from './Component/Header_container';
import { Login_container } from './Component/Login';
import { My_profile_container } from './Component/Profile/My_Profile';
import { Redux_container } from './Component/Dialogs/Dialogs_container';
//Importing Thunks and Acion-creators :
import { set_current_user } from './Component/AsyncAcion/async_action';
import { set_user_authAC } from './Component/Redux/auth_reducer';
import { set_is_fetchAC } from './Component/Redux/users_reducers';
import { initialize } from './Component/Redux/App-reducer';
//Importing Styles
import './App.css';
import { Preloader } from './Component/Preloader/Preloader';

///////////////////////////////////// Rendering the main component   /////////////////////////////////

class App extends React.Component
{
  componentDidMount(){
    this.props.init();
  };
  render(){
    if(this.props.initialized === false){
      return <Preloader/>
    }else {
      return (
        <Router>
          <div className="root ">
          <Header_heigh_container />
          <Sidebar />
          <Foot />
          <Routes > 
            <Route path="/dialogs" element={<Redux_container />}/>
            <Route path="/tasks" element={<Container />}/>
            <Route path="/Settings" element={<Settings />}/>
            <Route path="/Statistics" element={<Statistics />}/>
            <Route path="/users" element={<Users_container />}/>
            <Route path="profile/:id" element={<Prof_container />}/>
            <Route path="login/" element={<Login_container/>}/>
            <Route path="profile_me" element={<My_profile_container />}/>
          </Routes>
          </div>
        </Router>
    
      )
    }
  }
};

const MapStateToProps = (state)=>{
  return {
    auth: state.auth,
    current_user: state.current_user.me,
    initialized: state.initialized.initialized
  }
};
const MapDispatchToProps = (dispatch) => {
  return {
    set_user_authAC: (auth) => {
      dispatch(set_user_authAC(auth));
  },
  set_is_fetchAC: (is_fetch)=> {
      dispatch(set_is_fetchAC(is_fetch))
  },
    set_current_user: () =>{
      dispatch(set_current_user())
    },
    init : () => {
      dispatch(initialize())
    }

  }
};

export const App_container = connect(MapStateToProps,MapDispatchToProps)(App);
