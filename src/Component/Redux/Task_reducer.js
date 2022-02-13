const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const GET_TASK = "GET_TASK";
const UPDATE_TASK = "UPDATE_TASK";

let initial_state = 
{
    user_tasks :[]
}

export const task_reducer = function (state = initial_state,action)
{
    switch(action.type)
    {
        case ADD_TASK:
           return {...state,...state.user_tasks.push({Begin:action.begin,Description:action.description,
            Status:action.status,Progress:action.progress,
            // task_id: state.user_tasks.length()
        })
    };
        case DELETE_TASK:
            return {...state,user_tasks:state.user_tasks.filter((t)=>{t.id != action.id})} 
        default:
            return state;
    }
}

export const add_taskAC = function (Begin,Description,Status,Progress)
{
    return {
        type: "ADD_TASK",
        begin:Begin,
        description:Description,
        status:Status,
        progress:Progress
    }
};
export const delete_taskAC = function (_task_id){
    return {
        type: "DELETE_TASK",
        id: _task_id
    }
}