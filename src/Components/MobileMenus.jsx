import burgerIcon from "../images/burger.png";
import { Link } from "react-router-dom";

function myFunction() {
    var element = document.getElementById("slicknav_nav");
    element.classList.toggle("displayBlock");
}


function MobileMenus() {
    function displayNone(){
        document.getElementById("topBar").classList.add("displayNone");

    }

    return (
        <>
            <div class="cc_banner-wrapper " id="topBar">
                <div class="cc_banner cc_container cc_container--open">
                    <span  onClick={displayNone} class="cc_btn cc_btn_accept_all">Got it!</span>
                    <p class="cc_message">This wsebsite uses cookies to ensure you get the best experience on our website </p>
                    {/* <a class="cc_logo" target="_blank" href="">Cookie Consent plugin for the EU cookie law</a> */}
                </div>
            </div>

            <div className="slicknav_menu">
                <Link onClick={myFunction} to="#" aria-haspopup="true" tabIndex="0" className="slicknav_btn slicknav_open" style={{ outline: 'none' }}>
                    <span className="slicknav_menutxt"></span><span className="slicknav_icon slicknav_no-text">
                        <img src={burgerIcon} alt="toggleMenu" />
                    </span>
                </Link>
                <ul id="slicknav_nav" className="slicknav_nav" aria-hidden="false" role="menu" style={{ display: "none" }}>
                    <li className="">
                        <Link to="/" role="menuitem" tabIndex="0">Home</Link>
                    </li>

                    <li className="slicknav_collapsed slicknav_parent">
                        <Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>
                            <Link to="/tenerife-properties-for-sale" tabIndex="0">Tenerife Properties</Link>
                            <span className="slicknav_arrow">►</span>
                        </Link>
                        <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li className=""><Link to="/los-cristianos-properties-for-sale" role="menuitem" tabIndex="0">Los Cristianos Properties</Link></li>
                            <li className=""><Link to="/fanabe-properties-for-sale" role="menuitem" tabIndex="0">Fanabe Properties</Link></li>
                            <li className=""><Link to="/playa-de-las-americas-properties-for-sale" role="menuitem" tabIndex="0">Las Americas Properties</Link></li>
                            <li className=""><Link to="/costa-adeje-properties-for-sale" role="menuitem" tabIndex="0">Costa Adeje Properties</Link></li>
                            <li className=""><Link to="/san-eugenio-properties-for-sale" role="menuitem" tabIndex="0">San Eugenio Properties</Link></li>
                            <li className=""><Link to="/torviscas-properties-for-sale" role="menuitem" tabIndex="0">Torviscas Properties</Link></li>
                            <li className=""><Link to="/#prime-locations" role="menuitem" tabIndex="0">Prime Locations</Link></li>
                            <li className=""><Link to="/properties-for-sale/business-properties" role="menuitem" tabIndex="0">Business</Link></li>
                            <li className=""><Link to="/properties-for-sale?luxury=1" role="menuitem" tabIndex="0">Luxury</Link></li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>
                            <Link to="/sell-your-tenerife-property" tabIndex="0">Selling</Link>
                            <span className="slicknav_arrow">►</span>
                        </Link>
                        <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li>
                                <Link to="/free-property-valuation" role="menuitem" tabIndex="0">Book A FREE Valuation</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <Link to="/holiday-rentals-tenerife" role="menuitem" tabIndex="0">Rentals</Link>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>
                            <Link to="/about-us" tabIndex="0">About Us</Link>
                            <span className="slicknav_arrow">►</span>
                        </Link>
                        <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li><Link to="/history-of-lupain" role="menuitem" tabIndex="0">History of Lupain</Link></li>
                            <li><Link to="/testimonials" role="menuitem" tabIndex="0">Testimonials</Link></li>
                        </ul>
                    </li>

                    <li className="slicknav_collapsed slicknav_parent"><Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><Link to="#" tabIndex="0">Information</Link>
                        <span className="slicknav_arrow">►</span></Link>
                        <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li><Link to="/buying-property" role="menuitem" tabIndex="0">Buying Property</Link></li>
                            <li className="slicknav_collapsed slicknav_parent"><Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><Link to="/sell-your-tenerife-property" tabIndex="0">Selling Property</Link>
                                <span className="slicknav_arrow">►</span></Link>
                                <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                                    <li><Link to="/private-seller" role="menuitem" tabIndex="0">Private Seller</Link></li>
                                    <li><Link to="/affiliate-agents-developers" role="menuitem" tabIndex="0">Affiliate Agents / Developers</Link></li>
                                    <li><Link to="/selling-a-business" role="menuitem" tabIndex="0">Selling a Business</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/paperwork" role="menuitem" tabIndex="0">Paperwork</Link></li>
                            <li><Link to="/mortgages" role="menuitem" tabIndex="0">Mortgages</Link></li>
                        </ul>
                    </li>

                    <li className="slicknav_collapsed slicknav_parent">
                        <Link to="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>
                            <Link to="#" tabIndex="0">Services</Link>
                            <span className="slicknav_arrow">►</span>
                        </Link>
                        <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li><Link to="/free-property-valuation" role="menuitem" tabIndex="0">Book A FREE Valuation</Link></li>
                            <li><Link to="/affiliate-program" role="menuitem" tabIndex="0">Affiliate Program</Link></li>
                        </ul>
                    </li>

                    <li className=""><Link to="/blog" role="menuitem" tabIndex="0">Blog</Link></li>
                    <li className=""><Link to="/contact" role="menuitem" tabIndex="0">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}
export default MobileMenus;