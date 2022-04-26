import "../Styles/Footer.css";


const Foot = ()=>
{
    return(
        <section className="footer">
            <h2>Dev by Pavel PAvlov 2021 All Rights Reserved</h2>
            <div className="footer_list_container">
                <h2>Contacts us :</h2>
                <ul className="footer_list">
                    <li>
                        <a href="#s">Instagram</a>
                    </li>
                    <li>
                        <a href="#s">Twitter</a>
                    </li>
                    <li>
                        <a href="#s">Git</a>
                    </li>
                    <li>
                        <a href="#s">LinedIn</a>
                    </li>
                </ul>
            </div>
            <div className="footer_menu">
                <ul className="footer_menu_list">
                    <li>
                        <a href="#s">Documentation</a>
                    </li>
                    <li>
                        <a href="#s">For Buisness</a>
                    </li>
                    <li>
                        <a href="#s">API</a>
                    </li>
                    <li>
                        <a href="#s">For develpoers</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Foot;