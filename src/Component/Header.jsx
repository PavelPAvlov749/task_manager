import classes from "../Styles/Header.module.css"
import { NavLink } from "react-router-dom";

const Header_isAuthTrue = (props) => {
    return (
    <section className={classes.Header}>
    <div className={classes.Profile_mini}>
        <img className={classes.Header_avatar} src="https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png" alt="" />
        <button type="button">Profile</button>
    </div>
    <h1></h1>
    
    <div className={classes.Head_nav_container}>
        <ul className="nav">
            <li>
                <input type="text" placeholder="Find on page" id="Search"/>
                <button typ="button" id="search_btn">Search</button>
            </li>
            <li>
                <NavLink to="login/">
                    <button type="button">Log Out</button>
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
    console.log(props.auth)
    window.header_auth = props;

    
        if(props.auth.auth === 0){
            return <Header_isAuthTrue />
        }else{
            return <Header_isAuthFalse />
        }
    
};


export default Header;