// import { useEffect } from 'react';
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


function App() {
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
      <MobileMenus />
      <Header currency={currency} setCurrencyDollar={setCurrencyDollar} setCurrencyEuro={setCurrencyEuro} setCurrencyPound={setCurrencyPound} />
      <Routes>
          <Route index element={<Home currency={currency} />} />
          <Route path="/selling" element= {<Selling />}/>
          <Route path="/rental" element= {<Rental  formHeading="General Enquiry" currency={currency} />}/>
          <Route path="/about" element= {<AboutUs/>}/>
          <Route path="/blog" element= {<Blog/>}/>
          <Route path="/services_freevaluation" element= {<Services_FreeValuation />}/>
          <Route path="/services_affiliateprogram" element= {<Services_Affiliateprogram />}/>
          <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
