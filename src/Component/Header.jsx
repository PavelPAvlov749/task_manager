import classes from "../Styles/Header.module.css"

const Header = () => {
    return (
        <section className={classes.Header}>
            <div className={classes.Profile_mini}>
                <img src="#" alt="" />
                <button type="button">Profile</button>
            </div>
            
            <div className={classes.Head_nav_container}>
                <ul className="nav">
                    <li>
                        <input type="text" placeholder="Find on page" id="Search"/>
                        <button typ="button" id="search_btn">Search</button>
                    </li>
                    <li>
                        <button type="button">Log Out</button>
                    </li>
                </ul>

            </div>
            <hr />
        </section>
    );
};


export default Header;