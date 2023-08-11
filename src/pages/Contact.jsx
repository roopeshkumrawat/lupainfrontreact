import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="wrapper">
                    <div className="units-row end">
                        <div className="unit-33 numbers">
                            <h3>Get in Touch</h3>
                            <p><strong>Tel</strong> +34 922 796 527</p>
                            <p><strong>&nbsp;</strong> (0034) 922 787 278</p>
                            <p><strong>Email</strong> <Link to="mailto:info@lupain.com">info@lupain.com</Link></p>
                        </div>
                        <div className="unit-33 hours">
                            <h3>Opening Hours</h3>
                            <p>Mon - Thursday: 9.30 to 18.30 GMT
                                <br />Friday: 9.30 to 18.00 GMT
                                <br />Saturday: 9.30 to 13.30 GMT
                            </p>
                        </div>
                        <div className="unit-33 address">

                            <h3>Where We Are</h3>
                            <p>
                                Lupain Tenerife Estate Agents<br />
                                Edifico Cristian Sur, Av. de Ámsterdam, 4,<br />
                                38650 Los Cristianos,<br />
                                Santa Cruz de Tenerife, Spain
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map">

                <div className="wrapper">

                    <div className="units-row">

                        <div className="unit-50 map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0892875777413!2d75.88852242437552!3d22.762067476001256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302b03aa08e53%3A0x81c5ff9aa0c751d6!2sSlice%204%2C%20Aranya%20Nagar%2C%20Scheme%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1691735966351!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="unit-50">

                            <form method="post" action="/cms/email-handler.php" className="form" id="contactForm" noValidate="novalidate">


                                <div className="input">
                                    <label htmlFor="name">Name</label>
                                    <input required="" type="text" name="name" placeholder="Name" aria-required="true" />
                                </div>
                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input required="" type="email" name="email" placeholder="Email" aria-required="true" />
                                </div>
                                <div className="input">
                                    <label htmlFor="Telephone">Telephone</label>
                                    <input className="" type="text" name="phone" placeholder="Telephone" required="" aria-required="true" />
                                </div>
                                <div className="input">
                                    <textarea required="" name="message" placeholder="Message" aria-required="true"></textarea>
                                </div>

                                <div className="units-row">
                                    <div className="unit-50">
                                        {/* <div>
                                            <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />
                                            <a href="#" onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false" style={{fontSize:"30px", fontWeight:"bold", position:"relative", top: "-14px"}}><span style={{color:"#000"}}>↺</span></a>
                                        </div> */}
                                        <label>Enter code</label>
                                        <input type="text" name="captcha_code" autoComplete="new-captcha" size="10" maxLength="6" required="" aria-required="true" />
                                    </div>
                                    <div className="unit-50">
                                        <input type="submit" value="Send" className="btn right" />
                                    </div>
                                </div>
                                <input type="hidden" name="subject" value="Contact Form Enquiry" />
                                <input type="hidden" name="return-path" value="/contact" />

                            </form>


                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Contact;