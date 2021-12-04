import react from "react";
import {NavLink} from "react-router-dom";
import styles from "../Styles/Settings.module.css";


const Settings = ()=> {
    return (
        <section className={styles.settings_container}>
        <h2>Settings</h2>
            <section className="settings_list">
                <div className="setting_list_tittle">
                    <ul>
                        <li>
                            <NavLink to="/Interface">Interface</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/Acount">Acount</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/Privacy">Privacy</NavLink>
                        </li>
                          <li>
                            <NavLink to="/Notifications">Notifications</NavLink> 
                        </li>
                          <li>
                            <NavLink to="/Language">Language</NavLink>
                        </li>
                          <li>
                            <NavLink to="/Text">Text</NavLink> 
                        </li>
                          <li>
                            <NavLink to="/System">System</NavLink> 
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Settings;