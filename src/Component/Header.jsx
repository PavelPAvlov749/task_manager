import "./../App.css";

const Header = () => {
    return (
        <section className="Header">
            <div className="Profile_mini">
                <img src="img/avatar.png" alt="" />
                <button type="button">Profile</button>
            </div>
            <div className="Head_nav_container">
                <ul className="nav">
                    <li>
                        <input type="text" placeholder="Find on page" id="Search"/>
                        <button typ="button" id="search_btn">Search</button>
                    </li>
                    <li>
                        <button type="button">Log Out</button>
                    </li>
                </ul>
                <h1></h1>
            </div>
        </section>
    );
};


export default Header;