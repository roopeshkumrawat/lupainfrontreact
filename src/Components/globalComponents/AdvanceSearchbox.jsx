import React from 'react'
import { Link } from 'react-router-dom'
import EnquiryBox from './EnquiryBox'
export default function AdvanceSearchbox() {
    return (
        <>
            <aside className="unit-30">
                <div className="search box">

                    <h3>Advanced Search</h3>

                    <div className="inner">


                        <form action="/tenerife-properties-for-sale" method="get" id="propertysearch">

                            <label>Property Reference</label>
                            <input type="text" name="lupain_ref" placeholder="Property Id" value="" />

                            <label>Location</label>
                            <select name="location" className="">
                                <option value="">All Locations</option>
                                <option value="1186">Abades</option>
                                <option value="1368">Acojeja</option>
                                <option value="1145">Adeje</option>
                                <option value="1177">Aguilas Del Teide</option>
                                <option value="1238">Aldea Blanca</option>
                                <option value="1295">Amarilla Golf</option>
                                <option value="1139">Arico</option>
                                <option value="1252">Armenime</option>
                                <option value="1340">Arona</option>
                                <option value="1219">Bahia Del Duque</option>
                                <option value="1325">Buzanada</option>
                                <option value="1163">Cabo Blanco</option>
                                <option value="1105">Callao Salvaje</option>
                                <option value="1374">Candelaria</option>
                                <option value="1377">Charco Del Pino</option>
                                <option value="1082">Chayofa</option>
                                <option value="1286">Chio</option>
                                <option value="1072">Costa Adeje</option>
                                <option value="1097">Costa Del Silencio</option>
                                <option value="1441">El Fraile</option>
                                <option value="1259">El Galeon</option>
                                <option value="1135">El Madroñal</option>
                                <option value="1159">El Medano</option>
                                <option value="1389">El Poris</option>
                                <option value="1275">El Roque</option>
                                <option value="1161">El Salto</option>
                                <option value="1331">El Sauzal</option>
                                <option value="1095">Fanabe</option>
                                <option value="1409">Fasnia</option>
                                <option value="1257">Golf Del Sur</option>
                                <option value="1157">Granadilla</option>
                                <option value="1312">Guargacho</option>
                                <option value="1307">Guaza</option>
                                <option value="1125">Guia De Isora</option>
                                <option value="1266">Ifonche</option>
                                <option value="1309">La Caleta</option>
                                <option value="1175">La Camella</option>
                                <option value="1406">La Escalona</option>
                                <option value="1111">La Florida</option>
                                <option value="1215">La Mareta</option>
                                <option value="1141">La Tejita</option>
                                <option value="1261">Las Chafiras</option>
                                <option value="1352">Las Galletas</option>
                                <option value="1345">Las Moraditas</option>
                                <option value="1197">Las Rosas</option>
                                <option value="1118">Los Abrigos</option>
                                <option value="1079">Los Cristianos</option>
                                <option value="1148">Los Gigantes</option>
                                <option value="1120">Los Menores</option>
                                <option value="1084">Palm Mar</option>
                                <option value="1263">Parque De La Reina</option>
                                <option value="1363">Piedra Hincada</option>
                                <option value="1076">Playa De La Arena</option>
                                <option value="1093">Playa De Las Americas</option>
                                <option value="1102">Playa Paraiso</option>
                                <option value="1290">Playa San Juan</option>
                                <option value="1433">Poris De Abona</option>
                                <option value="1129">Puerto Santiago</option>
                                <option value="1091">Roque Del Conde</option>
                                <option value="1074">San Eugenio</option>
                                <option value="1244">San Isidro</option>
                                <option value="1367">San Miguel</option>
                                <option value="1364">Santa Ursula</option>
                                <option value="1184">Santiago Del Teide</option>
                                <option value="1404">Taucho</option>
                                <option value="1288">Tijoco</option>
                                <option value="1143">Torviscas</option>
                                <option value="1089">Torviscas Alto</option>
                                <option value="1116">Valle San Lorenzo</option>
                                <option value="1268">Vilaflor</option>
                            </select>

                            <label>Complex Name</label>
                            <select name="complex">
                                <option value="">All Complexes</option>
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
                                <option value="0" selected="selected">No Complex</option>
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

                            <label>Property Type</label>
                            <select name="type" className="">
                                <option value="">All Types</option>
                                <option value="34">Apartment</option>
                                <option value="38">Bungalow</option>
                                <option value="35">Business</option>
                                <option value="65">Country House</option>
                                <option value="64">Finca </option>
                                <option value="63">Garage</option>
                                <option value="46">Land</option>
                                <option value="62">Penthouse</option>
                                <option value="41">Studio</option>
                                <option value="36">Town House</option>
                                <option value="37">Villa </option>
                            </select>

                            <div className="units-row end">
                                <div className="unit-50">
                                    <label>Bedrooms Min</label>
                                    <select name="bedrooms_min">
                                        <option value="none" selected="selected">No Min</option>
                                        <option value="na">N/A</option>
                                        <option value="0">Studio</option>
                                        <option value="1">1 Bed</option>
                                        <option value="2">2 Bed</option>
                                        <option value="3">3 Bed</option>
                                        <option value="4">4 Bed</option>
                                        <option value="5">5 Bed</option>
                                        <option value="6">6 Bed</option>
                                        <option value="7">7 Bed</option>
                                        <option value="8">8 Bed</option>
                                        <option value="9">9 Bed</option>
                                        <option value="10">10 Bed</option>
                                    </select>
                                </div>

                                <div className="unit-50">
                                    <label>Bedrooms Max</label>
                                    <select name="bedrooms_max">
                                        <option value="none" selected="selected">No Max</option>
                                        <option value="na">N/A</option>
                                        <option value="0">Studio</option>
                                        <option value="1">1 Bed</option>
                                        <option value="2">2 Bed</option>
                                        <option value="3">3 Bed</option>
                                        <option value="4">4 Bed</option>
                                        <option value="5">5 Bed</option>
                                        <option value="6">6 Bed</option>
                                        <option value="7">7 Bed</option>
                                        <option value="8">8 Bed</option>
                                        <option value="9">9 Bed</option>
                                        <option value="10">10 Bed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="units-row end">

                                <div className="unit-50">
                                    <label>Price Min</label>
                                    <select name="price_min" className="">
                                        <option value="">No Min</option>
                                        <option value="50000" data-price-min="">€50,000</option>
                                        <option value="75000" data-price-min="">€75,000</option>
                                        <option value="100000" data-price-min="">€100,000</option>
                                        <option value="125000" data-price-min="">€125,000</option>
                                        <option value="150000" data-price-min="">€150,000</option>
                                        <option value="175000" data-price-min="">€175,000</option>
                                        <option value="200000" data-price-min="">€200,000</option>
                                        <option value="225000" data-price-min="">€225,000</option>
                                        <option value="250000" data-price-min="">€250,000</option>
                                        <option value="275000" data-price-min="">€275,000</option>
                                        <option value="300000" data-price-min="">€300,000</option>
                                        <option value="325000" data-price-min="">€325,000</option>
                                        <option value="350000" data-price-min="">€350,000</option>
                                        <option value="375000" data-price-min="">€375,000</option>
                                        <option value="400000" data-price-min="">€400,000</option>
                                        <option value="425000" data-price-min="">€425,000</option>
                                        <option value="450000" data-price-min="">€450,000</option>
                                        <option value="475000" data-price-min="">€475,000</option>
                                        <option value="500000" data-price-min="">€500,000</option>
                                        <option value="525000" data-price-min="">€525,000</option>
                                        <option value="550000" data-price-min="">€550,000</option>
                                        <option value="575000" data-price-min="">€575,000</option>
                                        <option value="600000" data-price-min="">€600,000</option>
                                        <option value="625000" data-price-min="">€625,000</option>
                                        <option value="650000" data-price-min="">€650,000</option>
                                        <option value="675000" data-price-min="">€675,000</option>
                                        <option value="700000" data-price-min="">€700,000</option>
                                        <option value="725000" data-price-min="">€725,000</option>
                                        <option value="750000" data-price-min="">€750,000</option>
                                        <option value="775000" data-price-min="">€775,000</option>
                                        <option value="800000" data-price-min="">€800,000</option>
                                        <option value="825000" data-price-min="">€825,000</option>
                                        <option value="850000" data-price-min="">€850,000</option>
                                        <option value="875000" data-price-min="">€875,000</option>
                                        <option value="900000" data-price-min="">€900,000</option>
                                        <option value="925000" data-price-min="">€925,000</option>
                                        <option value="950000" data-price-min="">€950,000</option>
                                        <option value="975000" data-price-min="">€975,000</option>
                                        <option value="1000000" data-price-min="">€1,000,000</option>
                                        <option value="1025000" data-price-min="">€1,025,000</option>
                                        <option value="1050000" data-price-min="">€1,050,000</option>
                                        <option value="1075000" data-price-min="">€1,075,000</option>
                                        <option value="1100000" data-price-min="">€1,100,000</option>
                                        <option value="1125000" data-price-min="">€1,125,000</option>
                                        <option value="1150000" data-price-min="">€1,150,000</option>
                                        <option value="1175000" data-price-min="">€1,175,000</option>
                                        <option value="1200000" data-price-min="">€1,200,000</option>
                                        <option value="1225000" data-price-min="">€1,225,000</option>
                                        <option value="1250000" data-price-min="">€1,250,000</option>
                                        <option value="1275000" data-price-min="">€1,275,000</option>
                                        <option value="1300000" data-price-min="">€1,300,000</option>
                                        <option value="1325000" data-price-min="">€1,325,000</option>
                                        <option value="1350000" data-price-min="">€1,350,000</option>
                                        <option value="1375000" data-price-min="">€1,375,000</option>
                                        <option value="1400000" data-price-min="">€1,400,000</option>
                                        <option value="1425000" data-price-min="">€1,425,000</option>
                                        <option value="1450000" data-price-min="">€1,450,000</option>
                                        <option value="1475000" data-price-min="">€1,475,000</option>
                                        <option value="1500000" data-price-min="">€1,500,000</option>
                                        <option value="1525000" data-price-min="">€1,525,000</option>
                                        <option value="1550000" data-price-min="">€1,550,000</option>
                                        <option value="1575000" data-price-min="">€1,575,000</option>
                                        <option value="1600000" data-price-min="">€1,600,000</option>
                                        <option value="1625000" data-price-min="">€1,625,000</option>
                                        <option value="1650000" data-price-min="">€1,650,000</option>
                                        <option value="1675000" data-price-min="">€1,675,000</option>
                                        <option value="1700000" data-price-min="">€1,700,000</option>
                                        <option value="1725000" data-price-min="">€1,725,000</option>
                                        <option value="1750000" data-price-min="">€1,750,000</option>
                                        <option value="1775000" data-price-min="">€1,775,000</option>
                                        <option value="1800000" data-price-min="">€1,800,000</option>
                                        <option value="1825000" data-price-min="">€1,825,000</option>
                                        <option value="1850000" data-price-min="">€1,850,000</option>
                                        <option value="1875000" data-price-min="">€1,875,000</option>
                                        <option value="1900000" data-price-min="">€1,900,000</option>
                                        <option value="1925000" data-price-min="">€1,925,000</option>
                                        <option value="1950000" data-price-min="">€1,950,000</option>
                                        <option value="1975000" data-price-min="">€1,975,000</option>
                                        <option value="2000000" data-price-min="">€2,000,000</option>
                                    </select>
                                </div>
                                <div className="unit-50">
                                    <label>Price Max</label>
                                    <select name="price_max" className="">
                                        <option value="">No Max</option>
                                        <option value="50000">€50,000</option>
                                        <option value="75000">€75,000</option>
                                        <option value="100000">€100,000</option>
                                        <option value="125000">€125,000</option>
                                        <option value="150000">€150,000</option>
                                        <option value="175000">€175,000</option>
                                        <option value="200000">€200,000</option>
                                        <option value="225000">€225,000</option>
                                        <option value="250000">€250,000</option>
                                        <option value="275000">€275,000</option>
                                        <option value="300000">€300,000</option>
                                        <option value="325000">€325,000</option>
                                        <option value="350000">€350,000</option>
                                        <option value="375000">€375,000</option>
                                        <option value="400000">€400,000</option>
                                        <option value="425000">€425,000</option>
                                        <option value="450000">€450,000</option>
                                        <option value="475000">€475,000</option>
                                        <option value="500000">€500,000</option>
                                        <option value="525000">€525,000</option>
                                        <option value="550000">€550,000</option>
                                        <option value="575000">€575,000</option>
                                        <option value="600000">€600,000</option>
                                        <option value="625000">€625,000</option>
                                        <option value="650000">€650,000</option>
                                        <option value="675000">€675,000</option>
                                        <option value="700000">€700,000</option>
                                        <option value="725000">€725,000</option>
                                        <option value="750000">€750,000</option>
                                        <option value="775000">€775,000</option>
                                        <option value="800000">€800,000</option>
                                        <option value="825000">€825,000</option>
                                        <option value="850000">€850,000</option>
                                        <option value="875000">€875,000</option>
                                        <option value="900000">€900,000</option>
                                        <option value="925000">€925,000</option>
                                        <option value="950000">€950,000</option>
                                        <option value="975000">€975,000</option>
                                        <option value="1000000">€1,000,000</option>
                                        <option value="1025000">€1,025,000</option>
                                        <option value="1050000">€1,050,000</option>
                                        <option value="1075000">€1,075,000</option>
                                        <option value="1100000">€1,100,000</option>
                                        <option value="1125000">€1,125,000</option>
                                        <option value="1150000">€1,150,000</option>
                                        <option value="1175000">€1,175,000</option>
                                        <option value="1200000">€1,200,000</option>
                                        <option value="1225000">€1,225,000</option>
                                        <option value="1250000">€1,250,000</option>
                                        <option value="1275000">€1,275,000</option>
                                        <option value="1300000">€1,300,000</option>
                                        <option value="1325000">€1,325,000</option>
                                        <option value="1350000">€1,350,000</option>
                                        <option value="1375000">€1,375,000</option>
                                        <option value="1400000">€1,400,000</option>
                                        <option value="1425000">€1,425,000</option>
                                        <option value="1450000">€1,450,000</option>
                                        <option value="1475000">€1,475,000</option>
                                        <option value="1500000">€1,500,000</option>
                                        <option value="1525000">€1,525,000</option>
                                        <option value="1550000">€1,550,000</option>
                                        <option value="1575000">€1,575,000</option>
                                        <option value="1600000">€1,600,000</option>
                                        <option value="1625000">€1,625,000</option>
                                        <option value="1650000">€1,650,000</option>
                                        <option value="1675000">€1,675,000</option>
                                        <option value="1700000">€1,700,000</option>
                                        <option value="1725000">€1,725,000</option>
                                        <option value="1750000">€1,750,000</option>
                                        <option value="1775000">€1,775,000</option>
                                        <option value="1800000">€1,800,000</option>
                                        <option value="1825000">€1,825,000</option>
                                        <option value="1850000">€1,850,000</option>
                                        <option value="1875000">€1,875,000</option>
                                        <option value="1900000">€1,900,000</option>
                                        <option value="1925000">€1,925,000</option>
                                        <option value="1950000">€1,950,000</option>
                                        <option value="1975000">€1,975,000</option>
                                        <option value="2000000">€2,000,000</option>
                                    </select>
                                </div>
                            </div>
                            <input type="hidden" name="maxlimit" value="" />
                            <input type="hidden" name="luxury" value="" />
                            <input type="hidden" name="status" value="" />
                            <input type="hidden" name="sort" value="" />
                            <input type="submit" value="Search Now" />

                        </form>

                    </div>

                    <Link to="/account/login" className="btn alert">New Property Alert <i className="fa fa-bell"></i></Link>

                </div>
            </aside>
            <EnquiryBox />
        </>
    )
}
