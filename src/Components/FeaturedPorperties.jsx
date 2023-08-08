import featuredImg1 from "../images/thumb_1066003529_WhatsAppImage20230525at14.07.501.jpeg"
import featuredImg2 from "../images/thumb_216383068_C4B41C8FDB5C412EACB9B0992249D911_1_105_c.jpg"
import featuredImg3 from "../images/thumb_833560516_IMG20190225WA0057.jpg"
import featuredImg4 from "../images/thumb_1378016729_DSCN2818.jpg"
import featuredImg5 from "../images/thumb_665367627_DSCN2727.jpg"
import featuredImg6 from "../images/thumb_2138262654_30BZ9B1309red.jpg"
import featuredImg7 from "../images/thumb_1400724834_IMG_2784.jpg"
import featuredImg8 from "../images/thumb_1932407178_Mirador3.jpg"
import featuredImg9 from "../images/thumb_1208109808_IMG_2376.jpg"
import featuredImg10 from "../images/thumb_3310_210b053ea0446bbdda787fa85af3ee96.jpg"
import featuredImg11 from "../images/thumb_3290_05476df2db632f414af64ac31b68bf6d.jpg"
import featuredImg12 from "../images/thumb_3279_610321cc176de8e8af46b1b0907567ed.jpg"
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom"

function FeaturedProperties(props) {

    const options = {
        items: 4,
        nav: true,
        // navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"],
        autoplay: true,
        slideBy: 4,
        dots: false,
        loop: true,
        arrow: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            998:{
                items:4
            },
        }
    };

    return (
        <section className="featured_properties">

            <div className="wrapper">


                <h1 className="text-centered">Lupain - Tenerife Estate Agents </h1>
                <h2 className="lined">Featured Tenerife Properties</h2>

                <div className="featured-slider" itemProp="image" itemScope
                    itemType="http://schema.org/RealEstateAgent http://schema.org/Product http://schema.org/Offer">
                    <OwlCarousel margin={30} {...options} key={props.currency} >
                        <div className="item">
                            <Link className="propprev"
                                to="/property/studio-apartment-in-royal-palm-complex-for-sale-in-los-cristianos-lp0622">
                                <h3 itemProp='name address'>Studio Apartment in Royal Palm Complex for sale in Los
                                    Cristianos LP0622  </h3>
                                <div className="price">{props.currency}189,000</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>189000.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg1}
                                    alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev" to="/property/2-bedroom-in-atlantico-i-lp23449">
                                <h3 itemProp='name address'>2 bedroom in Atlantico I LP23449</h3>
                                <div className="price">{props.currency}147,500</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>147500.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image'
                                    src={featuredImg2} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/2-bedroom-apartment-in-achacay-complex-for-sale-in-los-cristianos-lp23203">
                                <h3 itemProp='name address'>2 Bedroom Apartment In Achacay Complex For Sale In Los
                                    Cristianos LP23203</h3>
                                <div className="price">{props.currency}315,000</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>315000.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg3} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/2-bedroom-apartment-in-parque-tropical-ii-complex-for-sale-in-los-cristianos-lp23095">
                                <h3 itemProp='name address'>2 Bedroom Apartment In Parque Tropical II Complex For Sale In
                                    Los Cristianos LP23095</h3>
                                <div className="price">{props.currency}349,000</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>349000.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg4} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/1-bedroom-apartmen-in-beverly-hills-club-complex-for-sale-in-los-cristianos-lp12374">
                                <h3 itemProp='name address'>1 Bedroom Apartmen in Beverly Hills Club Complex For Sale In Los
                                    Cristianos LP12374</h3>
                                <div className="price">{props.currency}148,400</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>148400.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg5} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/lpr6-fantastic-luxury-studio-sea-and-sunset-views-holiday-rental">
                                <h3 itemProp='name address'>LPR6 - Fantastic Luxury Studio Sea And Sunset Views. Holiday
                                    Rental</h3>
                                <div className="price">{props.currency}320</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>320.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg6} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/lpr2-los-cristianos-4-bed-luxury-triplex-villa-holiday-rental">
                                <h3 itemProp='name address'>LPR2 - Los Cristianos 4 Bed Luxury Triplex Villa Holiday Rental
                                </h3>
                                <div className="price">{props.currency}640</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>640.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg7} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/lpr5-los-cristianos-terrace-bungalow-great-location-holiday-rental">
                                <h3 itemProp='name address'>LPR5 - Los Cristianos Terrace Bungalow. Great Location, Holiday
                                    Rental</h3>
                                <div className="price">{props.currency}410</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>410.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg8} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev" to="/property/lpr1-la-caleta-luxury-penthouse-duplex-holiday-rental">
                                <h3 itemProp='name address'>LPR1 - La Caleta Luxury Penthouse Duplex Holiday Rental</h3>
                                <div className="price">{props.currency}640</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>640.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg9} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev" to="/property/4-bed-villa-in-san-eugenio-for-sale-in-adeje-lp4235">
                                <h3 itemProp='name address'>4 bed villa in San Eugenio for sale in Adeje LP4235</h3>
                                <div className="price">{props.currency}682,500</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>682500.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg10} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/2-bed-apartment-in-the-residential-maria-jose-complex-for-sale-in-los-cristianos-lp22428">
                                <h3 itemProp='name address'>2 bed apartment in the residential Maria Jose complex for sale
                                    in Los Cristianos LP22428</h3>
                                <div className="price">{props.currency}167,500</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>167500.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg11} alt="img" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link className="propprev"
                                to="/property/3-bed-apartment-with-port-views-on-the-colina-i-complex-for-sale-in-los-cristianos-lp3866">
                                <h3 itemProp='name address'>3 bed apartment with port views on the Colina I complex for sale
                                    in Los Cristianos LP3866</h3>
                                <div className="price">{props.currency}472,500</div>
                                <div itemProp="price priceRange" style={{ display: "none" }}>472500.00</div>
                                <div itemProp="telephone" style={{ display: "none" }}>+34 922 79 65 27</div>
                                <div itemProp="priceCurrency" style={{ display: "none" }}>EUR</div>
                                <img itemProp='image' src={featuredImg12} alt="img" />
                            </Link>
                        </div>
                    </OwlCarousel>
                </div  >

            </div>

        </section>
    )
}
export default FeaturedProperties;