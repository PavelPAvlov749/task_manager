import styles from "../Styles/Content.module.css";


let text = "You doesnt have any tasks yet , press the "/+"/ to add new task.";
let text_content = document.querySelector(".content_area");

const Container = ()=>
{
    return (
        <div className={styles.container}>
            <div className={styles.content_area}>
                
            You doesnt have any tasks yet , press the "+" to add new task.
                <button type="button">+</button>
            </div>
        </div>
    )
};

export default Container;