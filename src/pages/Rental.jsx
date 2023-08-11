import React from 'react';
import { Link } from 'react-router-dom';
import tripadvisor from '../images/trip-advisor-rentals.png';
import rentalImg1 from '../images/thumb_1103576088_DSCN2343.JPG'
import rentalImg2 from '../images/thumb_974728922_IMG_2589.jpg'
import rentalImg3 from '../images/thumb_2138262654_30BZ9B1309red.jpg'
import rentalImg4 from '../images/thumb_1400724834_IMG_2784.jpg'
import rentalImg5 from '../images/thumb_1932407178_Mirador3.jpg'
import rentalImg6 from '../images/thumb_1208109808_IMG_2376.jpg'
import EnquiryBox from '../Components/globalComponents/EnquiryBox';
export default function Rental(props) {
    return (
        <section className="properties">
            <div className="wrapper units-row">
                <div className="unit-70">
                    <h1>Self Catering Tenerife Holiday Rentals</h1>
                    <div className="count units-row">
                        <div className="unit-70">6 Properties found</div>
                        <div className="unit-30">
                            <select name="sort" id="sort">
                                <option selected="selected" value="1">Recently Added</option>
                                <option value="2">Highest price first</option>
                                <option value="3">Lowest price first</option>
                            </select>
                        </div>
                    </div>
                    <img className="trip-advisor" src={tripadvisor} title="Trip Advisor Rentals" alt='img' />
                    <p className="text-centered">Lupain Estate Agents receives coveted Tripadvisor Certificate of Excellence Award</p>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr9-los-cristianos-mountain-view-apartment-great-location-holiday-rental">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg1} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR9 - Los Cristianos Mountain View Apartment. Great Location. Holiday Rental</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Apartment</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 1</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 1</li>
                                        <li><strong>Location:</strong> Los Cristianos</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}350 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr8-los-cristianos-1-bed-in-dinast-a-complex-with-ample-terrace">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg2} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR8 - Los Cristianos 1 Bed in Dinastía Complex with ample terrace.</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Apartment</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 1</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 1</li>
                                        <li><strong>Location:</strong> Los Cristianos</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}0 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr6-fantastic-luxury-studio-sea-and-sunset-views-holiday-rental">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg3} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR6 - Fantastic Luxury Studio Sea And Sunset Views. Holiday Rental</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Studio</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 0</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 1</li>
                                        <li><strong>Location:</strong> Playa De Las Americas</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}455 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr2-los-cristianos-4-bed-luxury-triplex-villa-holiday-rental">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg4} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR2 - Los Cristianos 4 Bed Luxury Triplex Villa Holiday Rental</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Town House</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 4</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 3</li>
                                        <li><strong>Location:</strong> Los Cristianos</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}840 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr5-los-cristianos-terrace-bungalow-great-location-holiday-rental">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg5} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR5 - Los Cristianos Terrace Bungalow. Great Location, Holiday Rental</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Apartment</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 1</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 1</li>
                                        <li><strong>Location:</strong> Los Cristianos</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}490 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="units-row">
                        <Link className="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" to="/property/lpr1-la-caleta-luxury-penthouse-duplex-holiday-rental">
                            <div className="units-row end">
                                <div className="unit-40">
                                    <img itemProp="image" src={rentalImg6} alt="img" />
                                </div>
                                <div className="unit-60">
                                    <h3 itemProp="name">LPR1 - La Caleta Luxury Penthouse Duplex Holiday Rental</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Rent</li>
                                        <li><strong itemProp="description">Type:</strong> Penthouse</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 2</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 2</li>
                                        <li><strong>Location:</strong> La Caleta</li>
                                    </ul>
                                </div>
                                <div itemProp="price" className="price priceRange">From {props.currency}1,190 per week</div>
                                <div className="view">More Info</div>
                            </div>
                        </Link>
                    </div>
                    <div className="pagination">
                    </div>
                    <h3>Holiday rentals &amp; self-catering luxury properties for rent in Tenerife</h3>					<p>Thinking of spoiling yourself with family or friends then look at our properties from luxury villas to modern apartments. Los Cristianos is extremely popular over the last few years due to the recent upgrade of the whole village. The regeneration of the streets, beach, sea front going to the old port has made this fishing village very desirable.</p>
                    <p>On this page we aim to deliver high end individual properties and invite you to look at the photos and for any additional information to contact our Estate Agency based in Cristian Sur, Avda. Amsterdam No. 4, Los Cristianos.</p>
                </div>
                <EnquiryBox formHeading= {props.formHeading}/>
            </div>

        </section>
    )
}
