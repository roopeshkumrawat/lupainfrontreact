import { useEffect } from 'react';
import React from 'react';
import './global.css';
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
import TenerifeProperties from './pages/TenerifeProperties';


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
    <>
      <div id="google_translate_element DisplayGoogleTranslate"></div>
      <MobileMenus />
      <Header currency={currency} setCurrencyDollar={setCurrencyDollar} setCurrencyEuro={setCurrencyEuro} setCurrencyPound={setCurrencyPound} />
      <Routes>
        <Route index element={<Home currency={currency} />} />
        <Route path="/tenerifeproperties" element={<TenerifeProperties />} />
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
    </>
  );
}

export default App;
