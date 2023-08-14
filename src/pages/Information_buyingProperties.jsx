import React from 'react'
import AboutNavWithEnquiryBox from '../Components/globalComponents/AboutNavWithEnquiryBox'
import buyingimg1 from '../images/HOME-SEARCH-ICON.jpg'
import buyingimg2 from "../images/prop_logo.jpg"
import { Link } from 'react-router-dom'

export default function Information_buyingProperties() {
    return (
        <section className="selling">

            <div className="wrapper units-row">

                <div className="content unit-70">

                    <h1>Investing in Property in Tenerife</h1>

                    <p>With access to hundreds of properties for sale, not only can we offer you excellent choice, we also pride ourselves on our professional approach and exceptional service. Our team has over 17 years experience of buying and selling Tenerife property and an enviable reputation for offering a friendly, honest and dependable service. You can be assured that we have your very best interests at heart. </p>

                    <ul className="blocks-2">

                        <li className="block-first">
                            <div className="image" >
                                <img src={buyingimg1} />
                            </div>
                            <h3>Advanced Property Search</h3>
                            <p>Lupain Tenerife Estate Agents have created a specific advanced search functions to make your property search quick and effortless. Included in these extra search features are quick reference search on a specific property and complex search.</p>
                            <p>Lupain Tenerife Estate Agents have also developed two useful features one of which is the latest properties search to view properties added in the 'last week' &amp; 'last month'. This is an excellent way to keep up-to-date with new properties quickly and easily.</p>
                            <p><Link to="/tenerife-properties-for-sale">Start searching</Link></p>
                        </li>

                        <li>
                            <div className="image">
                                <img src={buyingimg2} />
                            </div>
                            <h3>Hundreds of Properties</h3>
                            <p>On site you will find an extensive Tenerife Property Database, with over 750 properties for sale in Tenerife including some of the more affluent, Villas in Fanabe, San Eugenio and Torviscas.</p>
                            <p>Our team can also offer you a range of properties in the popular resorts of Los Cristianos and Playa de Las Americas or residential properties in Chayofa. Our database also offers a wide range of businesses, so whether you are looking for a bar, hairdressers or a factory, you can rest assured that our team will be able to assist you.</p>
                        </li>
                    </ul>
                </div>
                < AboutNavWithEnquiryBox />
            </div>
        </section>
    )
}
