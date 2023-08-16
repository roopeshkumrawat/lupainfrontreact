import { Link } from "react-router-dom";
import EN from '../images/EN-min.png';
import Es from "../images/ES-min.png";
import De from "../images/DE-min.png";
import Fr from "../images/FR-min.png";
import It from "../images/IT-min.png";
import Nl from "../images/NL-min.png";
import Sv from "../images/SV-min.png";
import Logo from "../images/logo-new.png";
import Cookies from "js-cookie";
import { HashLink } from "react-router-hash-link";
function Header(props) {

    const changeLanguage = (target) => {
        console.log(Cookies.get("googtrans"));
        Cookies.set("googtrans", `/en/${target}`, { expires: 7 });
        // setLanguage(target);
        window.location.reload();
        document.body.style.top = "0px";
    };


    return (
        <header>

            <div className="wrapper">

                <div className="units-row top">

                    <div className="translate unit-50">
                        <ul className="flags">
                            <li><Link onClick={() => {
                                changeLanguage("en");
                            }}
                                title="English" to="/" className="active English" data-lang="English"><img
                                    src={EN} alt="English" /></Link></li>
                            {" "}<li><Link onClick={() => {
                                changeLanguage("es");
                            }}
                                title="Spanish" to="/es/" className=" spanish" data-lang="Spanish"><img
                                    src={Es} alt="Spanish" /></Link></li>
                            {" "}<li><Link
                                onClick={() => {
                                    changeLanguage("de");
                                }}
                                title="German" to="/de/" className=" german" data-lang="German"><img
                                    src={De} alt="German" /></Link></li>
                            {" "}<li><Link
                                onClick={() => {
                                    changeLanguage("fr");
                                }}
                                title="French" to="/fr/" className=" french" data-lang="French"><img
                                    src={Fr} alt="French" /></Link></li>
                            {" "}<li><Link
                                onClick={() => {
                                    changeLanguage("it");
                                }}
                                title="Italian" to="/it/" className=" italian" data-lang="Italian"><img
                                    src={It} alt="Italian" /></Link></li>
                            {" "}<li><Link
                                onClick={() => {
                                    changeLanguage("nl");
                                }}
                                title="Dutch" to="/nl/" className=" dutch" data-lang="Dutch"><img
                                    src={Nl} alt="Dutch" /></Link></li>
                            {" "}<li><Link
                                onClick={() => {
                                    changeLanguage("sv");
                                }}
                                title="Swedish" to="/sv/" className=" swedish" data-lang="Swedish"><img
                                    src={Sv} alt="Swedish" /></Link></li>
                        </ul>
                    </div>

                    <div className="unit-50 social">
                        <Link rel='nofollow' className="facebook" to="/"><i className="fa fa-facebook"></i></Link>
                        {" "}<Link rel='nofollow' className="twitter" to="/" ><i className="fa fa-twitter"></i></Link>
                        {" "}<Link rel='nofollow' className="linkedin" to="/" ><i className="fa fa-linkedin"></i></Link>
                    </div>

                </div>

                <div className="units-row end">

                    <div className='unit-30 inline-block'>
                        <Link to="/" className="fl logo end">
                            <img className='padding-top-10' src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="unit-35">
                        <Link className="tel" to="tel:+34 922 796 527">Call Today +34 922 796 527</Link>
                    </div>
                    <div className="unit-35 buttons">
                        <Link to="#" className="btn user"><i className="fa fa-user"></i></Link>
                        {" "} <form action="" method="post" className="btn currency-selector">
                            <input id="currency-select" type="hidden" name="currency" />
                            <Link className="btn currency active" data-id="1" to="#">{props.currency}</Link>
                            <Link className="btn currency " onClick={props.setCurrencyEuro} data-id="1" to="#">€</Link>
                            <Link className="btn currency " onClick={props.setCurrencyDollar} data-id="2" to="#">$</Link>
                            <Link className="btn currency " onClick={props.setCurrencyPound} data-id="3" to="#">£</Link>
                        </form>
                        {" "}<Link to="/services_freevaluation" className="btn book">
                            <span style={{ lineHeight: "1.1em", fontSize: "0.9em" }}>Selling?<br />Book A FREE Valuation</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbox">
                <nav className="wrapper">
                    <ul className="fullwidth">
                        <li className=""><Link to="/">Home</Link></li>
                        <li className=""><Link to="/tenerifeproperties">Tenerife Properties</Link>
                            <ul className="dropdown">
                                <li className=""><Link to="/cristianosproperties">Los Cristianos Properties</Link>
                                </li>
                                <li className=""><Link to="/fanabeproperties">Fanabe Properties</Link></li>
                                <li className=""><Link to="/americasproperties">Las Americas
                                    Properties</Link></li>
                                <li className=""><Link to="/adejeproperties">Costa Adeje Properties</Link></li>
                                <li className=""><Link to="/eugenioproperties">San Eugenio Properties</Link></li>
                                <li className=""><Link to="/torviscasproperties">Torviscas Properties</Link></li>
                                <li className=""><HashLink to="/#primeLocations" smooth={true} duration={500}>Prime Locations</HashLink></li>
                                <li className=""><Link to="/businessproperties">Business</Link></li>
                                <li className=""><Link to="/luxury">Luxury</Link></li>
                            </ul>
                        </li>
                        <li className=""><Link to="/selling">Selling</Link>
                            <ul className="dropdown">
                                <li><Link to="/services_freevaluation">Book A FREE Valuation</Link></li>
                            </ul>
                        </li>
                        <li className=""><Link to="/rental">Rentals</Link></li>
                        <li className=""><Link to="/about">About Us</Link>
                            <ul className="dropdown">
                                <li><Link to="/historyoflupain">History of Lupain</Link></li>
                                <li><Link to="/testimonial">Testimonials</Link></li>
                            </ul>
                        </li>

                        <li className=""><Link to="#">Information</Link>
                            <ul className="dropdown">
                                <li><Link to="/buying_properties">Buying Property</Link></li>
                                <li><Link to="/selling">Selling Property</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/privateseller">Private Seller</Link></li>
                                        <li><Link to="/affiliate_agent">Affiliate Agents / Developers</Link>
                                        </li>
                                        <li><Link to="/selling_business">Selling a Business</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/paperwork">Paperwork</Link></li>
                                <li><Link to="/mortgages">Mortgages</Link></li>
                            </ul>
                        </li>

                        <li className=""><Link to="#">Services</Link>
                            <ul className="dropdown">
                                <li><Link to="/services_freevaluation">Book A FREE Valuation</Link></li>
                                <li><Link to="/services_affiliateprogram">Affiliate Program</Link></li>
                            </ul>
                        </li>

                        <li className=""><Link to="/blog">Blog</Link></li>
                        <li className=""><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;