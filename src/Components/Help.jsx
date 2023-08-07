import help_people from "../images/help-people.png"

function Help() {
    return (
        <section className="help">
            {/* <a name="contact"></a> */}

            <div className="wrapper units-row end">

                <div className="unit-40 form">

                    <h2>Any Questions?</h2>
                    <h3>We're Here To Help!</h3>


                    <form method="post" action="/cms/email-handler.php" className="form" id="contactForm">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="phone" placeholder="Phone" required />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        {/* <!-- <div>
                        <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />
                        <a href="#"
                            onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false"
                            style="font-size:30px; font-weight:bold; position:relative; top: -14px;"><span
                                style="color:#fff;">&#8634;</span></a>
                    </div> --> */}
                        <input type="text" name="captcha_code" autoComplete="new-captcha" size="10" maxLength="6"
                            placeholder="Enter code" required />
                        <input type="hidden" name="subject" value="Contact Form Enquiry" />
                        <input type="hidden" name="return-path" value="/" />
                        <button className="btn" type="submit">Send</button>
                    </form>
                </div>

                <div className="unit-60">
                    <img src={help_people} className="people" alt="peopleimg" />
                </div>

            </div>

        </section>
    )
}
export default Help;