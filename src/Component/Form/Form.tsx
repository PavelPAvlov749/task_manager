import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import styles from "../../Styles/Dialog_container.module.css"
import { field_validator_type } from "../../Validator/Vlidator";


export type form_control_params_type = {
    meta : WrappedFieldMetaProps,
    children : React.ReactNode,
    input : any,
}

//TS operator "keyof" can get the object <string> properties from keys of onaother object
//Keyof exaple :
//Declaring type
type exaple_type = {
    name : string,
    age : number,
    login : string,
    is_auth:boolean
}
//Use keuof
//This type will be contain keus of "example_type" object in the form variation of values
type new_type = keyof exaple_type;
//Use this in function (Value can be only name | age | login | is_auth)
const func = (value:new_type):void => {
    console.log(value);
}
//Will print string "name" in console
func("name");
//Error
//func("dfjg")
//Extract can get the properties from object based on same type
//Will extract type with keys only asingnable to string
type string_properties_type = Extract <keyof exaple_type,string>;

const func_1 = function<MyType extends string>(value:MyType){
    return console.log(value)
};
let a:string_properties_type = "name";
type type_1 = {
    observer : string,
    fullname : string,
    phone : string
}
type type_2 = Extract <keyof type_1,string>
let b : type_2 = "observer"
//Уточняем с каким именно типлм будет вызываться функция
func_1<type_2>("observer");

export type form_control_type = (params: form_control_params_type) => React.ReactNode;

export const Form_control: React.FC<form_control_params_type> = ({input,meta,...props}) => {   
    let is_error = meta.touched && meta.error;
    return (
        <div>
            <div>
                {props.children}
            </div>
        {is_error && <span>{meta.error}</span>}
    </div>
)};

type Textarea_type = {

}

export const Textarea: React.FC<WrappedFieldProps > = (props) => {
    const {input,meta,...restProps}  = props
    let is_error = meta.touched && meta.error;
    return <Form_control {...props}><textarea cols={30} rows={10} placeholder="dsf" {...input} {...restProps} 
    className={styles.textarea + " " + (is_error ? styles.error : "")}></textarea></Form_control>

}
