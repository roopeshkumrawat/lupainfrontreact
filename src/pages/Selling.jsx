import React from 'react';
import AboutNavWithEnquiryBox from '../Components/globalComponents/AboutNavWithEnquiryBox';
import { Link } from 'react-router-dom';
import sellin1 from '../images/selling_1.jpg'
import sellin2 from '../images/selling_2.jpg'
import sellin3 from '../images/selling_3.jpg'
import sellin4 from '../images/selling_4.jpg'
import selling5 from "../images/prop_logo.jpg"
import selling6 from '../images/HOME-SEARCH-ICON.jpg'
const Selling = (props) => {
    return (
        <section className="selling">
            <div className="wrapper units-row">
                <div className="content unit-70">
                    <h1>Sell Your Tenerife Property</h1>
                    <h2>Do you want to sell your Tenerife property?</h2>
                    <p>Using a respected and experienced <Link to="/about-us">estate agent in Tenerife</Link> Selling your property is equally important as if you were buying a property here.</p>
                    <ul className="blocks-2">
                        <li className="block-first">
                            <div className="image" >
                                <img src={sellin1} />
                            </div>
                            <h3>Detailed Property Valuations</h3>
                            <p>Our master valuers have completed numerous valuations in Tenerife, giving us current and unparalleled information of property estimations in Tenerife <Link to="/free-property-valuation">Contact us for a Free valuation...</Link></p>
                        </li>
                        <li>
                            <div className="image" >
                                <img src={sellin2} />
                            </div>
                            <h3>Guaranteed "no sale, no fee"</h3>
                            <p>You will be charged no fees whatsoever until the contracts of both parties are agreed and signed. This is our guarantee"</p>
                        </li>
                        <li className="block-first">
                            <div className="image" >
                                <img src={sellin3} />
                            </div>
                            <h3>Concentrated Marketing</h3>
                            <p>We will add your Tenerife property to our database for <em>free</em>, and by doing so your business or  property will be placed in front of thousands of buyers that visit our site daily. At Lupain Tenerife Estate Agents we work hard to be present on the front page of many search results on all the major search engines.</p>
                        </li>
                        <li>
                            <div className="image" >
                                <img src={sellin4}/>
                            </div>
                            <h3>Top Website</h3>
                            <p>At Lupain Tenerife Estate Agents we have a website specifically designed to let prospective buyers view exactly what your property has to offer. Large colour photographs, local information and guides and a detailed description of your property will give buyers all the information that they need.</p>
                        </li>
                        <li className="block-first">
                            <div className="image" >
                                <img src={selling5} />
                            </div>
                            <h3>Advertised Property Catagories</h3>
                            <p>Our extra advertising pages will give your property the extra exposure necessary in order to be sold quickly. Your property will be targeted by the correct audience as whether you are selling a luxury villa or a trying to get a quick sale by offering your property at a reduced price we will make sure that your property is exposed to exactly the right audience. We have a special section Lottery Winner Properties where we list our properties that are for sale with a price tag in excess of €500,000 which is specifically design to target buyers interested in luxury properties in Tenerife. We also have a Seasonal Sale section where reduced price and bargain priced properties are listed which is ranked highly on search engines and is very popular with first time buyers. All of this will give your property the maximum exposure it deserves.</p>
                        </li>
                        <li>
                            <div className="image">
                                <img src={selling6} />
                            </div>
                            <h3>Lupain Tenerife Estate Agents New-to-the-market advanced search</h3>
                            <p>We understand that newly uploaded properties receive the most attention from buyers. As a result we have tailored our Advanced Search function which displays the most recently added properties to our database first. Buyers can even choose to search through properties which have been uploaded in the Last Week or the Last Month which maximises exposure for your property on our website and increases the chances of a quick and simple sale.</p>
                        </li>
                    </ul>
                </div>
                <AboutNavWithEnquiryBox formHeading={props.formHeading}/>
            </div>
        </section>
    );
};

export default Selling;
