import { Link } from "react-router-dom"
function AboutNavWithEnquiryBox(props) {
    return (
        <aside className="unit-30">

            <ul className="about-nav">
                <li>About Lupain</li>
                <li className="active"><Link to="/services_freevaluation">Get a FREE Valuation</Link></li>
                <li className=""><Link to="/historyoflupain">History of Lupain</Link></li>
                <li className=""><Link to="/services_affiliateprogram">Affiliate Program</Link></li>
                <li className=""><Link to="/buying_properties">Buying Property</Link></li>
                <li className=""><Link to="/selling">Selling Property</Link>
                </li><li className=""><Link to="/paperwork">Paperwork</Link></li>
                <li className=""><Link to="/mortgages">mortgages</Link></li>
                <li className=""><Link to="/testimonial">testimonial</Link></li>
            </ul>
            <div className="enquiry box">
                <Link name="contact"></Link>
                <h3>{props.formHeading}</h3>

                <div className="inner">
                    <form method="post" action="/_includes/_functions/email_handler.php" className="form" id="contactForm">
                        <label>Your Name</label>
                        <input type="text" name="name" placeholder="Your Name" value="" required="" />

                        <label>Your Email</label>
                        <input type="email" name="email" placeholder="Your Email" value="" required="" />

                        <label>Your Phone</label>
                        <input type="text" name="phone" placeholder="Your Phone" value="" required="" />

                        <label>Your Message</label>
                        <textarea name="message" placeholder="Your Message"></textarea>

                        {/* <div>
                            <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />
                            <Link to="#" onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false" style={{ fontSize: "30px", fontWeight: "bold", position: "relative", top: "-14px" }}><span style={{ color: "#fff" }}>↺</span></Link>
                        </div> */}

                        <label>Enter code</label>
                        <input type="text" name="captcha_code" autoComplete="new-captcha" size="10" maxLength="6" required="" />


                        <input type="hidden" name="subject" value="Contact Form Enquiry" />
                        <input type="hidden" name="return-path" value="/free-property-valuation" />
                        <button className="btn" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Link to="tel:+34922796527" className="callus">
                <h3>Call Today <i className="fa fa-phone"></i></h3>
                <h4>0034922796527</h4>
                <p>Lines are open 24hrs, 7 days a week</p>
            </Link>
            <Link className="chat" to="">
                <h3><i className="fa fa-comments-o"></i>Chat to our Team</h3>
                <p>Use our live chat feature to speak to one of our agents</p>
            </Link>
        </aside>

    )
}

AboutNavWithEnquiryBox.defaultProps = {
    formHeading: 'Contact Us',
  };

  
export default AboutNavWithEnquiryBox;