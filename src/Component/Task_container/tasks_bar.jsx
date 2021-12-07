import "./task_bar.css";

const Task_bar = () =>
{
    return (
        <div className="task_bar">
            <ul className="task_bar_list">
                <li>
                    <button type="button">New</button>
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
    )
};

export default Task_bar;