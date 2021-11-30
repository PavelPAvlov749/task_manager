import styles from "../Styles/Sidebar.module.css"



const Sidebar = () => 
{
    return (
        <section className={styles.sidebar}>
            <ul className="side_list">
                <li>
                    <a href="#s">Home</a>
                    <hr />
                </li>
                <li>
                    <a href="#S">Massages</a>
                    <hr />
                </li>
                <li>
                    <a href="#s">Tasks</a>
                    <hr />
                </li>
                <li>
                    <a href="#s">Settings</a>
                    <hr />
                </li>
                <li>
                    <a href="$s">Statisics</a>
                    <hr />
                </li>
            </ul>
        </section>
    )
}


export default Sidebar;