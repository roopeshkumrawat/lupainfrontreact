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
          <Route path="/blog" element= {<Blog/>}/>
          <Route path="/services_freevaluation" element= {<Services_FreeValuation/>}/>
          <Route path="/services_affiliateprogram" element= {<Services_Affiliateprogram/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
