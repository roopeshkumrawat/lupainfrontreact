
import Banner5 from "../images/slider_1544332642_banner5.JPG";
import Banner4 from "../images/slider_1562953565_banner4.JPG";
import Banner3 from "../images/slider_958386862_banner3.JPG";
import Banner2 from "../images/slider_2136373456_banner2.JPG";
import Banner1 from "../images/slider_2043054050_banner1.JPG";
import fiveRatting from "../images/rating5_white_shadow.svg";
import OwlCarousel from 'react-owl-carousel';
function HeroSearch() {
    const options = {
        items: 1,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: false,
        arrow: false,
        loop: true,
        nav: false

    }
    return (
        <section className="herosearch">
            <OwlCarousel {...options} className="home-slider">
                <a className="item" target="_blank">
                    <div className="text">
                        <h2>Searching For Your Dream Property In <span>Tenerife</span></h2>
                    </div>
                    <img src={Banner5} alt="bannerImg" />
                </a>
                <a className="item" target="_blank">
                    <div className="text">
                        <h2>Find the perfect property for you in <span>Tenerife</span></h2>
                    </div>
                    <img src={Banner4} alt="bannerImg" />
                </a>
                <a className="item" target="_blank" href="/history-of-lupain">
                    <div className="text">
                        <h2>Tenerife Estate Agents <span>since 2002</span></h2>
                    </div>
                    <img src={Banner3} alt="bannerImg" />
                </a>
                <a className="item" target="_blank" href="/testimonials">
                    <div className="text">
                        <h2>Please read our <span>reviews</span></h2>
                    </div>
                    <img src={Banner2} alt="bannerImg" />
                </a>
                <a className="item" target="_blank" href="/testimonials">
                    <div className="text">
                        <h2>Please read our <span>reviews</span></h2>
                    </div>
                    <img src={Banner1} alt="bannerImg" />
                </a>
            </OwlCarousel>

            <div className="search">
                <div className="wrapper units-row">

                    <div id="search_card" className="card">
                        <h2>Find your dream home</h2>
                        <div style={{ textAlign: "center", marginBottom: "10px" }}><img src={fiveRatting} />
                        </div>
                        <ul id="search_forms">
                            <li id="search_location" className="selected">Location</li>
                            {" "} <li id="search_complex">Complex Name</li>
                            {" "} <li id="search_reference">Property Reference</li>
                            {" "} <li onclick="window.location.href='/properties-for-sale?sort=1&maxlimit=50';">
                                <a href="/properties-for-sale?sort=1&maxlimit=50">Recently Added</a>
                            </li>
                            {" "} <li onclick="window.location.href='/properties-for-sale?luxury=1';">
                                <a href="/properties-for-sale?luxury=1">Luxury</a>
                            </li>
                            {" "}<li onclick="window.location.href='/sell-your-tenerife-property';">
                                <a href="/sell-your-tenerife-property">Selling</a>
                            </li>
                            {" "}<li onclick="window.location.href='/contact';">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <form name="frmSearch" action="/tenerife-properties-for-sale">
                        <div className="unit-75">
                            <div className="units-row units-mobile-50 end">
                                <div className="unit-100" id="search_input_reference" style={{ display: "none" }}>
                                    <label>Property Reference</label>
                                    <input type="text" name="lupain_ref" placeholder="Property ID" value="" />
                                </div>
                                <div className="unit-100" id="search_input_complex" style={{ display: "none" }}>
                                    <label>Complex Name</label>
                                    <select name="complex">
                                        <option value="">All Complexes</option>
                                        <option value="0">No Complex</option>
                                        <option value="1558">Adeje Paradise</option>
                                        <option value="1675">Alamos Park</option>
                                        <option value="1545">Albatros</option>
                                        <option value="1284">Alborada</option>
                                        <option value="1629">Aloha Garden</option>
                                        <option value="1439">Alondras Park</option>
                                        <option value="1314">Altamar</option>
                                        <option value="1486">Altamira</option>
                                        <option value="1757">Altoviso</option>
                                        <option value="1854">Anayet</option>
                                        <option value="1109">Arco Iris</option>
                                        <option value="1700">Atalaya Court</option>
                                        <option value="1921">Atlantic Homes</option>
                                        <option value="1235">Atlantic View</option>
                                        <option value="1098">Atlantico</option>
                                        <option value="1864">Bahia De Los Menceyes</option>
                                        <option value="1506">Balcon De Andalucia</option>
                                        <option value="1501">Balcon De Los Gigantes</option>
                                        <option value="1203">Balcon Del Atlantico</option>
                                        <option value="1507">Balcon Del Mar</option>
                                        <option value="1248">Baobab</option>
                                        <option value="1073">Bellamar</option>
                                        <option value="1255">Benimar</option>
                                        <option value="1697">Beverly Hills Club</option>
                                        <option value="1207">Borinquen</option>
                                        <option value="1830">Bouganvillas</option>
                                        <option value="1416">Bucanero</option>
                                        <option value="1546">Bungamar</option>
                                        <option value="1778">Cactus</option>
                                        <option value="1334">Caldera Del Rey</option>
                                        <option value="1592">Caledonia Park</option>
                                        <option value="1918">Caleta Palms</option>
                                        <option value="1836">Canary Sol</option>
                                        <option value="1249">Cape Salema</option>
                                        <option value="1234">Caribe</option>
                                        <option value="1193">Castle Harbour</option>
                                        <option value="1283">Charco Del Valle</option>
                                        <option value="1488">Chasna</option>
                                        <option value="1386">Chayofa Country Club</option>
                                        <option value="1640">Chayofita</option>
                                        <option value="1452">Chipeque</option>
                                        <option value="1196">Club Atlantis</option>
                                        <option value="1803">Club De Mar</option>
                                        <option value="1103">Club Paraiso</option>
                                        <option value="1075">Colina Blanca</option>
                                        <option value="1372">Colina I</option>
                                        <option value="1536">Comodoro</option>
                                        <option value="1414">Condado</option>
                                        <option value="1627">Costa Sol</option>
                                        <option value="1170">Costamar</option>
                                        <option value="1926">Crisol</option>
                                        <option value="1081">Cristian Sur</option>
                                        <option value="1323">Cristimar</option>
                                        <option value="1183">Dinastia</option>
                                        <option value="1797">Edf Avenida</option>
                                        <option value="1912">Edf Covadonga</option>
                                        <option value="1851">Edf El Trebol</option>
                                        <option value="1831">Edf Fontana</option>
                                        <option value="1902">Edf Gloria</option>
                                        <option value="1696">Edf Pisuerga II</option>
                                        <option value="1503">Edificio Kanal</option>
                                        <option value="1732">Edificio Simon</option>
                                        <option value="1381">El Cardon</option>
                                        <option value="1423">El Chaparral</option>
                                        <option value="1167">El Dorado</option>
                                        <option value="1455">El Draguito</option>
                                        <option value="1328">El Duque</option>
                                        <option value="1539">El Duque 2</option>
                                        <option value="1554">El Galeon</option>
                                        <option value="1231">El Horno</option>
                                        <option value="1542">El Madronal</option>
                                        <option value="1769">El Marquez</option>
                                        <option value="1107">El Mirador</option>
                                        <option value="1636">El Mocan</option>
                                        <option value="1182">El Morro</option>
                                        <option value="1886">El Palmeral</option>
                                        <option value="1337">El Paso</option>
                                        <option value="1114">El Rincon</option>
                                        <option value="1735">El Tesoro Del Galeon</option>
                                        <option value="1707">El Torreon</option>
                                        <option value="1880">El Trebol</option>
                                        <option value="1578">Famar</option>
                                        <option value="1658">Flamingo</option>
                                        <option value="1361">Garanana</option>
                                        <option value="1343">Gigansol Del Mar</option>
                                        <option value="1792">Golf Hermitage</option>
                                        <option value="1179">Granada Park</option>
                                        <option value="1923">Green Garden Resort</option>
                                        <option value="1446">Holiday Valley</option>
                                        <option value="1716">Horizonte</option>
                                        <option value="1392">Island Golf Villas</option>
                                        <option value="1420">Island Village</option>
                                        <option value="1285">Island Village Heights</option>
                                        <option value="1273">Jardin Botanico</option>
                                        <option value="1475">Jardines Canarios</option>
                                        <option value="1691">Jardines Colgantes</option>
                                        <option value="1892">Jardines Del Coral</option>
                                        <option value="1520">Jardines Del Sur</option>
                                        <option value="1146">La Concepcion</option>
                                        <option value="1451">La Finca</option>
                                        <option value="1724">La Goleta</option>
                                        <option value="1353">La Perla</option>
                                        <option value="1537">La Pineda</option>
                                        <option value="1595">La Sirena</option>
                                        <option value="1350">Laderas Del Palm Mar</option>
                                        <option value="1147">Lagos De Fanabe</option>
                                        <option value="1589">Lagos De Miramar II</option>
                                        <option value="1692">Las Adelfas</option>
                                        <option value="1917">Las Colinas</option>
                                        <option value="1588">Las Eras </option>
                                        <option value="1134">Las Flores</option>
                                        <option value="1565">Las Floritas</option>
                                        <option value="1174">Las Lomas</option>
                                        <option value="1663">Las Mimosas</option>
                                        <option value="1587">Las Olas</option>
                                        <option value="1571">Las Pergolas</option>
                                        <option value="1173">Las Piteras</option>
                                        <option value="1714">Las Piteras</option>
                                        <option value="1655">Las Rosas</option>
                                        <option value="1909">Las Terrazas De Costa Adeje</option>
                                        <option value="1318">Las Tortugas</option>
                                        <option value="1824">Leeward Residential</option>
                                        <option value="1913">Litoral II</option>
                                        <option value="1297">Llano Del Camello</option>
                                        <option value="1698">Los Almendros</option>
                                        <option value="1470">Los Angeles</option>
                                        <option value="1468">Los Arcos</option>
                                        <option value="1582">Los Balandros</option>
                                        <option value="1294">Los Cardones</option>
                                        <option value="1674">Los Castanos</option>
                                        <option value="1330">Los Corales</option>
                                        <option value="1188">Los Diamantes</option>
                                        <option value="1104">Los Geranios</option>
                                        <option value="1647">Los Oceanos</option>
                                        <option value="1254">Los Olivos</option>
                                        <option value="1292">Los Sabandenos</option>
                                        <option value="1694">Los Seres</option>
                                        <option value="1369">Magnolia Golf Resort</option>
                                        <option value="1510">Maravilla</option>
                                        <option value="1212">Mareverde</option>
                                        <option value="1641">Mesetas Del Mar</option>
                                        <option value="1583">Mirador Del Duque</option>
                                        <option value="1729">Mirador Del Roque</option>
                                        <option value="1137">Miraverde</option>
                                        <option value="1315">Oasis</option>
                                        <option value="1278">Oasis Dakota</option>
                                        <option value="1226">Oasis Fañabe</option>
                                        <option value="1905">Ocean Boulevard</option>
                                        <option value="1550">Ocean Garden</option>
                                        <option value="1818">Ocean Golf Country Club</option>
                                        <option value="1110">Ocean View</option>
                                        <option value="1894">Ohasis Boutique Suites</option>
                                        <option value="1214">Olympia</option>
                                        <option value="1168">Orlando</option>
                                        <option value="1393">Palm Gardens</option>
                                        <option value="1333">Palmeras Del Sur</option>
                                        <option value="1500">Panorama</option>
                                        <option value="1793">Paraiso Del Palm Mar</option>
                                        <option value="1817">Paraiso Del Sol</option>
                                        <option value="1153">Paraiso Del Sur</option>
                                        <option value="1718">Paraiso II</option>
                                        <option value="1657">Paraiso V</option>
                                        <option value="1776">Parque Albatros</option>
                                        <option value="1190">Parque Cattleya</option>
                                        <option value="1322">Parque Del Conde</option>
                                        <option value="1474">Parque Las Americas</option>
                                        <option value="1133">Parque Margarita</option>
                                        <option value="1632">Parque San Eugenio</option>
                                        <option value="1166">Parque Santiago</option>
                                        <option value="1191">Parque Tropical</option>
                                        <option value="1251">Playa Graciosa</option>
                                        <option value="1277">Playa Honda</option>
                                        <option value="1222">Ponderosa</option>
                                        <option value="1156">Port Royale</option>
                                        <option value="1898">Portonovo</option>
                                        <option value="1094">Primavera</option>
                                        <option value="1454">Pueblo Estefania</option>
                                        <option value="1320">Puerto Colon</option>
                                        <option value="1879">Residential Bahia Medano</option>
                                        <option value="1752">Residential Bello</option>
                                        <option value="1766">Residential Los Abrigos</option>
                                        <option value="1567">Roque Del Conde</option>
                                        <option value="1317">Rosa De Los Vientos</option>
                                        <option value="1151">Royal Palm</option>
                                        <option value="1535">Royal Plaza</option>
                                        <option value="1866">San Andres</option>
                                        <option value="1400">San Miguel Village</option>
                                        <option value="1570">San Remo</option>
                                        <option value="1751">Sand Club</option>
                                        <option value="1922">Santa Amalia</option>
                                        <option value="1229">Santa Maria</option>
                                        <option value="1563">Santa Marta</option>
                                        <option value="1154">Sol Paraiso</option>
                                        <option value="1708">Sol Sun Beach</option>
                                        <option value="1233">Sotavento</option>
                                        <option value="1907">Sotavento Suites</option>
                                        <option value="1868">St George</option>
                                        <option value="1090">Terrazas Del Conde</option>
                                        <option value="1227">The Heights</option>
                                        <option value="1218">The Sunset</option>
                                        <option value="1298">Timanfaya</option>
                                        <option value="1202">Torres De Yomely</option>
                                        <option value="1204">Torres Del Sol</option>
                                        <option value="1903">Trebol</option>
                                        <option value="1299">Vera De Erques</option>
                                        <option value="1171">Victoria Court</option>
                                        <option value="1108">Villamar</option>
                                        <option value="1668">Vista Nautica</option>
                                        <option value="1240">Vista Roja</option>
                                        <option value="1132">Vistahermosa</option>
                                        <option value="1211">Yucca Park</option>
                                    </select>
                                </div>
                                <div id="search_input_location">
                                    <div className="unit-50">
                                        <label>Status</label>
                                        <select name="status" className="end"
                                            style={{ backgroundColor: "#ffe4c4", fontWeight: "bold" }}>
                                            <option value=""></option>
                                            <option value="1071" selected>For Sale</option>
                                            <option value="1001">For Rent</option>
                                            <option value="1466">Sold</option>
                                        </select>
                                    </div>
                                    <div className="unit-50">
                                        <label>Location</label>
                                        <div className="autocomplete" style={{ width: "100%" }}>
                                            <input type="text" id="myInput"
                                                placeholder="E.g. Los Cristianos, Las Americas ... etc."
                                                autoComplete="off" />
                                            <input type="hidden" name="location" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="unit-25">
                            <input type="submit" value="search now" />
                        </div>

                    </form>



                </div>
            </div>
        </section>

    )
}
export default HeroSearch;