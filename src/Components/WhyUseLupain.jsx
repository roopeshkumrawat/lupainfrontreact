import homeIcon from "../images/icon-house.png";
import handIcon from "../images/icon-handshake.png";
import poundIcon from "../images/icon-pound.png";

function WhyUseLupain() {
    
    return (
        <section className="why">
            <div className="wrapper">
                <h2>Why Use Lupain Tenerife Estate Agents?</h2>

                <div className="units-row end">

                    <div className="unit-33">
                        <span className="icon"><img src={homeIcon} alt="homeIcon"/></span>
                        <h3>Wide Range Of Properties</h3>
                        <div className="inner">
                            <p>We welcome all our clients with a wide portfolio of fresh properties gathered by our
                                experienced estate agents from the best areas of Tenerife</p>
                        </div>
                    </div>

                    <div className="unit-33">
                        <span className="icon"><img src={handIcon} alt="handIcon"/></span>
                        <h3>Experienced Estate Agents</h3>
                        <div className="inner">
                            <p>We have been in the business here for 14 years. We speak the language and know
                                comprehensively the Spanish Real Estate system. Our staff are fluent in many other
                                languages and are well qualified to help and advise you.</p>
                        </div>
                    </div>

                    <div className="unit-33">
                        <span className="icon"><img src={poundIcon} alt="poundIcon"/></span>
                        <h3>Wide Range Of Properties</h3>
                        <div className="inner">
                            <p>We commit to a successful transaction and we always go the extra mile. All properties
                                require a thorough background check, and we will do it.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyUseLupain;