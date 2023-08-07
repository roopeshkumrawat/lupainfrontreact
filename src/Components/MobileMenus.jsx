import burgerIcon from "../images/burger.png"

function myFunction() {
    var element = document.getElementById("slicknav_nav");
    element.classList.toggle("displayBlock");
}


function MobileMenus() {
    return (
        <div className="slicknav_menu">
            <a onClick={myFunction} href="#" aria-haspopup="true" tabindex="0" className="slicknav_btn slicknav_open" style={{ outline: 'none' }}>
                <span className="slicknav_menutxt"></span><span className="slicknav_icon slicknav_no-text">
                    <img src={burgerIcon} />
                </span>
            </a>
            <ul id="slicknav_nav" className="slicknav_nav" aria-hidden="false" role="menu" style={{ display: "none" }}>
                <li className=""><a href="/" role="menuitem" tabindex="0">Home</a></li>

                <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="/tenerife-properties-for-sale" tabindex="0">Tenerife Properties</a>
                    <span className="slicknav_arrow">►</span></a>
                    <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                        <li className=""><a href="/los-cristianos-properties-for-sale" role="menuitem" tabindex="0">Los Cristianos Properties</a></li>
                        <li className=""><a href="/fanabe-properties-for-sale" role="menuitem" tabindex="0">Fanabe Properties</a></li>
                        <li className=""><a href="/playa-de-las-americas-properties-for-sale" role="menuitem" tabindex="0">Las Americas Properties</a></li>
                        <li className=""><a href="/costa-adeje-properties-for-sale" role="menuitem" tabindex="0">Costa Adeje Properties</a></li>
                        <li className=""><a href="/san-eugenio-properties-for-sale" role="menuitem" tabindex="0">San Eugenio Properties</a></li>
                        <li className=""><a href="/torviscas-properties-for-sale" role="menuitem" tabindex="0">Torviscas Properties</a></li>
                        <li className=""><a href="/#prime-locations" role="menuitem" tabindex="0">Prime Locations</a></li>
                        <li className=""><a href="/properties-for-sale/business-properties" role="menuitem" tabindex="0">Business</a></li>
                        <li className=""><a href="/properties-for-sale?luxury=1" role="menuitem" tabindex="0">Luxury</a></li>
                    </ul>
                </li>
                <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="/sell-your-tenerife-property" tabindex="0">Selling</a>
                    <span className="slicknav_arrow">►</span></a>
                    <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                        <li><a href="/free-property-valuation" role="menuitem" tabindex="0">Book A FREE Valuation</a></li>
                    </ul>
                </li>
                <li className=""><a href="/holiday-rentals-tenerife" role="menuitem" tabindex="0">Rentals</a></li>
                <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="/about-us" tabindex="0">About Us</a>
                    <span className="slicknav_arrow">►</span></a>
                    <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                        <li><a href="/history-of-lupain" role="menuitem" tabindex="0">History of Lupain</a></li>
                        <li><a href="/testimonials" role="menuitem" tabindex="0">Testimonials</a></li>
                    </ul>
                </li>

                <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="#" tabindex="0">Information</a>
                    <span className="slicknav_arrow">►</span></a>
                    <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                        <li><a href="/buying-property" role="menuitem" tabindex="0">Buying Property</a></li>
                        <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="/sell-your-tenerife-property" tabindex="0">Selling Property</a>
                            <span className="slicknav_arrow">►</span></a>
                            <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                                <li><a href="/private-seller" role="menuitem" tabindex="0">Private Seller</a></li>
                                <li><a href="/affiliate-agents-developers" role="menuitem" tabindex="0">Affiliate Agents / Developers</a></li>
                                <li><a href="/selling-a-business" role="menuitem" tabindex="0">Selling a Business</a></li>
                            </ul>
                        </li>
                        <li><a href="/paperwork" role="menuitem" tabindex="0">Paperwork</a></li>
                        <li><a href="/mortgages" role="menuitem" tabindex="0">Mortgages</a></li>
                    </ul>
                </li>

                <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="0" className="slicknav_item slicknav_row" style={{ outline: 'none' }}><a href="#" tabindex="0">Services</a>
                    <span className="slicknav_arrow">►</span></a>
                    <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                        <li><a href="/free-property-valuation" role="menuitem" tabindex="0">Book A FREE Valuation</a></li>
                        <li><a href="/affiliate-program" role="menuitem" tabindex="0">Affiliate Program</a></li>
                    </ul>
                </li>

                <li className=""><a href="/blog" role="menuitem" tabindex="0">Blog</a></li>
                <li className=""><a href="/contact" role="menuitem" tabindex="0">Contact</a></li>
            </ul>
        </div>

    )
}
export default MobileMenus;