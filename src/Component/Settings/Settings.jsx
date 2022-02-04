import react from "react";
import {NavLink} from "react-router-dom";
import styles from "../../Styles/Settings.module.css";


const Settings = ()=> {
    return (
        <section className={styles.settings_container}>
            <div className={styles.settings_title}>
                <h2>Settings</h2>
                <hr />
            </div>
       
            <section className={styles.settings_list}>
                <div className={styles.settings_list}>
                    <ul>
                        <li>
                            <NavLink to="#s" hoverClassName={styles.hover}>Interface</NavLink> 
                        </li>
                        <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>Acount</NavLink> 
                        </li>
                        <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>Privacy</NavLink>
                        </li>
                          <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>Notifications</NavLink> 
                        </li>
                          <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>Language</NavLink>
                        </li>
                          <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>Text</NavLink> 
                        </li>
                          <li>
                            <NavLink to="#S" hoverClassName={styles.hover}>System</NavLink> 
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Settings;