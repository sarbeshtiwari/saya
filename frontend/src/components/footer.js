import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    useEffect(() => {

        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {

            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <footer className="footer-area overflow-hidden w-100">
                <div className="container-lg">
                    <div className="row gap-row py-4">
                        <div className="col-xxl-6 ground col-lg-7 socialFeedBox instaBox">
                            <div className="inner">
                                <div className="heading mb-3">
                                    <h5 className="mb-0 text-white">
                                        <a href="https://www.instagram.com/sayahomes/" className="d-flex align-items-center" target="_blank" rel="noreferrer">
                                            <i className="fab fa-instagram"></i> Instagram
                                        </a>
                                    </h5>
                                </div>
                                <div className="elfsight-app-e4775fe8-8dc8-454c-a513-b5dc40992906" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-5 socialFeedBox youtubeBox">
                            <div className="inner">
                                <div className="heading mb-3">
                                    <h5 className="mb-0 text-white">
                                        <a href="https://www.youtube.com/channel/UCzicWlJx_HQtk4llMO8mMpw" className="d-flex align-items-center" target="_blank" rel="noreferrer">
                                            <i className="fab fa-youtube"></i> YouTube
                                        </a>
                                    </h5>
                                </div>
                                <div className="elfsight-app-3971d408-c388-4bb8-98b1-02c4823ec593" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="row">
                            <div className="col-lg-4 foot-About">
                                <div className="insideBox pr-0 pr-lg-5">
                                    <div className="footer-logo">
                                        <img src="https://sayahomes.com/assets/images/logo.svg" className="filter-white" alt="" />
                                    </div>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="#"><i className="fa fa-map-marker-alt"></i><span>1st floor, Saya South X, Gr. Noida (W)</span></a>
                                        </li>
                                        <li>
                                            <a href="tel:+91-9540812345"><i className="fa fa-phone"></i><span>+91-9540812345</span></a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@sayahomes.in"><i className="fa fa-envelope"></i><span>info@sayahomes.in</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 foot-menu">
                                <div className="insideBox">
                                    <h6 className="smallHeading text-serif text-orange">About Us</h6>
                                    <ul className="list-inline">
                                        <li><Link to='/about-us'>Overview</Link></li>
                                        <li><Link to='/about-us'>Vision & Mission</Link></li>
                                        <li><Link to='/about-us'>Meet our Founder</Link></li>
                                        <li><Link to='/about-us'>Awards & Recognition</Link></li>
                                        <li><Link to='/about-us'>Customer Relationship</Link></li>
                                        <li><Link to='/about-us'>Partnerships</Link></li>
                                        <li><Link to='/about-us'>Appreciation Letter</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 foot-menu">
                                <div className="insideBox">
                                    <h6 className="smallHeading text-serif text-orange">Projects</h6>
                                    <ul className="list-inline">
                                        <li><Link to='/residential'>Residential</Link></li>
                                        <li><Link to='/commercial'>Commercial</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 foot-menu">
                                <div className="insideBox">
                                    <h6 className="smallHeading text-serif text-orange">Quick Links</h6>
                                    <ul className="list-inline">
                                        <li><Link to='/in-the-media'>Media</Link></li>
                                        <li><Link to='/events'>Events</Link></li>
                                        <li><Link to='/blogs'>Blogs</Link></li>
                                        <li><Link to='/customer-supports'>Customer Support</Link></li>
                                        <li><Link to='/contact-us'>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 foot-menu">
                                <div className="insideBox">
                                    <h6 className="smallHeading text-serif text-orange">Career</h6>
                                    <ul className="list-inline">
                                        <li><Link to='/careers'>Current Openings</Link></li>
                                        <li><Link to='/careers'>Apply Now</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-lg">
                        <div className="d-flex">
                            <a href="#">Disclaimer</a>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <div className="copyrights">
                            <p>© Saya Homes 2024 | Designed &amp; Developed by: <img src="https://sayahomes.com/assets/images/ecis.png" alt="" /></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
