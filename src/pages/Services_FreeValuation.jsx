// import { Link } from "react-router-dom";
import sellingHomeImg from "../images/da166bb6923cb96f1a9824ede184b718.jpg"
import AboutNavWithEnquiryBox from "../Components/globalComponents/AboutNavWithEnquiryBox";
function Services_FreeValuation(props) {
    return (
        <section className="page">

            <div className="wrapper units-row">

                <div className="content unit-70">

                    <p><img src={sellingHomeImg} /></p><p>Arrange a <em><strong>FREE</strong></em> property valuation today!</p><p>Want to find out how much your property is worth? Our expert Property Consultants can carry out a valuation, with intimate and unparalleled knowledge of property values in your area.</p><p>This is a<em><strong> free no obligation</strong></em> service which enables us to provide you with an up to date market valuation for your property.</p><p>All you need do is give us your name and your telephone number and one of our team will endeavour to call you back at a time convenient to you to do the rest.</p><p>Thinking about selling or letting your home? Get a FREE agent valuation..</p>

                    <div className="valuation box">

                        <h3>Free Property Valuation</h3>

                        <div className="inner">

                            <form method="post" action="/cms/email-handler.php" className="form" id="contactForm" novalidate="novalidate">

                                <div className="units-row end">
                                    <div className="unit-50">
                                        <label>Your Name</label>
                                        <input type="text" name="name" placeholder="Your Name" required="" aria-required="true" />
                                    </div>
                                    <div className="unit-50">
                                        <label>Your Email</label>
                                        <input type="email" name="email" placeholder="Your Email" required="" aria-required="true" />
                                    </div>
                                </div>

                                <div className="units-row end">
                                    <div className="unit-50">
                                        <label>Your Phone</label>
                                        <input type="text" name="phone" placeholder="Your Phone" required="" aria-required="true" />
                                    </div>
                                </div>

                                <div className="units-row end">
                                    <div className="unit-100">
                                        <label>Property Address</label>
                                        <textarea name="message" placeholder="Property Address"></textarea>
                                    </div>

                                </div>

                                {/* <div className="units-row">
                                    <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />
                                    <label>Enter code</label>
                                    <input type="text" name="captcha_code" size="10" maxlength="6" required="" aria-required="true" />
                                </div> */}
                                <div className="units-row">
                                    <input type="submit" value="Request Valuation" />
                                </div>
                                <input type="hidden" name="subject" value="Property Valuation Request" />
                                <input type="hidden" name="return-path" value="/free-property-valuation" />
                            </form>
                        </div>

                    </div>
                </div>

                <AboutNavWithEnquiryBox formHeading={props.formHeading} />
            </div>

        </section>
    )
}
export default Services_FreeValuation;