import { updateSyncErrors } from "redux-form"

export const required = (value) => {
    if(value){
        console.log(value)
        return undefined
    }else
    return "Field is reqired"
}

export const Min_lenght_creator = (min_lenght) => (value) => {
    if(value.lenght < min_lenght || value === ""){
        return "Empty message!"
    }else
    return undefined
}