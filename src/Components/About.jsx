import { Link } from "react-router-dom";
function About(){
    return(
        <section className="aboutintro">
        <div className="wrapper">
            <h2>About Lupain Tenerife Estate Agency Service</h2>
            <p>Lupain Tenerife Estate Agents is the leading Tenerife estate agency with almost twenty years of
                experience in offering professional and transparent services to international clients. Since 1996,
                we have helped thousands of clients to buy or sell property in Tenerife.</p>
            <Link to="/about-us" className="more">Read More</Link>
        </div>
    </section>
    )
}
export default About;