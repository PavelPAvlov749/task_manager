import "../App.css";


const Task = ()=>
{
    <section className="Task_container">
        <div id="task">
            <h2>Title</h2>
            <ul className="task_props">
                <li>
                    Begin : 
                </li>
                <li>
                    Description :
                </li>
                <li>
                    Status :
                </li>
                <li>
                    Progress :
                </li>
            </ul>
            <button type="button">Open</button>
            <button type="button">Delete task</button>
        </div>
    </section>
}

export default Task;