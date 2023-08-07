
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


function App() {
  return (
    <>
      <Header />
      <HeroSearch />
      <FeaturedProperties />
      <Locations />
      <Help />
      <LatestProperties />
      <About />
      <WhyUseLupain />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
