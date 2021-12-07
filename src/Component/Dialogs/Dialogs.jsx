import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
// import Dialog from "./Dialog";


const Dialog = (props) =>{
    let path = "dialogs/" + props.id;
    return (
        <div className={styles.dialog + " " + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props)=>{
    return(
        <div className={styles.text_content}>
            {props.message}
        </div>
    )
}
let dialog_data = [
    {name:"Ivan",id:"1"},
    {name:"Pavel",id:"2"},
    {name:"Kristina",id:"3"},
    {name:"Sasha",id:"4"},
    {name:"Andrew",id:"5"},
    {name:"Igor",id:"6"},
    
];
let dialogs_data = dialog_data.map(el=>{
    return(
        <Dialog name={el.name} id={el.id} />
    )
})




const Dialogs =  (props)=> {


    // let messages_data = [
    //     {id:1,message:"Hi!"},
    //     {id:2,message:"How are you?"},
    //     {id:3,message:"Fine ande you?"},
    //     {id:4,message:"Bye"},
    //     {id:5,message:"Bye eqfwefwef"}
    //   ];

    // let post_el = messages_data.map(el => {
    //     return (
    //         <li className={styles.dialog_item_li}>
    //         <Message message = {el.message} className={styles.dialog_item_li} />
    //         </li>
    //     )
    // })

    return (
        <div className={styles.dialogs_list_container}>
            <div className={styles.dialogs}>
                Dialog list:
                <hr />
                <section className={styles.dialogs_list}>
                    <ul className={styles.dialog_item}>
                        {dialogs_data}
                    </ul>
                </section>
            </div>

            <div className={styles.dialogs_container}>
                Dialogs
                <hr />
                <div className={styles.text_content}>
                    {props.message}
                </div>
            </div>

        
        </div>
    )
}


export default Dialogs;