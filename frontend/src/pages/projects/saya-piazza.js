import React, { useEffect, useState } from 'react'
import FooterAll from '../../components/footer2'
import Navbar from '../../components/navbar'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import HelpYou from './help-you';
import { Link } from 'react-router-dom';

function SayaPiazza() {
    useEffect(() => {
        // Handle hover effect
        const amenBoxes = document.querySelectorAll('.amenBox');

        amenBoxes.forEach((box) => {
            box.addEventListener('mouseenter', () => {
                const activeBox = document.querySelector('.amenBox.active');
                if (activeBox) {
                    activeBox.classList.remove('active');
                }
                box.classList.add('active');
            });
        });

        // Handle scroll effect
        const handleScroll = () => {
            const wScroll = window.scrollY;
            const amenitiesContainer = document.querySelector('.amenitiesContainer');

            if (amenitiesContainer) {
                const offsetTop = amenitiesContainer.offsetTop;
                const windowHeight = window.innerHeight;

                if (wScroll > offsetTop - windowHeight / 1.5) {
                    const translateElements = document.querySelectorAll('.amenitiesContainer .translate');

                    translateElements.forEach((element, i) => {
                        setTimeout(() => {
                            element.classList.add('doneTranslate');
                        }, 350 * (i + 1));
                    });
                }
            }
        };


        // animation
        const pageHeaderItems = document.querySelectorAll('.pageHeader ul li');
        pageHeaderItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('doneTranslate');
            }, 250 * (index + 1));
        });

        const unitsBtnItems = document.querySelectorAll('.unitsBtn .translate');
        unitsBtnItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('doneTranslate');
            }, 350 * (index + 1));
        });
        const headingItem = document.querySelector('.heading');
        setTimeout(() => {
            headingItem.classList.add('doneTranslate');
        }, 500);
        // animation ends
        new Swiper('.specSlider', {
            slidesPerView: "auto",
            spaceBetween: 30,
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
        const swiper1 = new Swiper('.extSlider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
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
        const swiper2 = new Swiper('.news-slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                620: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    const [activeTab, setActiveTab] = useState('image');

    const handleButtonClick = (target) => {
        setActiveTab(target);
    };
    return (
        <div>
            <Navbar />
            <div class="insideBanner w-100">
                <img src="https://sayahomes.com/assets/images/saya-piazza-banner.jpg" class="h-100 object-cover" />
                <div class="project-bannerBox container-lg">
                    <div class="pageLogo"><img src="https://sayahomes.com/assets/images/SayaPiazza.svg" alt="Saya Piazza" />
                        <p>Sector 131, Noida</p>
                    </div>
                    <ul class="list-inline unitsBtn">

                        <li class="bottomTranslate translate doneTranslate">
                            <section>
                                <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/tower.png" alt="Saya Piazza" /></div>
                                <p>Premium Retail Arcade</p>
                            </section>
                        </li>
                    </ul>
                </div>
                <div class="scrollDown">Scroll to Explore</div>
            </div>
            <div class="pageHeader bg-secondary">
                <div class="container-lg">
                    <div class="pageMenuBtn"><small></small></div>
                    <ul class="list-inline">
                        <li class="topTranslate "><Link to='/'><i class="fa fa-home"></i></Link></li>
                        <li class="topTranslate "><a href="#overview">Overview</a></li>
                        <li class="topTranslate "><a href="#amenities">Amenities</a></li>
                        <li class="topTranslate "><a href="#specifications">Specifications</a></li>
                        <li class="topTranslate "><a href="#gallery">Gallery</a></li>
                        <li class="topTranslate "><a href="#location">Location</a></li>

                        <li class="topTranslate "><a href="#forms">Enquiry</a></li>

                    </ul>
                </div>
            </div>
            <div class="breadcrumbContainer">
                <div class="container-lg">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Saya Piazza</li>
                    </ol>
                </div>
            </div>
            <section class="w-100">
                <a name="overview"></a>
                <div id="overview" class="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/saya-piazza/gallery/1.jpg)" }}>
                    <div class="container-lg">
                        <div class="row">

                            <div class="col-lg-12 projectsTag">
                                <div class="heading topTranslate translate doneTranslate">
                                    <h1 class="h2 text-serif">Saya Piazza in Sector 131 on Noida Expressway is all set to revolutionize the shopping experience. The mall is strategically located and close to a catchment area of 50,000+ families.</h1>
                                    <hr />
                                    <p>Shoppers will be welcomed by the beautiful facade and ushered into the mall’s luxurious ambience. Elaborately designed and embellished with supreme luxury,Saya Piazza is poised to be an epitome of leisure and commercial activities. Beyond grandeur, the structure will also reflect efficiency and offer a space for indulgence. Saya Piazza will offer a shopping experience so rich and unique, that everything else would seem ordinary.</p>
                                    <p><small><b>RERA NUMBER : UPRERAPRJ364061 | www.up-rera.in</b></small></p>
                                </div>
                                <ul class="list-inline unitsBtn overview-unitsBtn bottomTranslate translate doneTranslate">
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/unit.png" alt="Saya Piazza" /></div>
                                            <p><small>Families</small>50,000+<span></span></p>
                                        </section>
                                    </li>
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/area.png" alt="Saya Piazza" /></div>
                                            <p><small>Status</small><span>Ongoing </span></p>
                                        </section>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <a name="amenities"></a>
                <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/saya-piazza/amenities.jpg)" }}>

                    <div class="container-lg amenitiesWrapper">
                        <div class="amenBox active">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/parking.png" alt="Ample Parking" /></div><span>Ample Parking</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/dinner.png" alt="Fine Dining" /></div><span>Fine Dining</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/people.png" alt="Banquets" /></div><span>Hypermarket</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/3-side-open.png" alt="3-Side Open" /></div><span>2-Side Open</span>
                                        </li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#4792a5" }}></div>
                        </div>
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Features</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/lift.png" alt="Hi-speed Elevators" /></div><span>Elevators</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/lobby.png" alt="A.C. Lobby" /></div><span>A.C. Lobby</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>24/7 Power Back-up</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/golf-field.png" alt="golf-field" /></div><span>Golf Course Facing</span>
                                        </li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#c38439" }}></div>
                        </div>
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Connectivity</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/school.png" alt="school" /></div><span> Amity University<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/railway.png" alt="railway" /></div><span>Sector 137 Metro Station<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/road.png" alt="road" /></div><span>DND &amp; Sector 18, Noida<br />5-10 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="Hospital" /></div><span>JP Multispecility Hospital<br />5-10 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/temple.png" alt="Temple" /></div><span>Akshardham<br />10-15 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/airport.png" alt="airport" /></div><span>Noida International Airport<br />10-35 Min</span>
                                        </li>
                                    </ul>
                                    <div class="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="View on Map" data-brochure="" data-pagename="saya-piazza.php" data-projectname="Saya Piazza" class="button"><span class="text">View on Map</span></a></div>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#7c1e35" }}></div>
                        </div>
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Security</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/security.png" alt="security" /></div><span>2-tier Cloud-based Security</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/cctv.png" alt="cctv" /></div><span>24x7 CCTV Surveillance</span>
                                        </li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#2c4935" }}></div>
                        </div>
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Neighbourhood</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/park.png" alt="park" /></div><span>Park</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="hospital" /></div><span>Hospitals</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/school.png" alt="Schools" /></div><span>Schools</span>
                                        </li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#a07963" }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <a name="specifications"></a>
                <div id="specifications" class="w-100 padding bg-secondary-light overflow-hidden">
                    <div class="container-lg">
                        <div class="heading mx-auto text-center">
                            <h6 class="text-orange">Specifications</h6>
                            <h2 class="h1 text-serif mb-0">The Luxury of Meticulous Planning</h2>
                        </div>
                        <div class="swiper specSlider w-100 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper" id="swiper-wrapper-c268648288853f30" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                <div class="swiper-slide specSlide swiper-slide-active" role="group" aria-label="1 / 4" style={{ marginRight: "30px;" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-piazza/specifications/lgf.jpg" alt="Balcony" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/shops.svg" class="filter-dark" alt="Saya Piazza Lower Ground Floor" /></div>
                                                <h6>Lower Ground Floor</h6>
                                            </div>
                                            <p>From home essentials to the latest fashion, you’ll be spoilt for choices.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Retail Shops</strong><span>Marquee shops with high-ceiling upto 25 ft.</span></li>
                                                    <li><strong>Food courts &amp; Cafes</strong><span>With expansive outside patio sitting arrangement</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide swiper-slide-next" role="group" aria-label="2 / 4" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-piazza/specifications/ff.jpg" alt="Balcony" /></div>
                                        <div class="inner"> /
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/salon.svg" class="filter-dark" alt="Saya Piazza " /></div>
                                                <h6>First Floor</h6>
                                            </div>
                                            <p>Glam up at your favourite salon or hunt for your favourite pair of heels. This floor has it all.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="3 / 4" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-piazza/specifications/sf.jpg" alt="Balcony" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/gaming.svg" class="filter-dark" alt="Saya Piazza " /></div>
                                                <h6>Second Floor</h6>
                                            </div>
                                            <p>Challenge yourself at the game zone or flex your muscles at the gym. We leave it to you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="4 / 4" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-piazza/specifications/tf.jpg" alt="Balcony" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/golf-course.svg" class="filter-dark" alt="Saya Piazza" /></div>
                                                <h6>Third Floor</h6>
                                            </div>
                                            <p>Enjoy a scrumptious meal with an expansive view of the golf course.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Food &amp; Dining</strong><span>Magnificent views of golf course with a terrace garden environment</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomControls">
                                <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-c268648288853f30" aria-disabled="true"></div>
                                <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-c268648288853f30" aria-disabled="false"></div>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <a name="gallery"></a>
                <div id="gallery" class="w-100 padding overflow-hidden">
                    <div class="container-lg">
                        <div class="heading mx-auto text-center">
                            <h6 class="text-orange">Gallery</h6>
                            <h2 class="h1 text-serif mb-0">A Glimpse of Excellence</h2>
                        </div>
                        <div class="pageHeadingContainer w-100">
                            <div class="scroller-heading">
                                <ul class="list-inline">
                                    <li><button
                                        className={`galBtn ${activeTab === 'image' ? 'galBtnActive' : ''}`}
                                        onClick={() => handleButtonClick('image')}
                                    >Images</button></li>
                                    <li><button
                                        className={`galBtn ${activeTab === 'video' ? 'galBtnActive' : ''}`}
                                        onClick={() => handleButtonClick('video')}
                                    >Videos</button></li>
                                    <li><button
                                        className={`galBtn ${activeTab === 'location' ? 'galBtnActive' : ''}`}
                                        onClick={() => handleButtonClick('location')}
                                    >Location</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="galleryContainerBox w-100">
                            <div
                                className={`galleryContainer ${activeTab === 'image' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-image"
                            >
                                <div class="swiper extSlider w-100 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" id="swiper-wrapper-69683be5e563335a" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                        <div class="swiper-slide gallSlide swiper-slide-active" role="group" aria-label="1 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/3.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/3.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide swiper-slide-next" role="group" aria-label="2 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/4.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/4.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="3 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/5.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/5.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="4 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/6.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/6.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="5 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/7.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/7.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="6 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/8.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/8.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="7 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/9.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/9.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="8 / 8" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-piazza/gallery/10.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-piazza/gallery/10.jpg" alt="Saya Piazza" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="swiper-button-next" id="int_next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-69683be5e563335a" aria-disabled="false"></div>
                                    <div class="swiper-button-prev swiper-button-disabled" id="int_prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-69683be5e563335a" aria-disabled="true"></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'video' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-video"
                            >
                                <iframe width="100%" height="515" src="https://www.youtube.com/embed/E6Mg-AH0ZGQ?rel=0&amp;enablejsapi=1&amp;origin=https://sayahomes.com" title="Saya Piazza Sep 2024 Construction Update: Rising to New Heights @11th Sep 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true" data-gtm-yt-inspected-13="true" id="663097177" data-gtm-yt-inspected-18="true" data-gtm-yt-inspected-23="true"></iframe>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'location' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-location"
                            >
                                <div class="img-fluid">
                                    <a href="https://sayahomes.com/assets/images/saya-piazza/saya-piazza-location.gif" data-magnify="sp" data-group="sp" data-caption="Location Map"><img src="https://sayahomes.com/assets/images/saya-piazza/saya-piazza-location.gif" alt="Location Map" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HelpYou />
            <section class="w-100">
                <a name="location"></a>
                <div id="location" class="w-100 padding">
                    <div class="container-lg">
                        <div class="row gap-row">
                            <div class="col-lg-8 projectMap">
                                <div class="inside">
                                    <div class="heading mx-auto text-center  mx-lg-0 text-lg-left">
                                        <h2 class="h1 text-serif mb-0">Location</h2>
                                    </div>
                                    <div class="locationmap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.299125118872!2d77.3645347!3d28.514919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7f95ffd4779%3A0xfa4cc6134c0f00c!2sSaya%20Piazza!5e0!3m2!1sen!2sin!4v1718368804931!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
                                        <p class="mt-3"><b><i class="fa-solid fa-map-marker-alt"></i> Jaypee wishtown, C Block, Noida-Greater Noida Expy, Asgerpur, Sector 131, Noida, Uttar Pradesh 201304</b></p>
                                    </div>
                                    <div class="readmore"><a href="./images/saya-piazza/saya-piazza-location.gif" data-magnify="sp" data-group="sp" data-caption="Location Map" class="button justify-content-lg-start">
                                        <span class="icon"><i class="fa-solid fa-map-marker-alt"></i></span>
                                        <span class="text">View Location Map</span>
                                        <span class="icon"><i class="fa-solid fa-map-marker-alt"></i></span>
                                    </a></div>
                                </div>
                            </div>
                            <div class="col-lg-4 projectAwards">
                                <div class="inside">
                                    <div class="heading mx-auto text-center  mx-lg-0 text-lg-left">
                                        <h2 class="h1 text-serif mb-0">Awards</h2>
                                    </div>
                                    <div class="swiper news-slider blogContainer swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                        <div class="swiper-wrapper" id="swiper-wrapper-c99f8a7561e2e45b" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                            <div class="swiper-slide newsBox blogBox swiper-slide-active" role="group" aria-label="1 / 1" style={{ width: "226px", marginRight: "10px" }}>
                                                <a href="https://sayahomes.com/assets/images/awards/a8640f21-c37f-41bf-998b-40b17c805372.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Prime Commercial Project for Saya Piazza">
                                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/awards/a8640f21-c37f-41bf-998b-40b17c805372-th.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Excellence in Prime Commercial Project for Saya Piazza</h5>
                                                        <p class="mb-0">Times Realty &amp; Infrastructure Conclave 2024. </p>
                                                    </article>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottomControls justify-content-lg-start px-lg-0">
                                            <div class="swiper-button-prev solid swiper-button-disabled swiper-button-lock" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-c99f8a7561e2e45b" aria-disabled="true"></div>
                                            <div class="swiper-button-next solid swiper-button-disabled swiper-button-lock" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-c99f8a7561e2e45b" aria-disabled="true"></div>
                                        </div>
                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default SayaPiazza