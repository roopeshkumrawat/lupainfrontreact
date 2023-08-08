import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>

            <div className=" footer">

                <div className="wrapper units-row end">

                    <div className="unit-30 contact">
                        <div className="address">
                            <strong>Lupain Tenerife Estate Agents</strong>
                            <p>Edifico Cristian Sur, Av. de Ámsterdam, 4,<br />
                                38650 Los Cristianos,<br />
                                Santa Cruz de Tenerife, Spain</p>
                        </div>
                        <div className="tel">
                            <strong>Tel:</strong>
                            <p><Link to="tel:+34922796527">+34 922 796 527</Link></p>
                        </div>
                        <div className="email">
                            <strong>Email:</strong>
                            <p><Link to="mailto:info@lupain.com">info@lupain.com</Link></p>
                        </div>
                    </div>
                    <div className="unit-30 contact">
                        <div className="hours">
                            <strong>Office Opening Hours:</strong>
                            <p>Mon - Thursday: 9.30 to 18.30 GMT<br />
                                Friday: 9.30 to 18.00 GMT<br />
                                Saturday: 9.30 to 13.30 GMT</p>
                        </div>
                        <div className="tripadvisor">
                            {/* <!--<img src="/assets/img/trip-advisor-2017.png" alt="">--> */}
                        </div>
                    </div>
                    <div className="unit-40 subscribe">
                        <h3>Sign up to our Newsletter</h3>
                        <p>Get all the latest properties, news and more</p>
                        <p className="newsletter-success">You have been added to our mailing list</p>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="NAME"/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="EMAIL"/>
                        </div>
                        <p className="newsletter-error">There was an issue subscribing you to our newsletter
                        </p>
                        <input type="submit" value="Subscribe"/>
                    </div>

                </div>

            </div>

            <div className="bottom">

                <div className="wrapper units-row end">

                    <div className="copyright unit-75">
                        Copyright &copy; 2023 Lupain Tenerife Estate Agents. All Rights Reserved.
                        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms &amp; Conditions</Link> | <Link
                            to="/locations">Locations</Link>
                    </div>
                </div>

            </div>

        </footer>

    )
}
export default Footer;