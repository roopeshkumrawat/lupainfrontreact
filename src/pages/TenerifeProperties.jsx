import React from 'react'
import AdvanceSearchbox from '../Components/globalComponents/AdvanceSearchbox'
import advisorlogo from '../images/trip-advisor-rentals.png';
import tp1 from '../images/thumb_665367627_DSCN2727.jpg'
import tp2 from "../images/thumb_1066003529_WhatsAppImage20230525at14.07.501 (1).jpeg"
import tp3 from "../images/thumb_1040259809_IMG_7848copy.jpg";
import tp4 from  "../images/thumb_1066003529_WhatsAppImage20230525at14.07.501 (1).jpeg";
import tp5 from  "../images/thumb_121a5bc8a5859a685ca4ca51391aef65.jpg";
import tp6 from  "../images/thumb_1102683977_unnamed2.jpg"
import tp7 from  "../images/thumb_1208109808_IMG_2376 (1).jpg";
import tp8 from  "../images/thumb_216383068_C4B41C8FDB5C412EACB9B0992249D911_1_105_c (1).jpg";
import tp9 from  "../images/thumb_1362738587_unnamed24.jpg";
import tp10 from  "../images/thumb_1164382066_11.jpg";


export default function TenerifeProperties() {
    return (
        <section class="properties">

            <div class="wrapper units-row">

                <div class="unit-70">
                    <h1>Luxury Properties in Tenerife</h1>
                    <div class="count units-row">
                        <div class="unit-70">178 Properties found</div>
                        <div class="unit-30">
                            <select name="sort" id="sort">
                                <option selected="selected" value="1">Recently Added</option>
                                <option value="2">Highest price first</option>
                                <option value="3">Lowest price first</option>
                            </select>
                        </div>
                    </div>
                    <img class="trip-advisor" src={advisorlogo} title="Trip Advisor Rentals" />
                    <p class="text-centered">Lupain Estate Agents receives coveted Tripadvisor Certificate of Excellence Award</p>
                    <div class="units-row">
                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/new-build-3-bedroom-penthouse-apartment-in-atlantic-homes-complex-for-sale-in-costa-adeje-lp33526">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp1} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">New Build. 3 Bedroom Penthouse Apartment in Atlantic Homes Complex For Sale In Costa Adeje LP33526</h3>
                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Apartment</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 3</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 2</li>
                                        <li><strong>Location:</strong> Costa Adeje</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€900,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/4-bedroom-villa-for-sale-in-san-miguel-lp4422">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp2} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">4 Bedroom Villa For Sale In San Miguel LP4422</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Villa </li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 4</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 2</li>
                                        <li><strong>Location:</strong> San Miguel</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€635,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/freehold-bar-for-sale-in-costa-del-silencio-lp9440">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp3} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">Freehold Bar For Sale In Costa Del Silencio LP9440</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Business</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> N/A</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> N/A</li>
                                        <li><strong>Location:</strong> Costa Del Silencio</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€550,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/5-bedroom-villa-in-ocean-view-complex-for-sale-in-san-eugenio-lp5189">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp4} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">5 Bedroom Villa in Ocean View Complex For Sale In San Eugenio LP5189</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Villa </li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 4</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 3</li>
                                        <li><strong>Location:</strong> San Eugenio</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€588,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/farm-with-3-bedroom-house-for-sale-in-vera-de-erques-lp33522">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp5} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">Farm With 3 Bedroom House For Sale In Vera De Erques LP33522</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Country House</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 3</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 1</li>
                                        <li><strong>Location:</strong> Guia De Isora</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€590,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/lovely-b-b-for-sale-in-the-south-of-tenerife-lp5188">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp6} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">Lovely B&amp;B for sale in the south of Tenerife LP5188</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Country House</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 7</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 4</li>
                                        <li><strong>Location:</strong> El Roque</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€1,300,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/4-bedroom-villa-in-jardine-colgantes-complex-for-sale-in-chayofa-lp4421">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp7} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">4 Bedroom Villa In Jardine Colgantes Complex For Sale In Chayofa LP4421</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Villa </li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 4</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 4</li>
                                        <li><strong>Location:</strong> Chayofa</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€999,500</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/2-bedroom-apartment-in-baobab-suites-complex-for-sale-in-costa-adeje-lp23696">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp8} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">2 bedroom Apartment In Baobab Suites Complex For Sale In Costa Adeje LP23696</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Apartment</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 2</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 2</li>
                                        <li><strong>Location:</strong> Costa Adeje</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€720,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/4-bedroom-villa-for-sale-in-san-eugenio-lp4420">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp9} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">4 Bedroom Villa For Sale In San Eugenio LP4420</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Villa </li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 3</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 4</li>
                                        <li><strong>Location:</strong> San Eugenio</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€1,099,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>
                    <div class="units-row">

                        <a class="propprev-row" itemScope="" itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/offer" href="/property/3-bedroom-townhouse-for-sale-in-torviscas-lp33520">
                            <div class="units-row end">
                                <div class="unit-40">
                                    <img itemProp="image" src={tp10} alt="img" />
                                </div>
                                <div class="unit-60">
                                    <h3 itemProp="name">3 Bedroom Townhouse for Sale In Torviscas LP33520</h3>

                                    <ul>
                                        <li><strong itemProp="availability">Status:</strong> For Sale</li>
                                        <li><strong itemProp="description">Type:</strong> Town House</li>
                                        <li><strong itemProp="description">Bedrooms:</strong> 3</li>
                                        <li><strong itemProp="description">Bathrooms:</strong> 3</li>
                                        <li><strong>Location:</strong> Torviscas</li>
                                    </ul>
                                </div>
                                <div itemProp="price" class="price priceRange">€530,000</div>
                                <div class="view">More Info</div>
                            </div>
                        </a>
                    </div>

                    {/* <div class="pagination">
                            <a class="current" href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=1">1</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=2">2</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=3">3</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=4">4</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=5">5</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=6">6</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=2" title="Next page">Next</a>
                            <a href="/tenerife-properties-for-sale?locationslug=tenerife&amp;luxury=1&amp;page=18" title="First page">Last</a>
                        </div> */}

                </div>
                <AdvanceSearchbox />


            </div>

        </section>
    )
}
