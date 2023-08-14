import React from 'react'
import paperwork1 from "../images/office-inside.jpg"
import paperwork2 from "../images/selling_4.jpg"
import paperwork3 from "../images/prop_search.jpg"
import paperwork4 from "../images/prop_viewings.jpg"
import paperwork5 from "../images/prop_offer.jpg"
import paperwork6 from "../images/Magnifying_glass_over_house_03.jpg" 
import paperwork7 from "../images/hand-shake.jpg"
import paperwork8 from "../images/further-costs.jpg"
import paperwork9 from "../images/keys.jpg"
import AboutNavWithEnquiryBox from '../Components/globalComponents/AboutNavWithEnquiryBox'
export default function Information_paperwork() {
    return (
        <section className="selling">

            <div className="wrapper units-row">

                <div className="content unit-70">


                    <img src={paperwork1} alt="img" />

                    <h1>Spanish Property formalities and paperwork</h1>

                    <p>Buying Tenerife property is a very different process to buying property in the United Kingdom and many other European countries. Not only is one buying property in a foreign country but of course all the transactions and relevant paperwork is in Spanish, added to this is the fact that many things are done in a completely different manner. For example when buying an apartment in Tenerife one doesn’t just buy the apartment but also a share of the pathways, swimming pools, lifts and all other facilities which are part of the complex. The costs and expenses of these items is calculated on a percentage basis and apportioned accordingly. There are a whole range of legal requirements for potential buyers of property in Tenerife, all quite logical and straightforward once understood;</p>

                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork2} alt="Tenerife Estate Agent Website" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 1 Register your Property enquiry</h2>
                            <p>The first step is to register your interest in Tenerife Property with us either by email, telephone or our live chat. You can then discuss your questions on Tenerife property and your property requirements with one of our Customer Relations agents.</p><p>You can also register online to gain access to our registered users area with extra features such as the ability to save properties of interest.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork3} alt="Tenerife Property Details" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 2 Start Searching Properties</h2>
                            <p>With a clear understanding of your requirements you will receive a selection of properties that match your criteria. Our Customer Relations agent will also assist you with any queries and FlyBuy bookings till a meeting is arranged to discuss and view properties with one of our experianced Property Consultants.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork4} alt="Tenerife Property Viewings" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 3 View Properties of Interest</h2>
                            <p>We're open at times to suit you, convenient for viewing after work and at weekends.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork5} alt="Tenerife Property Sales" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 4 Make an Offer</h2>
                            <p>Once you've found the property right for you, we'll put your offer forward to the seller, both verbally and in writing.</p><p>Once your offer is accepted, a deposit of 10% will be requested to secure the Property in Tenerife. For piece of mind it is wise at this point to appoint a reputable Spanish lawyer who is independent of the Tenerife Estate Agent.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork6} alt=";Search" tenerife="" property="" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 5 Property Check And Searches</h2>
                            <p>Having paid the holding deposit for that dream apartment what now?</p><p>Well an immediate application for a ‘Title Deed Search’ from the local Town Hall should be placed. This document will tell you if there are any charges, mortgages or outstanding debts. Assuming that all is clear, the Agent or your lawyer will draw up the purchase agreement, which you and the seller would need to sign.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork7} alt="Purchase" agreement="" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 6 Sale Agreement</h2>
                            <p>Probably within four to six weeks later, the paperwork (and in some cases the mortgage application process) will be completed at the offices of a Spanish Notary. The Notary will check and confirms the terms and conditions of the buying Tenerife property.</p><p>If you cannot attend the signing of the title deeds, you need to give a power of attorney to a person you trust fully to complete your property in Tenerife purchase (Lawyer, Estate Agent, friend etc).</p><p>You will be asked to present banker’s drafts to total up to the agreed purchase price as payment to the sellers. If the seller has an outstanding mortgage on the property you are purchasing, you will probably provide a separate banker’s draft made payable to the sellers bank to pay off the mortgage. If the sellers of the Tenerife Property you are purchasing is a non-resident, 3% of the purchase price will be paid directly by you to the local tax.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork8} alt="Tenerife Property Sale Costings" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 7 Further Costs</h2>
                            <p>Any other costs?<br />Your solicitor or Tenerife Estate Agent will also need to have sufficient funds from you to cover completion costs arising from your purchase:</p><p>1. Registry Costs = 6.5% of the value of the property being purchased<br />2. Notary’s Charge = Approximately 800€   registration cost of +/- around 450€<br />3. Plus Valia Tax. This is a tax levied by the local town hall, usually a few hundred euros.<br />4. Lawyer/Solicitor = 1200€.</p>
                        </div>

                    </div>
                    <div className="units-row">

                        <div className="unit-30">
                            <img src={paperwork9} alt="Property" />
                        </div>
                        <div className="unit-70">

                            <h2>Step 8 Completion</h2>
                            <p>After all this, you should now be the proud owner of your Property in Tenerife, your home in the sun, where rates are only couple of hundred euros a year. If your property is within a community (all apartments form part of a community) you will have to pay community fees (+/- around 50€ per month for a 2 bedroom residential apartment) to maintain the pools, maintain of the gardens, lifts and other communal areas.</p>
                        </div>

                    </div>

                </div>
                <AboutNavWithEnquiryBox />


            </div>

        </section>
    )
}
