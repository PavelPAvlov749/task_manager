import styles from "../../Styles/Sidebar.module.css"
import {NavLink} from "react-router-dom"



const Sidebar = () => 
{
    return (
        <section className={styles.sidebar}>
            <ul className="side_list">
                <li>
                    <NavLink  to="/profile_me">Home</NavLink>
                   
                </li>
                <li>
                    <NavLink to="/dialogs">Massages</NavLink>
                </li>
                <li>
                    <NavLink to="/tasks">Tasks</NavLink>
                </li>
                <li>
                    <NavLink to="/Settings">Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">Statisics</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </section>
    )
}


export default Sidebar;