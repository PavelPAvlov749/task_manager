import styles from "../../Styles/Content.module.css";
import Task from "./task.jsx";


class Task_{
    constructor(_name,_text)
    {
        this.status = "New";
        this.name = _name;
        this.task_text = _text;
        this.date = Date();
    }
    get_name()
    {
        return this.name;
    }
    set_status(_status)
    {
        return this.status;
    }
    get_text()
    {
        return this.text;
    }
    get_date()
    {
        return this.date;
    }
    
}

let Task_01 = new Task_("Task one","Первая таска для отладки класса Task_");

let task_list = [];
task_list.unshift(Task_01);



function Container() {
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
                <Task name={Task_01.get_name()} date={Task_01.get_date()} description={Task_01.get_text()} />
                {/* You doesnt have any tasks yet , press the "+" to add new task. */}
                {/* <button type="button" id="add_btn">+</button> */}
               
            </div>
        </div>
    );
}

export default Container;