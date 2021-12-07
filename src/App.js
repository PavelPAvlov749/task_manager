import logo from './logo.svg';
import './Styles/App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Container from './Component/Container/container';
import Foot from './Component/Footer/footer';
import Dialogs from "./Component/Dialogs/Dialogs.jsx";
import Settings from "./Component/Settings/Settings";
import Statistics from "./Component/Statistics/Statistics";
import {BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import User from "./js/User"
import styles from "../src/Component/Dialogs/Dialogs.module.css";


const Message = (props)=>{
  return(
      <div className={styles.text_content}>
          {props.message_item}
      </div>
  )
}


function App(props) {


  let messages = [
    {id:1,message:"Hi!"},
    {id:2,message:"How are you?"},
    {id:3,message:"Fine ande you?"},
    {id:4,message:"Bye"},
    {id:5,message:"Bye eqfwefwef"}
  ]


  let render_text = messages.map(el=>{
    return (
      <li className={styles.dialog_item_li}>
           <Message message_item={el.message} />
      </li>
    )
  })
  
  return (
    <Router>
      <div className="root ">
      <Header />
      <Sidebar />
      <Foot />

      <Routes >
        
        <Route path="/dialogs/*" element={<Dialogs message={render_text} />}/>
        <Route path="/tasks" element={<Container />}/>
        <Route path="/Settings" element={<Settings />}/>
        <Route path="/Statistics" element={<Statistics />}/>

      
      </Routes>
      </div>
    </Router>

  )

}


export default App;
