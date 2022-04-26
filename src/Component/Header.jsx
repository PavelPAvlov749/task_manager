import classes from "../Styles/Header.module.css"
import { NavLink } from "react-router-dom";
import { set_current_user } from "./Redux/users_reducers";
import logo from "../../src/img/Titile_logo.png"
import styles from "../Styles/Header.module.css"


const path = logo;
const Header_isAuthTrue = (props) => {
    
    return (
    <section className={classes.Header}>
    <div className={styles.Profile_mini}>
    <img className={styles.logo} src={logo} alt="" />
    </div>
    <h1></h1>
    
    <div className={styles.Head_nav_container}>
        
        <ul className="nav">
            <li>
                <input type="text" placeholder="Find on page" id="Search"/>
                <button typ="button" id="search_btn">Search</button>
            </li>
            <li>
                <NavLink to="login/">
                    <button type="button" onClick={props.logout}>Log Out</button>
                </NavLink>
                
            </li>
        </ul>

    </div>
    <hr />
</section>
    )
}
const Header_isAuthFalse = (props) => {
    return (
        <section className={classes.Header}>
        <h1></h1>
        <img className={styles.logo} src={logo} alt="" />
        <div className={classes.Head_nav_container}>
        
       
            <ul className="nav">
                <li>
                    <input type="text" placeholder="Find on page" id="Search"/>
                    <button typ="button" id="search_btn">Search</button>
                </li>
                <li>
                    <NavLink to="login/">
                        <button type="button">Log in</button>
                    </NavLink>
                    
                </li>
            </ul>
    
        </div>
        <hr />
    </section>
        )
}

const Header = (props) => {
        if(props.auth.auth === true){
            return <Header_isAuthTrue logout={props.logout} />
        }else{
            return <Header_isAuthFalse />
        }
    
};


export default Header;