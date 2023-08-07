import locationImg1 from "../images/location_3760e54f29c9a15c57a6825dc47cd6de.jpg";
import locationImg2 from "../images/location_b09fdff788f39112c25f0ac3088be3f5.jpg";
import locationImg3 from "../images/location_f4ad0672b24821728e16d344f606b978.png";
import locationImg4 from "../images/location_ab23540ca6d58999126760d0cecf7a1b.jpg";
import locationImg5 from "../images/location_8fce345bb3b76d69fb5b2de50f5d0085.jpg";
import locationImg6 from "../images/location_3ce68458c5e6ab621e7abe67ca66f4bc.jpg";
function Locations() {
    return (

        <section className="locations" itemProp="image" itemScope
            itemType="http://schema.org/RealEstateAgent http://schema.org/Product ">
            <a name="prime-locations"></a>
            <div className="wrapper">

                <h2 className="lined">Prime Tenerife Property Location</h2>

                <ul className="blocks-6 end">
                    <li>
                        <a href="/tenerife-property-sales/playa-de-las-americas-properties">
                            <h3 itemProp='name address'>Playa de Las Americas</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg1} alt="location img" />
                        </a>
                    </li>
                    <li>
                        <a href="/tenerife-property-sales/costa-adeje-properties">
                            <h3 itemProp='name address'>Costa Adeje</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg2} alt="locationImg" />
                        </a>
                    </li>
                    <li>
                        <a href="/tenerife-property-sales/fanabe-properties">
                            <h3 itemProp='name address'>Fanabe</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg3} alt="location img" />
                        </a>
                    </li>
                    <li>
                        <a href="/tenerife-property-sales/los-cristianos-properties">
                            <h3 itemProp='name address'>Los Cristianos</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg5} alt="locationImg" />
                        </a>
                    </li>
                    <li>
                        <a href="/tenerife-property-sales/torviscas-properties">
                            <h3 itemProp='name address'>Torviscas</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg5} alt="locationImg" />
                        </a>
                    </li>
                    <li>
                        <a href="/tenerife-property-sales/san-eugenio-properties">
                            <h3 itemProp='name address'>San Eugenio</h3>
                            <div itemProp="priceRange" style={{display:"none"}}>$8000 - $6000000</div>
                            <div itemProp="telephone" style={{display:"none"}}>+34 922 79 65 27</div>
                            <img itemProp='image' src={locationImg6} alt="img" />
                        </a>
                    </li>
                </ul>

            </div>

        </section>
    )
}
export default Locations;