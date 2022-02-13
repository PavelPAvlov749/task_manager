import { task_reducer } from "./Task_reducer";
import { add_taskAC } from "./Task_reducer";
import { delete_taskAC } from "./Task_reducer";
import react from "react"



it("User tasks should take a new ellement with values: begin description,status,progress",()=>{
    let action = add_taskAC("Begin","Description","Status","Progress");
    let state = {
        user_tasks:[]
    }

    let new_state = task_reducer(state,action);

    expect(new_state.user_tasks.length).toBe(1)
});
it("Users task array should be decremented",()=>{
    let state = {
        user_tasks:[
            {id:1,Task:"slkjglwrjglj"},
            {id:2,Task:"slkjglwrjglj"},
            {id:3,Task:"slkjglwrjglj"},
            {id:4,Task:"slkjglwrjglj"}
        ]
    };

    let action = delete_taskAC(1)
    let new_state = task_reducer(state,action)
    expect(new_state.user_tasks.length).toBe(3)
})

