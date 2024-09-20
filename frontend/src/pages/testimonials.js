import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

function Testimonials() {
    const [modalTitle, setModalTitle] = useState("");
    const [videoSrc, setVideoSrc] = useState("");

    // Handle opening of modal
    const handleOpenModal = (event) => {
        const title = event.currentTarget.getAttribute("data-title");
        const src = event.currentTarget.getAttribute("data-src");
        setModalTitle(title);
        setVideoSrc(src);
    };


    const handleCloseModal = () => {
        setVideoSrc("");
    };
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".testim-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
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
            }
        });

    }, []);

    return (
        <div>

            <div className="w-100 position-relative padding bg-orange overflow-hidden animate-section4">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h6 className="text-white">Testimonials</h6>
                        <h2 className="h1 text-serif mb-0">What Our Customers Say</h2>
                    </div>
                    <div className="swiper testim-slider animate">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a
                                        href="#video-Modal"
                                        data-src="https://www.youtube.com/embed/PRgoLcERlOQ?rel=0&amp;autoplay=1"
                                        data-title="Saya SouthX - Unrivalled Destination Unforgettable Experiences"
                                        data-toggle="modal"
                                        className="img-fluid position-relative h-100"
                                        onClick={handleOpenModal} // Event handler for opening the modal
                                    >
                                        <img
                                            src="https://sayahomes.com/assets/images/PRgoLcERlOQ.jpg"
                                            title="Saya SouthX - Unrivalled Destination Unforgettable Experiences"
                                            alt="Saya SouthX - Unrivalled Destination Unforgettable Experiences"
                                            className="h-100 object-cover"
                                        />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Pradeep Rawat</b>
                                            <small>Saya SouthX - Unrivalled Destination Unforgettable Experiences</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="https://www.youtube.com/embed/MFdoV42c7Bk?rel=0&amp;autoplay=1" data-title="Saya SouthX: Unrivalled Destination Unforgettable Experiences, Must Invest to get Best Return" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/MFdoV42c7Bk.jpg" title="Saya SouthX: Unrivalled Destination Unforgettable Experiences, Must Invest to get Best Return" alt="Saya SouthX: Unrivalled Destination Unforgettable Experiences, Must Invest to get Best Return" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Vishal Bhardwaj</b>
                                            <small>Saya SouthX: Unrivalled Destination Unforgettable Experiences, Must Invest to get Best Return</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="https://www.youtube.com/embed/M5_9_4AppSg?rel=0&amp;autoplay=1" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/testim-gold-indrapuram.jpg" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Prakash Ranawat</b>
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="videos/Happy-Residents-GoldAvenue-4.mp4" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/Video-4_1.jpg" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="videos/customers3.mp4" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/home3_1.avif" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Vikash</b>
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="https://sayahomes.com/videos/The-best-in-Delhi-NCR.mp4" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/Video-1.avif" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Vajay </b>
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="https://sayahomes.com/videos/Real-Estate-reviews-Gold-Avenue.mp4" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/Video-2.avif" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Manoj</b>
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide testimBox">
                                <div className="testim-video">
                                    <a href="#video-Modal" data-src="https://sayahomes.com/videos/Happy-Residents-GoldAvenue.mp4" data-title="Saya South X Excavation" data-toggle="modal" className="img-fluid position-relative h-100" onClick={handleOpenModal}>
                                        <img src="https://sayahomes.com/assets/images/Video-3_1.avif" title="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 4" alt="Saya Homes - Real Estate Company in Delhi NCR - Testimonial - Video 3" className="h-100 object-cover" />
                                        <i className="fa fa-play videoBtn shadow"></i>
                                        <div className="testim-name">
                                            <b>Mr Anil</b>
                                            <small>Owns a property in Saya Gold Avenue</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottomControls">
                            <div className="swiper-button-prev solid"></div>
                            <div className="viewmore"><Link to="/testimonials" className="button stroke white">View All Testimonials</Link></div>
                            <div className="swiper-button-next solid"></div>
                        </div>
                    </div>
                </div>
            </div>





            <div
                className="modal fade"
                id="video-Modal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="sapnaModalTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content border-0 shadow rounded-0">
                        <button type="button" className="close videoClose"onClick={handleCloseModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <iframe width="100%" height="315" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;
