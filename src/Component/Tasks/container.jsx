import styles from "../../Styles/Content.module.css";
import Task from "./task.jsx";
import React from "react";
import { add_taskAC } from "../Redux/Task_reducer";
import { connect } from "react-redux";


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


export class Task_page extends React.Component{
    componentDidMount()
    {
        console.log("Task did mount")
    }
    add_task (_begin,_description,_status,_progress) 
    {
        debugger;
        this.props.add_new_task("sfsdgsdg","124124","status124","No progress bla bla bla");
    }

    render(){
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
                <button type="button" id="add_btn" onClick={this.add_task.bind(this)}>+</button>
               
            </div>
        </div>
        )
    }
}

const MapStateToProps = function (state){
    return {
        tasks: state.users_task.users_task
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        add_new_task: (begin,description,status,progress)=>
        {
            dispatch(add_taskAC(begin,description,status,progress))
        } 
    }
}

export const Task_container_2 = connect(MapStateToProps,mapDispatchToProps)(Task_page)

