import React from "react";
import styles from "../../Styles/Dialog_container.module.css"


export const Form_control = ({input,meta,child,...props}) => {
    let is_error = meta.touched && meta.error;
    return (
        <div>
            <div>
                {props.children}
            </div>
        {is_error && <span>{meta.error}</span>}
    </div>
)
    
}
export const Textarea = (props) => {
    const {input,meta,child,...restProps}  = props
    let is_error = meta.touched && meta.error;
    return <Form_control {...props}><textarea cols="30" rows="10" {...input} {...restProps} 
    className={styles.textarea + " " + (is_error ? styles.error : "")}></textarea></Form_control>

}
