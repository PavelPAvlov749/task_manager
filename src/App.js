import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.jsx';
import Sidebar from './Component/Sidebar';
import Container from './Component/container';
import Foot from './Component/footer';
import Dialogs from "./Component/Dialogs.jsx";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";


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

      
      </Routes>
      </div>
    </Router>

  )

}


export default App;
