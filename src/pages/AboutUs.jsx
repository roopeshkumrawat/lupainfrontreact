import React from 'react';
import AboutNavWithEnquiryBox from '../Components/globalComponents/AboutNavWithEnquiryBox'
import aboutImg from "../images/95e5c53524c4306fe9b6415ac3e0ef09.jpg";
export default function AboutUs(props) {
    return (
        <section className="page">

            <div className="wrapper units-row">

                <div className="content unit-70">
                    <h1>About Us</h1>
                    <p>
                        <img style={{margin: "0px 10px 10px 0px", lineHeight: "1.6em", letterSpacing: "0.7px", fontSize: "14px", float: "left"}} alt="img" src={aboutImg} />
                         Lupain Tenerife Estate Agents is the leading tenerife estate agency with almost twenty years of experience in offering professional and transparent services to international clients. Since 1996, we have helped thousands of clients to buy or sell property in tenerife faster, easier and without the stress usually associated with this.</p><p>With all clients we aim to fully understand their requirements and concerns and offer personalized solutions and answer to their questions. We guide every client through the process of buying or selling property and explain every step of the process.</p><p>Lupain Tenerife Estate Agents is a family run business that emphasizes trust, good traditional service and professionalism. We are confident in our ability to find the excellent tenerife property for each buyer in a short amount of time. We invest time and energy in searching for suitable properties even if they are not in our current offer. We cherish the satisfaction of our customers and we value their friendship.</p><p>We only consider a transaction successful when you are happy with your acquisitions and your new home or tenerife business is exactly as you dreamt it would be.</p><p>Our estate agents will always offer the best option of holiday homes, permanent family homes, locations for business in los cristianos or playa las americas, or apartments you can rent out based on their lengthy experience and invaluable local knowledge. We can help you start a new life here or a successful business without dealing with local bureaucracy. With our help you`ll only see the sunny and happy part of life in tenerife.</p><p>We are always with you on every step of your search and will guide you throughout the property purchase process. We offer useful services like translations, consultancy regarding banking or financing, help with local paper work and we`ll take you to see the most sought after properties in los cristianos and any other holiday resort you might be interested in.</p><p>Take a moment and explore our full range of complementary services that we offer or browse our tenerife property database and see the full range of properties that we currently have for sale in los cristianos and other areas. And make sure you contact us if you see a property in tenerife that you would like to purchase at a better price and to tell us what you are looking for. You`ll get the help of a leading tenerife estate agency. We`re always at your service</p>
                </div>
                <AboutNavWithEnquiryBox formHeading={props.formHeading}/>
            </div>

        </section>
    )
}
