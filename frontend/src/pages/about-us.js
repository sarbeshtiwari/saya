import React from 'react'
import AboutOverview from './about-components/aboutOverview'
import VisonMission from './about-components/vision&misssion'
import MeetOurFounders from './about-components/meet-our-founder'
import AwardsRecognition from './about-components/awards&recognition'
import CustomerRelationship from './about-components/customer-relationship'
import Partnership from './about-components/partnership'
import AppreciationLetter from './about-components/appreciation-letters'
import Navbar from '../components/navbar'
import FooterAll from '../components/footer2'
import { Link } from 'react-router-dom'

function AboutUs() {

    return (
        <div>
            <Navbar />
            <div>
                <div class="emptyBox"></div>
                <div class="pageTitle py-5 bg-orange w-100">
                    <div class="container-lg">
                        <h1 class="display-4 mb-0">About Us</h1>
                    </div>
                </div>
                <div class="breadcrumbContainer">
                    <div class="container-lg">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </div>
                </div>
                <AboutOverview />
                <VisonMission />
                <MeetOurFounders />
                <AwardsRecognition />


                {/* --awards */}
            </div >
            <div class="w-100 padding position-relative animate-section5">

                <div class="container-lg">
                    <div class="heading">
                        <h2 class="h1 text-serif mb-0">Saya - With You, Always!</h2>
                    </div>
                    <div class="row gap-row">
                        <div class="col-lg-4 col-md-6 with-you-box">
                            <div class="inner">
                                <span class="line-plus"></span>
                                <h4 class="smallHeading text-serif">Timely Delivery</h4>
                                <p class="mb-0">Timely delivery is not a choice but a requisite for a property buyer. At Saya, we ensure that every project is delivered on time and without any compromises.</p>
                            </div>
                            <div class="with-img" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/Assurance-of-Delivery.jpg)" }}></div>
                        </div>
                        <div class="col-lg-4 col-md-6 with-you-box">
                            <div class="inner">
                                <span class="line-plus"></span>
                                <h4 class="smallHeading text-serif">High on Quality</h4>
                                <p class="mb-0">We take pride in delivering quality through the amalgamation of years of experience and new-age methodologies.Over the years, we have evolved the multi-point quality check systems for sustainable living.</p>
                            </div>
                            <div class="with-img" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/High-Quality.jpg)" }}></div>
                        </div>
                        <div class="col-lg-4 col-md-6 with-you-box">
                            <div class="inner">
                                <span class="line-plus"></span>
                                <h4 class="smallHeading text-serif">Embrace Your Green Side</h4>
                                <p class="mb-0">It’s a human tendency to strive towards and greener and sustainable lifestyle and we truly understand it.</p>
                            </div>
                            <div class="with-img" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/Eco-friendly.jpg)" }}></div>
                        </div>
                        <div class="col-lg-4 col-md-6 with-you-box">
                            <div class="inner">
                                <span class="line-plus"></span>
                                <h4 class="smallHeading text-serif">Innovating the Future</h4>
                                <p class="mb-0">Innovation is paramount for the growth of an organization. At Saya, we innovate and inculcate the latest technology because our customers deserve the best, every day.</p>
                            </div>
                            <div class="with-img" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/Transparent-Timely.jpg)" }}></div>
                        </div>
                        <div class="col-lg-8 col-md-6 with-you-box">
                            <div class="inner">
                                <span class="line-plus"></span>
                                <h4 class="smallHeading text-serif">Transparency. Trust. Timely Deliveries.</h4>
                                <p class="mb-0">Transparency and complete honesty at every procedural step is important for every real-estate builder. We ensure timely updates of all our projects and make sure that every customer who places their trust in us is not disappointed.</p>
                            </div>
                            <div class="with-img" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/Handover.jpg)" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerRelationship />
            <Partnership />
            <AppreciationLetter />
            <FooterAll />


        </div>
    )
}

export default AboutUs