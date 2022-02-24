import styles from "../../Styles/Content.module.css";
import Task from "./task.jsx";
import React from "react";
import { add_taskAC } from "../Redux/Task_reducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import {useState} from "react";
import { Task_container } from "./task.jsx";
import { With_auth_redirrect } from "../AsyncAcion/hoc/Auth_redirect";




export const new_task_modal_window = (props)=>{
    return (
        <div className={styles.modal_window}>
            <h1>New Task</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Description" />
            <button>Ok</button>
            <button>Cancel</button>
        </div>
    )
};


export class Task_page extends React.Component{
    state = {
        adding_mode :false
    }
    componentDidMount()
    {
        console.log("Task did mount")
        console.log(this.props.tasks.user_tasks.length)
        return null;
        
    }
    activate_adding = ()=>{
        
        this.setState({
            adding_mode: true
        })
        console.log(this.state.adding_mode)
    }
    add_task (_begin,_description,_status,_progress) 
    {
        this.props.add_new_task("sfsdgsdg","124124","status124","No progress bla bla bla");
    }

    render(){
        if(this.state.adding_mode === false){
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
                        <li>
                            <button type="button" id="add_btn" onClick={this.add_task.bind(this)}>Add</button>
                        </li>
                    </ul>
                </div>
                <div className={styles.content_area}>
                    
                    {this.props.tasks.user_tasks.length === 0 ? <span className={styles.no_tasks}>No tasks yet press + to add new Task</span>
                    : this.props.tasks.user_tasks.map((el)=>{
                        return (
                            <Task_container date={el.Begin} description={el.description} progress={el.Progress} status={el.Status} id={el.id}/>
                        )
                    })}
                </div>
               
            </div>
            )
        }
        else{
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
                        <li>
                            <button type="button" id="add_btn" onClick={this.activate_adding}>Add</button>
                        </li>
                    </ul>
                </div>
                <new_task_modal_window/>
                </div>
                
            )
        }

    }
};
const MapStateToProps = function (state){
    return {
        tasks: state.user_task,
        isAuth : state.auth.auth
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        add_new_task: (begin,description,status,progress)=>
        {
            dispatch(add_taskAC(begin,description,status,progress))
        } 
    }
};
export const Task_module_with_reddirect = With_auth_redirrect(Task_page);
export const Task_container_2 = connect(MapStateToProps,mapDispatchToProps)(Task_module_with_reddirect);

