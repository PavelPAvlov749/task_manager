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

///////////////////////////////////// Rendering the main component   /////////////////////////////////



function App(props) {


  return (
    <Router>
      <div className="root ">
      <Header />
      <Sidebar />
      <Foot />

      <Routes >
        
        <Route path="/dialogs" element={<Dialogs users={props.store.state.users} dispatch={props.dispatch} 
          messages={props.store.messages} newMessage={props.store.newMessage} />}/>
          
        <Route path="/tasks" element={<Container />}/>
        <Route path="/Settings" element={<Settings />}/>
        <Route path="/Statistics" element={<Statistics />}/>

      
      </Routes>
      </div>
    </Router>

  )

}


export default App;
