import styles from "../../Styles/Task.module.css";
import React from "react";
import { delete_taskAC } from "../Redux/Task_reducer";
import { connect } from "react-redux";


export class Task extends React.PureComponent
{
   
    remove_task()
    {
        this.props.delete_task(this.props.id)
        console.log("DELETE TASK :" + this.props.id)
    }
    render(){
        
        return(
            <section className={styles.task}>
            <div id="task">
                <div className={styles.name_div}>
                    <h2>{this.props.name}</h2>
                </div>
                <ul className="task_props">
                    <li>
                        Task ID: {this.props.id}
                    </li>
                    <li>
                        Begin : {this.props.date}
                    </li>
                    <li>
                        Description : {this.props.description}
                    </li>
                    <li>
                        Status : {this.props.status}
                    </li>
                    <li>
                        Progress : {this.props.progress}
                    </li>
                </ul>
                <hr />
                <div className={styles.btn_div}>
                    <button type="button">Open</button>
                    <button type="button">Rename</button>
                    <button type="button" onClick={this.remove_task.bind(this)}>Delete task</button>
                </div>
                
            </div>
        </section>
        )
    }   
};

let MapStateToProps = (state)=>{
    return {
        tasks: state.user_task
    }
};
let MapDispatchToProps = (dispatch)=>{
    return {
        delete_task: (_id)=>{
            dispatch(delete_taskAC(_id))
        }
    }
};

export const Task_container =  connect(MapStateToProps,MapDispatchToProps)(Task);
export default Task;


