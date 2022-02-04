import styles from "../../Styles/Sidebar.module.css"
import {NavLink} from "react-router-dom"



const Sidebar = () => 
{
    return (
        <section className={styles.sidebar}>
            <ul className="side_list">
                <li>
                    <NavLink  to="/profile_me">Home</NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/dialogs">Massages</NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/tasks">Tasks</NavLink>
                    <hr />  
                </li>
                <li>
                    <NavLink to="/Settings">Settings</NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/statistics">Statisics</NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </section>
    )
}


export default Sidebar;