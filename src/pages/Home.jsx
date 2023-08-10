import HeroSearch from "../Components/HeroSearch";
import FeaturedProperties from "../Components/FeaturedPorperties";
import Locations from "../Components/Locations";
import Help from "../Components/Help";
import LatestProperties from "../Components/LatestProperties";
import About from "../Components/About";
import WhyUseLupain from "../Components/WhyUseLupain";
import Partners from "../Components/Partners";
function Home(props) {
    return (
        <>
            <HeroSearch />
            <FeaturedProperties currency={props.currency}/>
            <Locations />
            <Help />
            <LatestProperties currency={props.currency} />
            <About />
            <WhyUseLupain />
            <Partners />
        </>
    )
}
export default Home;