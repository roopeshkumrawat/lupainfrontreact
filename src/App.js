import { useEffect } from 'react';
import React from 'react';
import './global.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MobileMenus from './Components/MobileMenus';
import { useState } from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Services_FreeValuation from './pages/Services_FreeValuation';
import Services_Affiliateprogram from './pages/Services_Affiliateprogram';
import Selling from './pages/Selling';
import Contact from './pages/Contact';
import Rental from './pages/Rental';
import AboutUs from './pages/AboutUs';
import HistoryOfLupain from './pages/HistoryOfLupain';
import Testimonial from './pages/Testimonial';
import Information_buyingProperties from './pages/Information_buyingProperties';
import Information_paperwork from './pages/Information_paperwork';
import Information_mortgages from './pages/Information_mortgages';
import PrivateSeller from './pages/PrivateSeller';
import AffiliateAgentDevloper from './pages/AffiliateAgentDevloper';
import SellingBusiness from './pages/SellingBusiness';
import Luxury from './pages/Luxury';
import SendMessage from './Components/globalComponents/SendMessage';


function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);



  const [currency, setCurrency] = useState("€");
  const setCurrencyEuro = () => {
    setCurrency("€");
  }
  const setCurrencyDollar = () => {
    setCurrency("$");
  }
  const setCurrencyPound = () => {
    setCurrency("£");
  }

  return (
    <div className='app'>
      <div id="google_translate_element DisplayGoogleTranslate"></div>
      <MobileMenus />
      <Header currency={currency} setCurrencyDollar={setCurrencyDollar} setCurrencyEuro={setCurrencyEuro} setCurrencyPound={setCurrencyPound} />
      <Routes>
        <Route index element={<Home currency={currency} />} />
        <Route path="/tenerifeproperties" element={<Luxury  currency={currency} heading="Tenerife Properties for Sale" totalProperties="1484" />} />
        <Route path="/cristianosproperties" element={<Luxury  currency={currency} heading="Los Cristianos Properties for Sale" totalProperties="312" />} />
        <Route path="/fanabeproperties" element={<Luxury  currency={currency} heading="Fanabe Properties for Sale" totalProperties="6" />} />
        <Route path="/americasproperties" element={<Luxury  currency={currency} heading="Playa de Las Americas Properties for Sale" totalProperties="133" />} />
        <Route path="/adejeproperties" element={<Luxury  currency={currency} heading="Costa Adeje Properties for Sale" totalProperties="82" />} />
        <Route path="/eugenioproperties" element={<Luxury  currency={currency} heading="San Eugenio Properties for Sale" totalProperties="111" />} />
        <Route path="/torviscasproperties" element={<Luxury  currency={currency} heading="Torviscas Properties for Sale" totalProperties="101" />} />
        {/* <Route path="/luxury" element={<Luxury  currency={currency} heading="Luxury Properties in Tenerife" totalProperties="178" />} /> */}
        <Route path="/businessproperties" element={<Luxury  currency={currency} heading="Business Properties in Tenerife" totalProperties="30" />} />
        <Route path="/luxury" element={<Luxury  currency={currency} heading="Luxury Properties in Tenerife" totalProperties="178" />} />

        <Route path="/selling" element={<Selling />} />
        <Route path="/rental" element={<Rental formHeading="General Enquiry" currency={currency} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/historyoflupain" element={<HistoryOfLupain/>} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path= "/buying_properties" element= {<Information_buyingProperties />} />
        <Route path="/privateseller" element={<PrivateSeller />} />
        <Route path="/affiliate_agent" element={<AffiliateAgentDevloper />} />
        <Route path="/selling_business" element={<SellingBusiness />} />
        <Route path="/paperwork" element={<Information_paperwork />} />
        <Route path="/mortgages" element={<Information_mortgages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services_freevaluation" element={<Services_FreeValuation />} />
        <Route path="/services_affiliateprogram" element={<Services_Affiliateprogram />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SendMessage />
    </div>
  );
}

export default App;
