import styles from "../Styles/Task.module.css";


const Task = (props)=>
{
    return(
    <section className={styles.task}>
        <div id="task">
            <div className={styles.name_div}>
                <h2>{props.name}</h2>
            </div>
            <ul className="task_props">
                <li>
                    Begin : {props.date}
                </li>
                <li>
                    Description : {props.description}
                </li>
                <li>
                    Status :
                </li>
                <li>
                    Progress :
                </li>
            </ul>
            <hr />
            <div className={styles.btn_div}>
                <button type="button">Open</button>
                <button type="button">Rename</button>
                <button type="button">Delete task</button>
            </div>
            
        </div>
    </section>
    )
}

export default Task;
