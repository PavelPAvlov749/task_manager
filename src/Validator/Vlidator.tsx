export type field_validator_type = (value:string)=>string | undefined;



export const required :field_validator_type = (value)=>{
    if(value){
        return undefined
    }else
    return "Field is reqired"
}

export const Min_lenght_creator = (min_lenght:number):field_validator_type => (value) => {
    if(value.length < min_lenght || value === ""){
        return "Empty message!"
    }else
    return undefined
}