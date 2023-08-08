import Partners1 from "../images/07c44de9997d743f22f4e6902ae4bbe1.jpg";
import Partners2 from "../images/4738d3d6b52da4d3f140a7a6346c426e.jpg";
import Partners3 from "../images/f7fbc3f0951ec606bb0a3f168f3403a7.jpg";
import Partners4 from "../images/1775947e2db1b81d062c947263dfbcf5.jpg";
import Partners5 from "../images/4e8e8923fa9b75bbe5792a0a77994bd2.jpg";
import OwlCarousel from 'react-owl-carousel';
import sliderImg1 from "../images/051de69513f95adec9ebf291589feaca.jpg";
import sliderImg2 from "../images/07c44de9997d743f22f4e6902ae4bbe1.jpg";
import sliderImg3 from "../images/051de69513f95adec9ebf291589feaca.jpg";
import sliderImg4 from "../images/1b0ab8ccd14cc6b2c9d98f210c8cc039.jpg";
import sliderImg5 from "../images/3c80417f0d0b3fee7cbf4a56f399f25a.jpg";
import { Link } from "react-router-dom";

function Partners() {
    const options ={
        items: 1,
        autoplay: true,
        loop: true,
        dots : false
    }
    return (
        <section className="other">
            <div className="wrapper">
                <div className="units-row">

                    <div className="unit-50 testimonials">
                        <h3>What Our Customers Say</h3>
                        <div className="inner">
                            <OwlCarousel {...options} className="test-slider">
                                <div className="item">
                                    <div className="quote">
                                        <p>Mme. Mignot bought Costa del Silencio</p>
                                        <p>Excellente agence Lupain Tenerife Estate Agents, Nous avons trouvé
                                            l'appartement de nos rêves en quelques jours. Nous ne parlons pas Espagnol
                                            et nous avons été pris en main par Milena qui a effectué pour nous toutes
                                            les démarches avec sourire et gentillesse.</p>
                                    </div>
                                    <p className="name">Mme Mignot</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg1} alt="sliderimg" />
                                        <p>Having lived here for nearly 20 years I have seen many estate agents as I
                                            have bought and sold 8 properties in this period. Recently I purchased a
                                            1-Bed apartment at Cristian Sur from Lupain and their service was
                                            excellent, which is not always the case with other agents. Well done to
                                            the office staff.</p>
                                    </div>
                                    <p className="name">Purchase of Flat</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        We met Victor through our agent when we sold a property in Tenerife .We found
                                        Victor and his staff very helpful and efficient both with his clients and us .
                                        Everything went through smoothly and if we ever buy again we would certainly go
                                        to see him .<p> Sue Weall</p>
                                    </div>
                                    <p className="name">Excellent service</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg2} alt="sliderImg" />
                                        <p>May we take this opportunity to thank you all at Lupain for your help
                                            during our recent purchase of our new home in Tenerife. We found that
                                            the friendly atmosphere created and the advice given was of great
                                            benefit to us in what can be a very stressful time for all involved. I
                                            would have no reservation in recommending your services to any of my
                                            friends who may whish to move to Tenerife and buy a house in the future
                                            and I wish you and your company every success.</p>
                                    </div>
                                    <p className="name">friendly and stress free atmosphere</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <p>dsd</p>
                                    </div>
                                    <p className="name">Billwa Nath Pal</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg3} alt="sliderImg" />
                                        <p>Our dream was to buy a property in the south of the island mainly for
                                            the sunshine and as in investment. Lupain provided us with a no frills
                                            and frank viewing and we fell in love with this flat in Los Cristianos.</p>
                                    </div>
                                    <p className="name">Holiday Home in Tenerife</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg1} alt="sliderImg" />
                                        <p>We have stayed for our first holiday in our new holiday home. Having
                                            just retired we have looked forward to this for a long time, and finally
                                            we purchased our dream home through Lupain. Great service,
                                            professionality, punctuality and knowledge, but altogether with a good
                                            laugh. Thanks so much for making it so easy. Janine and Peter</p>
                                    </div>
                                    <p className="name">At long last</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg2} alt="sliderImg" />
                                        Just back from our week in the 1 bed apartment we bought at Victoria
                                        Court and just like to thank all at Lupain Tenerife Estate Agents for
                                        everything,
                                        especially Joyce & Eirlys for their professional & courteous
                                        response to all of our questions.

                                        Mr. & Mrs. Evans
                                    </div>
                                    <p className="name">Thanks for your courteous service</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <p>My family and I would like to thank Eirlys and Chris at Lupain Estate Agents
                                            for their professional service, hospitality and assistance in trying to find
                                            a property for purchase in Tenerife. They arranged everything for me
                                            including getting my NIE, bank account, handled all the signing at the
                                            Notary. They were very accommodating and patient. I'm disabled, and if I
                                            needed, they took to me around; they have been superb in their
                                            communications with us at all times.</p>
                                        <p>I would highly <strong>recommend for everybody.</strong> 11.11.2016</p>
                                    </div>
                                    <p className="name">Laszlo Hajdi</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg4} alt="sliderImg" />
                                        <p>Buying a property abroad can be a daunting experience so we were really
                                            pleased to have found Lupain Tenerife Estate Agents. We bought our off plan
                                            apartment a year ago and have received superb advice and support during
                                            the whole process from Lupain Tenerife Estate Agents who undoubtedly must be
                                            one of
                                            the top estate agents in Tenerife. We have no hesitation in recommending
                                            them to others for a friendly, efficient and all round professional
                                            service.</p>
                                    </div>
                                    <p className="name">Lupain Tenerife Estate Agents must be undoubtedly one of the top
                                        estate agents in Tenerife</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg5} alt="sliderImg" />
                                        <p>For so many years we have had a dream of having a small holiday home in
                                            Tenerife. We have come for our holidays for nearly 20 years, and at
                                            last we have bought our lovely apartment. We found the Lupain staff so
                                            kind and understanding, listening to our comments and needs, and finding
                                            us exactly what we were looking for, an apartment in a friendly complex
                                            with sea views. We have painted and decorated and refurnished a bit,
                                            and now all we have to do is unpack a small suitcase and begin to enjoy
                                            our holiday. Thanks to you all.</p>
                                    </div>
                                    <p className="name">A dream come true</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <p>Review of La Caleta apartment by Dorothy Bishop</p>
                                        {/* <u1: p></u1: p> */}
                                        {/* <p> */}
                                            {/* <u1: p> </u1: p> */}
                                        {/* </p> */}
                                        <p>This is a well-equipped and spacious apartment in a prime location in La
                                            Caleta; we have stayed there twice and look forward to returning.</p>
                                        {/* <u1: p></u1: p> */}
                                        <p>A particularly attractive feature is the wrap-around balcony, which gives
                                            great panoramic views out to sea, along the coast, and to the mountains.
                                            There is a constant supply of paragliders coming off the mountain to
                                            entertain you.</p>
                                        {/* <u1: p></u1: p> */}
                                        <p>The apartment is well-equipped with a dishwasher, washing machine, drier, and
                                            everything you need in the kitchen. The wifi has always worked well for us.
                                        </p>
                                        {/* <u1: p></u1: p> */}
                                        <p>La Caleta has an amazing collection of outstanding restaurants – you can eat
                                            at a different place every day and have a great meal every time. </p>
                                        {/* <u1: p></u1: p> */}
                                        <p>There are nice walks along the sea front – you can go all the way to Adeje on
                                            foot.</p>
                                        {/* <u1: p></u1: p> */}
                                    </div>
                                    <p className="name">Dorothy Bishop</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        While buying a property in a non-English speaking country would normally be a
                                        daunting prospect, Lupain estate agents make the whole process very easy and
                                        stress free. A combination of professionalism and individual attention from the
                                        Lupain staff make me feel like I was a valued customer and that they were a
                                        company I could trust. Victor was especially helpful when I created a problem by
                                        agreeing to purchase a property and then changing my mind and deciding to buy
                                        another property instead. I would also single out Joyce for her invaluable
                                        advice on what and what not to look for in a property, her knowledge of Tenerife
                                        and of the whole process of purchasing a property. Not to mention all the
                                        driving she did for me and the many cappuccino's she bought me. To summarise, I
                                        would not hesitate to deal with Lupain again and I would recommend them to
                                        anybody wishing to invest in property in Tenerife.<p> Kevin Monahan</p>
                                    </div>
                                    <p className="name">Not a daunting prospect at all!!</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg1} alt="sliderImg" />
                                        <p>After visiting several agents we found HomeTenerife the only one which
                                            did not push us into buying. Their explaination of all the points we
                                            asked and were helpful in every way and guided us through the buying
                                            process. I would recommend them to anyone.</p>
                                    </div>
                                    <p className="name">A helpful service</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        We had a wonderful experience finding our holiday home in Los Cristianos through
                                        the help and advice of Lupain Tenerife Estate Agents. They guided us from
                                        beginning to end to understand the process and with dedication especially to
                                        Eirlys and Bernardo which whom we dealt directly. We are very happy with the
                                        results as this will give us plenty of holidays in the sun especially for us
                                        from Ireland. We recommend anyone to choose their services. James Reilly </div>
                                    <p className="name">James Reilly</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        I would like to highly recommend Lupain Estate Agents for the purchase or sale
                                        of property on Tenerife, especially for non-Spanish speakers. They were
                                        exceptionally professional in their dealing with both ourselves and prospective
                                        buyers of our property. They were able to take the time to explain the legal
                                        system, attend to our NIEs and procedures for conducting such a business
                                        transaction in lay mans terms to my wife and I without any confusion or
                                        miscommunication. They were always prompt in their replies to numerous queries
                                        on both sides of the deal, and very dependable overall. We specifically dealt
                                        with Eirlys who was very accommodating and patient. For anyone looking to invest
                                        in a property here, chose Lupain Estate Agents and you will not regret it!
                                    </div>
                                    <p className="name">Kathleen O'Riordan</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg2} alt="sliderImg" />
                                        You arranged your schedule so that you could meet with me for the short
                                        period I would be visiting in order to find a home. You assessed my
                                        needs and desires and showed me many suitable properties. You were very
                                        knowledgeable about the demographics of the area, investment
                                        suitability, convenience of locations, property values, available
                                        resources and many other items that a person needs to know before
                                        purchasing a home. This was a good service from start to finish.
                                    </div>
                                    <p className="name">Great FlyBuy Service</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        Just purchased an apartment in Los Cristianos through Lupain. Although the
                                        property we wanted to view had just been sold we were shown 4 others within our
                                        preferred location and price range. Victor was very helpful and professional.
                                        Not once did we feel like he was trying the "hard sell" routine. During the
                                        negotiation process he worked hard to get a price both ourselves and the vendor
                                        were happy with. The whole procedure from acceptance to completion went smoothly
                                        and took approximately 4.5 weeks </div>
                                    <p className="name">Peter Woodcock</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg3}alt="sliderImg" />
                                        Since I started renting the apartment out in May, apart from about 4
                                        weeks, I will have had full occupancy until beginning of Dec. It is also
                                        fully booked between mid Jan until end of Mar 07 and also for several
                                        other weeks already in 2007. I'm also getting repeat business which is
                                        nice! I think the trick was to get it decorated and refurbished, and
                                        charge realistic prices (200 per week). I have also done it with just
                                        minimal advertising (in a magazine designed to attract the newly
                                        retired!) and with work colleagues/friends. Fred has also proved to be a
                                        good find (although he hasn't actually provided any clients) but he has
                                        been very helpful and reliable and again I would recommend him if you
                                        have clients in a similar boat to me. Ian the builder is also a top
                                        bloke and has done several other jobs for me on the property.

                                        Anyway Ian, I just wanted to say thanks for help, I'm next out in Aug so
                                        if you feel like a beer let me know! I hope everything is going well
                                        with you and that you are not having to work too hard!!
                                    </div>
                                    <p className="name">Thank You Ian</p>
                                </div>
                                <div className="item">
                                    <div className="quote">
                                        <img src={sliderImg5} alt="sliderImg" />
                                        Lupain Tenerife Estate Agents are the only estate agent we have used that sent
                                        us a
                                        monthly newsletter with properties matching our requirements that where
                                        on the market, we will definitely use them again, both to buy and sell.
                                        First class service!
                                    </div>
                                    <p className="name">First class service</p>
                                </div>
                            </OwlCarousel>
                        </div>
                        {/* <!-- <div className="bottom">

                        </div> --> */}
                    </div>

                    <div className="unit-50 blog">

                        <div className="post">
                            <h4>Property Investments in Tenerife</h4>
                            <p>Property Investments in TenerifeIf you are seriously thinking about investing in
                                property in Tenerife then here at Lupain Estate Agents we have designed a program to
                                ensure
                                that your investment in
                                Tenerife property
                                provides you with a worry free income and favourable return on your money. The
                                program has proved to be extremely successful and very popular.
                                Many people travel here and fall in love with island
                                and return home with a dream to one day own a property here. The climate of the island
                                ensures that the weather here is dry and sunny for almost the year. This
                                means that the island is a year round destination, which is one of the
                                factors that makes this island so popular with tourists. Buying a property here whether
                                its
                                a studio, apartment, villa, land or even a business has proved extremly
                                popular and sucessful over the last few years and it looks set to continue in
                                this manner for many more years. Just imagine owning your own holiday home here and not
                                having to
                                worry about accommodation when planning to travel to Tenerife for you or your family.
                                With our help we can
                                make this dream become a reality.

                                Investment periods are generally for between 15
                                and 18 months and the profit return in normal circumstances can be as high as
                                25% to 35% profit on your investment.
                                The availability of prime Tenerife property
                                investment opportunities is limited, so please
                                contact us
                                today for comprehensive details of how our program
                                works and current inventory available.
                                Investing in property in Tenerife over the years
                                has always proved viable. With so many off plan property and new developments springing
                                up all over the island its no wonder
                                property investors have flocked to the island to invest.
                                Lupain Estate Agents have provided many investors with excellent
                                returns on property investments over the years and we pride ourselves for our
                                professional approach to property investments on our island. Rest assured we
                                not only source the right investment for you but we live the investment
                                to ensure you return to us time after time and recommend us to your family and friends.
                                A survey on Tenerife Property Buying which was
                                published, showed statistics like, 60% of respondents said rental income was the
                                most important factor in their decision to buying Tenerife Property and 25% said
                                their Tenerife investment was intended primarily as a retirement home. But the figures
                                seem to tip toe past the most obvious reason of owning the apartment in Los
                                Cristianos which is more the emotional reasons. It’s fun, romantic, an escape to the sun
                                a
                                dream come true for so many of us. With great cuisine and beaches that’s really why most
                                foreigners buy
                                property on Tenerife.

                                The problem is that when we put our sensible hats on,
                                we are perfectly capable of evaluating an investment. We look at the historical
                                capital growth in Tenerife Property over the last 20 years and use that as a
                                basis for projecting our expected return. But with properties, many of
                                us use these figures simply to justify with our brain what our hearts are
                                telling us to do.
                                But there is another breed of investor. These are
                                people who have done their analysis and worked out that owning a property in
                                Tenerife is an investment that outstripped banks, stocks & shares
                                etc. They have worked out that the second home such as an apartment, house or
                                villas, means ownership is no longer reserved to the rich, but also
                                of the financially savvy who make sure their investments returns stack up. The returns
                                to be made on holiday property in Tenerife have markedly reduced the long term
                                costs of owning a second home and made it a viable option for many people who
                                would not otherwise have been able to afford it.

                            </p>
                            <Link to="/property-investments-in-tenerife" className="readmore btn">Read More</Link>
                        </div>
                        <div className="post">
                            <h4>Apartments for sale in Tenerife</h4>
                            <p>Apartments for sale in TenerifeThe apartment sales in Tenerife especially in Los
                                Cristianos and Las Americas have increased in the last couple of years and, as a result,
                                the market has become more diversified. You can find modern affordable apartments
                                through Lupain Estate Agents and you can also get luxury apartments with all the
                                commodities that you expect and desire.
                                The one bedroom apartment is the most popular option for a number of different reasons.

                                A one bedroom apartment in Tenerife offers amazing flexibility
                                One bedroom apartments can comfortably accommodate four adults. The separate bedroom
                                offers privacy and breaks up the overall structure of the apartment, giving you a
                                separate room in which to sleep, relax and store your clothes and other items.
                                A sofa bed in the living room is a perfect way in which to turn the living space of the
                                apartment into a separate “second” bedroom.
                                The bed can be used during the night for sleeping and during the daytime can be used as
                                a sofa and once again your living area can be used as it should be, for relaxing, eating
                                and socialising.
                                Another reason for the popularity of one bedroom apartments when people choose to invest
                                in property in Tenerife is the price.
                                Obviously one bedroom apartments are considerably cheaper than apartments with two or
                                three bedrooms, however as I previously explained one bedroom apartments can adequately
                                accommodation four adults so there is no real need to purchase a property in Tenerife
                                with a second bedroom if it is not entirely necessary.
                                One other important factor is the lower rate of community fees that may need to paid
                                (depending on the complex) in comparison to two and three bedroom apartments.
                                Many people choose to buy apartments and villas in Tenerife to rent out to holidaymakers
                                when they are not in use in order to offset some of the initial purchase price buy
                                making the property almost pay for itself.
                            </p>
                            <Link to="/apartments-for-sale-in-tenerife" className="readmore btn">Read More</Link>
                        </div>
                        <div className="post">
                            <h4>Villas for sale in Tenerife</h4>
                            <p>Villas for sale in TenerifeVillas for sale in Tenerife have also increased considerably
                                for locations such as Torviscas Alto, Fañabe, Palm Mar, Costa del Silencio, Callao
                                Salvaje, El Medano, Los Gigantes, Las Chafiras, Parque de la Reina, San Miguel, Chayofa,
                                Adeje, Costa Adeje, Arona, Golf del Sur or San Eugenio and, due to the development of
                                the market, you can now find spectacular villas or luxurious penthouses that are already
                                furnished. Most of the people look for luxurious villas on the hills above the most
                                active and touristic areas because, apart from the innovative elegant and modern design,
                                they also offer amazingly beautiful views over the ocean.</p>
                            <Link to="/villas-for-sale-in-tenerife" className="readmore btn">Read More</Link>
                        </div>

                    </div>

                </div>
                <div className="partners">

                    <h2 className="lined">Our Partners</h2>

                    <div className="logos">
                        <p className="logo">
                            <Link title="Zona Comercial Abierta Los Cristianos"
                                to="/"
                                 rel="nofollow"><img
                                    title="Lupain Tenerife Estate Agents tenerife zona abierta los cristianos"
                                    alt="Lupain Tenerife Estate Agents tenerife zona abierta los cristianos"
                                    src={Partners1} /></Link>
                        </p>
                        <p className="logo" style={{ textAlign: "justify" }}><Link
                            title="Rightmove - Lupain Tenerife Estate Agents Tenerife Listings"
                            to="/"
                             rel="nofollow"><img
                                title="Lupain Tenerife Estate Agents tenerife rightmove partner"
                                alt="Lupain Tenerife Estate Agents tenerife rightmove partner"
                                src={Partners2} /></Link>
                        </p>
                        <p className="logo" style={{ textAlign: "justify" }}><Link
                            title="Zoopla - Tenerife Property Sales Listings"
                            to="/"
                             rel="nofollow"><img
                                title="Lupain Tenerife Estate Agents los cristianos tenerife zoopla partner"
                                alt="Lupain Tenerife Estate Agents los cristianos tenerife zoopla partner"
                                src={Partners3} /></Link>
                        </p>
                        <p className="logo" style={{ textAlign: "justify" }}><Link
                            title="Primelocation - Los Cristianos Property Sales Listings"
                            to="/"
                             rel="nofollow"><img
                                title="Lupain Tenerife Estate Agents tenerife primelocation partner"
                                alt="Lupain Tenerife Estate Agents tenerife primelocation partner"
                                src={Partners4} /></Link>
                        </p>
                        <p className="logo" style={{ textAlign: "justify" }}><Link
                            title="Lupain Tenerife Estate Agents - Los Cristianos property sales listings"
                            to="/"
                            rel="nofollow"><img alt="tenerife property sales by kyero"
                                src={Partners5} /></Link>
                        </p>
                    </div>

                </div>
            </div>
        </section >
    )
}
export default Partners;