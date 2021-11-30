import styles from "../Styles/Content.module.css";
import Task from "./task.jsx";


let text = "You doesnt have any tasks yet , press the "/+"/ to add new task.";
let text_content = document.querySelector(".content_area");

const Container = ()=>
{
    return (
        <div className={styles.container}>
            <div className={styles.task_status}>
                <ul>
                    <li>
                        <button type="button">New tasks</button>
                    </li>
                    <li>
                        <button type="button">In progress</button>
                    </li>
                    <li>
                        <button type="button">Test</button>
                    </li>
                    <li>
                        <button type="button">Done</button>
                    </li>
                </ul>
            </div>
            <div className={styles.content_area}>
                <Task />
                You doesnt have any tasks yet , press the "+" to add new task.
                <button type="button">+</button>
                
            </div>
        </div>
    )
};

export default Container;