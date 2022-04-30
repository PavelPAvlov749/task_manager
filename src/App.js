//Importing React,Redux,React-Redux,Axios :
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { HashRouter,BrowserRouter } from 'react-router-dom';

//Importing React-Routing:
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";

//Importing React Components :
import Sidebar from './Component/Sidebar/Sidebar';
import Container from './Component/Tasks/container';
import Foot from './Component/footer';
import { Statistics_with_redirrect } from './Component/Statistic/Statistics.jsx';
import Statistics from "./Component/Statistic/Statistics.jsx";
import { Users_container } from './Component/Users/Users_container';
import { Prof_container } from './Component/Profile/Prog_container';
import { Header_heigh_container } from './Component/Header_container';
import { Login_container } from './Component/Login';
import { My_profile_container } from './Component/Profile/My_Profile';
import {Redux_container} from "./Component/Dialogs/Dialogs_container";
import { Users_page } from './Component/Users/Users_container';
//import { Redux_container } from './Component/Dialogs/Dialogs_container';
import { Task_page } from './Component/Tasks/container';
import { Settings_with_reddirect } from './Component/Settings/Settings.jsx';
//Importing Thunks and Acion-creators :
import { actions } from './Component/Redux/users_reducers';
import { set_current_user } from './Component/AsyncAcion/async_action';
import { initialize } from './Component/Redux/App-reducer';
import { Task_container_2 } from './Component/Tasks/container';
//Importing Styles
import './App.css';
import { Preloader } from './Component/Preloader/Preloader';
import {My_comp} from "../src/Component/Profile/My_Profile";

///////////////////////////////////// Rendering the main component   /////////////////////////////////

// const Redux_container = React.lazy(()=>import("./Component/Dialogs/Dialogs_container"))


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
        <BrowserRouter >
          <div className="root ">
          <Header_heigh_container />
          <Sidebar  />
          <Foot />
          <Routes >
            
            {/* <Route path="/dialogs">
             
            </Route> */}
            {/* <Route path="/dialogs" render={()=>{
              return(
                  <Suspense fallback={<Preloader/>}>
                   <Redux_container/>
                 </Suspense>)
            }}/> */}
            {/* <Route path="/dialogs" render={()=>{
              return (
                <Suspense fallback={<Preloader/>} element={<Redux_container/>}>
                </Suspense>
              )
            }}/> */}
            <Route path="/dialogs" element={<Redux_container />}/>
            <Route path="/tasks" element={<Task_container_2 />}/>
            <Route path="/Settings" element={<Settings_with_reddirect />}/>
            <Route path="/Statistics" element={<Statistics_with_redirrect />}/>
            <Route path="/users" element={<Users_page />}/>
            <Route path="profile/:id" element={<Prof_container page_title = "Page_title" />}/>
            <Route path="login/" element={<Login_container/>}/>
            <Route path="profile_me" element={<My_profile_container />}/>
          </Routes>
          </div>
        </BrowserRouter>
    
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
      dispatch(actions.set_user_authAC(auth));
  },
  set_is_fetchAC: (is_fetch)=> {
      dispatch(actions.set_is_fetchAC(is_fetch))
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
