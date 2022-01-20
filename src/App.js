import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.jsx';
import Sidebar from './Component/Sidebar/Sidebar';
import Container from './Component/Tasks/container';
import Foot from './Component/footer';
import Settings from "./Component/Settings/Settings.jsx";
import Statistics from "./Component/Statistic/Statistics.jsx";
import {BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import { Redux_container } from './Component/Dialogs/Dialogs_container';
import { Users_container } from './Component/Users/Users_container.jsx';
import Profile_container from './Component/Profile/Profile_container';
import { Prof_container } from './Component/Profile/Prog_container';
import { Header_heigh_container } from './Component/Header_container';
import { Login } from './Component/Login';


///////////////////////////////////// Rendering the main component   /////////////////////////////////



function App(props) {



  return (
    <Router>
      <div className="root ">
      <Header_heigh_container />
      <Sidebar />
      <Foot />

      <Routes >
        {/* <Route path="/dialogs" element={<Dialogs_list_container />}/> */}
        
        <Route path="/dialogs" element={<Redux_container />}/>
        <Route path="/tasks" element={<Container />}/>
        <Route path="/Settings" element={<Settings />}/>
        <Route path="/Statistics" element={<Statistics />}/>
        <Route path="/users" element={<Users_container />}/>
        <Route path="profile/:id" element={<Prof_container />}/>
        <Route path="login/" element={<Login/>}/>

      
      </Routes>
      </div>
    </Router>

  )
}


export default App;
