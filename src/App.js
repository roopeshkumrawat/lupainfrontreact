
import './global.css';
import Header from './Components/Header';
import HeroSearch from './Components/HeroSearch';
import Footer from './Components/Footer';
import Partners from './Components/Partners';
import About from './Components/About';
import WhyUseLupain from './Components/WhyUseLupain';
import LatestProperties from './Components/LatestProperties';
import Help from './Components/Help';
import Locations from './Components/Locations';
import FeaturedProperties from './Components/FeaturedPorperties';
import MobileMenus from './Components/MobileMenus';
import { useState } from 'react';


function App() {
  const [currency, setCurrency] = useState("€");
  const setCurrencyEuro=()=>{
      setCurrency("€");
  }
  const setCurrencyDollar=()=>{
      setCurrency("$");
  }
  const setCurrencyPound=()=>{
      setCurrency("£");
  }


  return (
    <>
      <MobileMenus />
      <Header currency={currency} setCurrencyDollar={setCurrencyDollar} setCurrencyEuro={setCurrencyEuro} setCurrencyPound={setCurrencyPound}/>
      <HeroSearch />
      <FeaturedProperties currency={currency} />
      <Locations />
      <Help />
      <LatestProperties currency={currency} />
      <About />
      <WhyUseLupain />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
