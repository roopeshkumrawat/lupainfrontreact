// import React from "react";
// import { Link } from "react-router-dom";
import EN from '../images/EN-min.png'
import Es from "../images/ES-min.png"
import De from "../images/DE-min.png"
import Fr from "../images/FR-min.png"
import It from "../images/IT-min.png"
import Nl from "../images/NL-min.png"
import Sv from "../images/SV-min.png"
import Logo from "../images/logo-new.png"

function Header() {
    return (
        <header>
            <div className="wrapper">

                <div className="units-row top">

                    <div className="translate unit-50">
                        <ul className="flags">
                            <li><a title="English" href="/" className="active English" data-lang="English"><img
                                src={EN} alt="English" /></a></li>
                            {" "}<li><a title="Spanish" href="/es/" className=" spanish" data-lang="Spanish"><img
                                src={Es} alt="Spanish" /></a></li>
                            {" "}<li><a title="German" href="/de/" className=" german" data-lang="German"><img
                                src={De} alt="German" /></a></li>
                            {" "}<li><a title="French" href="/fr/" className=" french" data-lang="French"><img
                                src={Fr} alt="French" /></a></li>
                            {" "}<li><a title="Italian" href="/it/" className=" italian" data-lang="Italian"><img
                                src={It} alt="Italian" /></a></li>
                            {" "}<li><a title="Dutch" href="/nl/" className=" dutch" data-lang="Dutch"><img
                                src={Nl} alt="Dutch" /></a></li>
                            {" "}<li><a title="Swedish" href="/sv/" className=" swedish" data-lang="Swedish"><img
                                src={Sv} alt="Swedish" /></a></li>
                        </ul>
                    </div>

                    <div className="unit-50 social">
                        <a rel='nofollow' className="facebook" href="https://www.facebook.com/lupainproperites"
                            target="_blank"><i className="fa fa-facebook"></i></a>
                        {" "}<a rel='nofollow' className="twitter"
                            href="https://twitter.com/lupain_property" target="_blank"><i className="fa fa-twitter"></i></a>
                        {" "}<a rel='nofollow' className="linkedin"
                            href="https://www.linkedin.com/company/lupain-properties-s-l-" target="_blank"><i
                                className="fa fa-linkedin"></i></a>
                    </div>

                </div>

                <div className="units-row end">

                    <div className='unit-30 inline-block'>
                        <a href="/" className="fl logo end">
                            <img className='padding-top-10' src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="unit-35">
                        <a className="tel" href="tel:+34 922 796 527">Call Today +34 922 796 527</a>
                    </div>
                    <div className="unit-35 buttons">
                        <a href="/account" className="btn user"><i className="fa fa-user"></i></a>
                       {" "} <form action="" method="post" className="btn currency-selector">
                            <input id="currency-select" type="hidden" name="currency" />
                            <a className="btn currency active" data-id="1" href="javascript:;">	&euro;</a>
                            <a className="btn currency " data-id="2" href="javascript:;">$</a>
                            <a className="btn currency " data-id="3" href="javascript:;">&pound;</a>
                        </form>
                       {" "}<a href="/free-property-valuation" className="btn book">
                            <span style={{ lineHeight: "1.1em", fontSize: "0.9em" }}>Selling?<br />Book A FREE Valuation</span>
                        </a>
                    </div>

                </div>

            </div>
            <div className="navbox">
                <nav className="wrapper">
                    <ul className="fullwidth">
                        <li className=""><a href="/">Home</a></li>

                        <li className=""><a href="/tenerife-properties-for-sale">Tenerife Properties</a>
                            <ul className="dropdown">
                                <li className=""><a href="/los-cristianos-properties-for-sale">Los Cristianos Properties</a>
                                </li>
                                <li className=""><a href="/fanabe-properties-for-sale">Fanabe Properties</a></li>
                                <li className=""><a href="/playa-de-las-americas-properties-for-sale">Las Americas
                                    Properties</a></li>
                                <li className=""><a href="/costa-adeje-properties-for-sale">Costa Adeje Properties</a></li>
                                <li className=""><a href="/san-eugenio-properties-for-sale">San Eugenio Properties</a></li>
                                <li className=""><a href="/torviscas-properties-for-sale">Torviscas Properties</a></li>
                                <li className=""><a href="/#prime-locations">Prime Locations</a></li>
                                <li className=""><a href="/properties-for-sale/business-properties">Business</a></li>
                                <li className=""><a href="/properties-for-sale?luxury=1">Luxury</a></li>
                            </ul>
                        </li>
                        <li className=""><a href="/sell-your-tenerife-property">Selling</a>
                            <ul className="dropdown">
                                <li><a href="/free-property-valuation">Book A FREE Valuation</a></li>
                            </ul>
                        </li>
                        <li className=""><a href="/holiday-rentals-tenerife">Rentals</a></li>
                        <li className=""><a href="/about-us">About Us</a>
                            <ul className="dropdown">
                                <li><a href="/history-of-lupain">History of Lupain</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </li>

                        <li className=""><a href="#">Information</a>
                            <ul className="dropdown">
                                <li><a href="/buying-property">Buying Property</a></li>
                                <li><a href="/sell-your-tenerife-property">Selling Property</a>
                                    <ul className="dropdown">
                                        <li><a href="/private-seller">Private Seller</a></li>
                                        <li><a href="/affiliate-agents-developers">Affiliate Agents / Developers</a>
                                        </li>
                                        <li><a href="/selling-a-business">Selling a Business</a></li>
                                    </ul>
                                </li>
                                <li><a href="/paperwork">Paperwork</a></li>
                                <li><a href="/mortgages">Mortgages</a></li>
                            </ul>
                        </li>

                        <li className=""><a href="#">Services</a>
                            <ul className="dropdown">
                                <li><a href="/free-property-valuation">Book A FREE Valuation</a></li>
                                <li><a href="/affiliate-program">Affiliate Program</a></li>
                            </ul>
                        </li>

                        <li className=""><a href="/blog">Blog</a></li>
                        <li className=""><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;