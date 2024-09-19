import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function FeaturedProjects() {
    useEffect(() => {
        var swiper = new Swiper('.project-slider', {
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

        <div className="w-100 padding bg-orange overflow-hidden position-relative hm-projects-container animate-section2">
            <div className="container-lg">
                <div className="heading mx-auto text-center">
                    <h6 className="text-white">Featured Projects</h6>
                    <h2 className="h1 text-serif mb-0 text-center">Setting New Standards of Excellence</h2>
                </div>
                <div className="swiper project-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide hm-featured">
                            <Link to ='/saya-gold-avenue' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-gold-th.jpg" alt="Saya Gold Avenue" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Gold Avenue</h6>
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide hm-featured">
                            <Link to='/saya-southX' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-south-x-th.jpg" alt="Saya South X" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya South X</h6>
                                        <ul className="list-inline d-flex">
                                            <li>Commercial</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide hm-featured">
                            <Link to='/saya-piazza' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-piazza-th.jpg" alt="Saya Piazza" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Piazza</h6>
                                        <ul className="list-inline d-flex">
                                            <li>Commercial</li>
                                            <li>Noida Expressway</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide hm-featured">
                            <Link to='/saya-zion' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zion.jpg" alt="Saya Zion" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Zion</h6>
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide hm-featured">
                            <Link to='/saya-zenith' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zenith.jpg" alt="Saya Zenith" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Zenith</h6>
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide hm-featured">
                            <Link to='/saya-desire-residency' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency.jpg" alt="Saya Desire Residency" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Desire Residency</h6>
                                        {/* <p className="mb-0">At the heart of Indirapuram, Saya brings to you Desire Residency.</p> */}
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="bottomControls">
                        <div className="swiper-button-prev solid"></div>
                        <div className="viewmore"><Link to='/projects' className="button stroke white">View All Projects</Link></div>
                        <div className="swiper-button-next solid"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
