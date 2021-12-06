import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.jsx';
import Sidebar from './Component/Sidebar';
import Container from './Component/container';
import Foot from './Component/footer';
import Dialogs from "./Component/Dialogs.jsx";
import Settings from "./Component/Settings.jsx";
import Statistics from "./Component/Statistics.jsx";
import {BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import Task from "./Component/task";



// /////////////////////////////// Declarating a user cllass

class user {
  constructor(_name,_pass,_mail,_bornDate,_user_type)
  {
    this.name = _name;
    this.pass = _pass;
    this.mail = _mail;
    this.born_date = _bornDate;
    this.reg_time = Date();
    this.avatar = undefined;
    this.user_about = "";
    this.user_type = _user_type;
    this.user_tasks = [];
    this.efectivity = 0;
    
  };
  task_list()
  {
    return (
      {
        "Not available - ": "Function in development"
      }
    )  
  };
  Props()
  {
    return (
      {
        "avatar - ":this.avatar,
        "name - ": this.name,
        "Born date - ": this.born_date,
        "E-mail adress - ":this.mail,
        "Password - ": this.pass,
        "Type of user - ":this.user_type,
        "Description - ":this.user_about,
        "Registration time - ":this.reg_time,
        "Users tasks - ": this.task_list(),
        "Effectivity - ":this.efectivity,
      }
    );
  };
  set_avatar(_url){
      this.avatar = _url;
  };
  new_task(Task){
    this.show_user_tasks.unshift(Task);
  }
}

class Manager extends user{
  Super()
  {

  }
  get_user_props(user)
  {
      return (
        user.Props()
      )
  }
  add_user(_name,_pass,_mail,_bornDate,_user_type)
  {
      return "In development"
  };
  show_user_tasks(user){
    return user.task_list()
  };
}

///////////////////////////////////// Rendering the main component   /////////////////////////////////



function App() {
  return (
    <Router>
      <div className="root ">
      <Header />
      <Sidebar />
      <Foot />

      <Routes >
        
        <Route path="/dialogs" element={<Dialogs />}/>
        <Route path="/tasks" element={<Container />}/>
        <Route path="/Settings" element={<Settings />}/>
        <Route path="/Statistics" element={<Statistics />}/>

      
      </Routes>
      </div>
    </Router>

  )

}


export default App;
