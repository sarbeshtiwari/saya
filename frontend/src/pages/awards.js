import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
function Awards() {
    useEffect(() => {
        var swiper = new Swiper('.news-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }, []);

    return (
        <div>
            <div className="w-100 padding position-relative animate-section5">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h6 className="text-orange">Awards & Recognition</h6>
                        <h2 className="h1 text-serif mb-0">Quality Acknowledged By The World</h2>
                    </div>
                    <div className="swiper news-slider blogContainer">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/a8640f21-c37f-41bf-998b-40b17c805372.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Prime Commercial Project for Saya Piazza">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/a8640f21-c37f-41bf-998b-40b17c805372-th.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Excellence in Prime Commercial Project</h5>
                                        <p className="mb-0">Times Realty & Infrastructure Conclave 2024. </p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/ee0b9226-6537-4ff9-9297-51e106c8503f.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Environmental Friendly Projects for Saya Gold Avenue">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/ee0b9226-6537-4ff9-9297-51e106c8503f-th.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Excellence in Environmental Friendly</h5>
                                        <p className="mb-0">Times Realty & Infrastructure Conclave 2024. </p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/ed32f38e-fb30-4b25-9887-421895d98e88.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Quality Construction">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/ed32f38e-fb30-4b25-9887-421895d98e88-th.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Excellence in Quality Construction</h5>
                                        <p className="mb-0">ET Now Realty Conclave 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Luxury Segment Homes">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61-th.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Excellence in Luxury Segment Homes</h5>
                                        <p className="mb-0">ET Now Realty Conclave 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Developer of the Year">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0-th.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Real Estate Developer of the Year</h5>
                                        <p className="mb-0">ET Now Realty Conclave 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/1.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="ICONIC Real Estate Brand of The Year - Saya Group">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/th1.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Iconic Real Estate Brand of The Year - Saya Group</h5>
                                        <p className="mb-0">Times Business Awards, North 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate- Excellence In The Luxury Residential Projects">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/th2.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Real Estate - Excellence in The Luxury Residential Projects</h5>
                                        <p className="mb-0">Times Business Awards, North 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/3.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Commercial Project Of The Year - Saya Southx">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/th3.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Real Estate Commercial Project Of The Year - Saya Southx</h5>
                                        <p className="mb-0">Times Business Awards, North 2024</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2024/3.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Repeatedly honoured with the Titan Achievers Awards by Hindustan Times, including in 2024">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/2024/3.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Repeatedly honoured with the Titan Achievers Awards by Hindustan Times, including in 2024</h5>
                                        <p className="mb-0"></p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2024/5.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="   Recognised for Excellence in Retail Projects by ABP News in 2023">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/2024/5.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Recognised for Excellence in Retail Projects</h5>
                                        <p className="mb-0"></p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/saya_status_excellence.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="The Real Estate Leadership Conclave">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/saya_status_excellence.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">The Real Estate Leadership Conclave</h5>
                                        <p className="mb-0">Saya Status, India's Tallest Mall,</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/best_retail_project_new.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Best Retail Project of the Year Award- Saya Status">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/best_retail_project_new.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Best Retail Project of the Year Award- Saya Status</h5>
                                        <p className="mb-0">upcoming India's Tallest Mall on the Noida Expressway, soars to new heights!</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/Indian-Green-Building-Council.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Indian Green Building Council - Saya Zion">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/Indian-Green-Building-Council.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Indian Green Building Council - Saya Zion</h5>
                                        <p className="mb-0">IGBC Green Home</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074406-IGBC_Green_Homes.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="IBS Green Home Awards - Saya Zion - Flats in Greater Noida West">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074406-IGBC_Green_Homes.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">IBS Green Home Awards - Saya Zion - Flats in Greater Noida West</h5>
                                        <p className="mb-0">IGBC Green Homes</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074304-Best_Residential_Project_In_NCR.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Best Residential projects of Delhi NCR Awards - Saya Homes">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074304-Best_Residential_Project_In_NCR.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Best Residential projects of Delhi NCR Awards - Saya Homes</h5>
                                        <p className="mb-0">Best Residential Project In NCR</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074236-Premium_Residential_Project.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="The Most Premium Residential projects in Greater Noida West Certified - Saya Zion">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074236-Premium_Residential_Project.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">The Most Premium Residential projects in Greater Noida West Certified - Saya Zion</h5>
                                        <p className="mb-0">Premium Residential Project</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074210-Promising_Developer.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Promising Developer Awards - Saya Zion">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074210-Promising_Developer.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Promising Developer Awards - Saya Zion</h5>
                                        <p className="mb-0">Promising Developer</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074126-Property_Observer_Jury_Award.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Properties Observer Jury Awards - Saya Homes">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074126-Property_Observer_Jury_Award.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Properties Observer Jury Awards - Saya Homes</h5>
                                        <p className="mb-0">Property Observer Jury Award</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2024/7.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Received the Promising Developer Award from the Builder Council of India in 2014">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/2024/7.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Received the Promising Developer Award from the Builder Council of India in 2014</h5>
                                        <p className="mb-0"></p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531073708-Worldwide_Achievers.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Worldwide Achiever Awards - Saya Zion">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531073708-Worldwide_Achievers.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Worldwide Achiever Awards - Saya Zion</h5>
                                        <p className="mb-0">Worldwide Achievers</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/20220531074346-Pre-certification.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="LEED Certified - Saya Zion - Flats in Greater Noida West">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/20220531074346-Pre-certification.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">LEED Certified - Saya Zion - Flats in Greater Noida West</h5>
                                        <p className="mb-0">Pre-certification</p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2024/4.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Honoured with the Titan Achievers Awards by Hindustan Times in 2011">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/2024/4.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Honoured with the Titan Achievers Awards by Hindustan Times in 2011</h5>
                                        <p className="mb-0"></p>
                                    </article>
                                </a>
                            </div>
                            <div className="swiper-slide newsBox blogBox">
                                <a href="https://sayahomes.com/assets/images/awards/2024/6.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Awarded the Property Observer Jury Award by Worldwide Achiever">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/awards/2024/6.jpg" alt="Saya Homes" className="h-100 object-cover" title="true" /></div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Awarded the Property Observer Jury Award by Worldwide Achiever</h5>
                                        <p className="mb-0"></p>
                                    </article>
                                </a>
                            </div>
                        </div>
                        <div className="bottomControls">
                            <div className="swiper-button-prev solid"></div>
                            <div className="viewmore"><Link to="/about-us" className="button stroke">View All Awards</Link></div>
                            <div className="swiper-button-next solid"></div>
                        </div>
                    </div>
                </div> </div>
        </div>
    )
}

export default Awards