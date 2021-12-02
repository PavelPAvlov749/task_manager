import styles from "../Styles/Sidebar.module.css"



const Sidebar = () => 
{
    return (
        <section className={styles.sidebar}>
            <ul className="side_list">
                <li>
                    <a href="/">Home</a>
                    <hr />
                </li>
                <li>
                    <a href="/dialogs">Massages</a>
                    <hr />
                </li>
                <li>
                    <a href="/tasks">Tasks</a>
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