import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import HelpYou from './help-you'
import { Link } from 'react-router-dom'
import Swiper from 'swiper';
import 'swiper/css/bundle';

function SayaBiztop() {
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

        const swiper2 = new Swiper('.specSlider', {
            slidesPerView: "auto",
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
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
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        return () => {
            if (swiper2) swiper2.destroy();
            if (swiper1) swiper1.destroy();
        };
    },

        []);
    useEffect(() => {
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
    }, []);
    const [activeTab, setActiveTab] = useState('image');
    const handleButtonClick = (target) => {
        setActiveTab(target);
    };
    return (
        <div>
            <Navbar />
            <div class="insideBanner w-100">
                <img src="https://sayahomes.com/assets/images/saya-biztop-banner.jpg" class="h-100 object-cover" />
                <div class="project-bannerBox container-lg">
                    <div class="pageLogo"><img src="https://sayahomes.com/assets/images/biztop-logo.svg" alt="Biztop" />
                        <p>Greater Noida West</p>
                    </div>
                    <ul class="list-inline unitsBtn">
                        <li class="bottomTranslate translate">
                            <section>
                                <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/tower.png" alt="Biztop" /></div>
                                <p><small>Floor</small><span>7<sup>th</sup>-25<sup>th</sup> Floor</span></p>
                            </section>
                        </li>
                        <li class="bottomTranslate translate"><section>
                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/unit.png" alt="Biztop" /></div>
                            <p><small>Building Frontage</small><span>3-Side Open</span></p>
                        </section></li>
                    </ul>
                </div>
                <div class="scrollDown">Scroll to Explore</div>
            </div>
            <div class="pageHeader bg-secondary">
                <div class="container-lg">
                    <div class="pageMenuBtn"><small></small></div>
                    <ul class="list-inline">
                        <li class="topTranslate"><Link to='/'><i class="fa fa-home"></i></Link></li>
                        <li class="topTranslate"><a href="#overview">Overview</a></li>
                        <li class="topTranslate"><a href="#amenities">Amenities</a></li>

                        <li class="topTranslate"><a href="#gallery">Gallery</a></li>
                        <li class="topTranslate"><a href="#location">Location</a></li>
                        <li class="topTranslate"><a href="#forms">Enquiry</a></li>
                    </ul>
                </div>
            </div>
            <div class="breadcrumbContainer">
                <div class="container-lg">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Biztop</li>
                    </ol>
                </div>
            </div>
            <section class="w-100">
                <a name="overview"></a>
                <div id="overview" class="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(/sayahomes-react/assets/images/south-x/gallery/1.jpg)" }}>
                    <div class="container-lg">
                        <div class="row">
                            <div class="col-lg-12 projectsTag">
                                <div class="heading topTranslate translate">
                                    <h1 class="h2 text-serif">A World of Peaceful, Laid-back Living</h1>
                                    <hr />
                                    <p>Biztop at Saya SouthX offers premium, fully furnished business suites that cater to the elite corporate class. Meticulously designed amenities, such as an infinity-edge swimming pool, world-class gymnasium, Billiards room, all-day dining restaurant, and entertainment offer unparalleled luxury and convenience. Embrace the perfect blend of elegance, leisure, and innovation at Saya South X.</p>
                                    <p><small><b>RERA NUMBER : UPRERAPRJ17950 | www.up-rera.in</b></small></p>
                                </div>
                                <ul class="list-inline unitsBtn overview-unitsBtn">
                                    <li class="bottomTranslate translate">
                                        <section>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/unit.png" alt="Biztop" /></div>
                                            <p><small>Families</small>5 Lakh +<span></span></p>
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
                <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/biztop/amenities.jpg)" }}>

                    <div class="container-lg amenitiesWrapper">
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/party-lawn.png" alt="party-lawn" /></div><span>Bar &amp; Lounge</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/swimming.png" alt="swimming" /></div><span>Swimming Pool</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/gym.png" alt="gym" /></div><span>Gymnasium</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/town-hall.png" alt="Banquets" /></div><span>Banquets</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/dinner.png" alt="Dining Restaurant" /></div><span>Dining Restaurant</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/parking.png" alt="Covered Car Parking" /></div><span>Covered Car Parking</span>
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
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/food_court.png" alt="Food Court" /></div><span>Food Court</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/lobby.png" alt="A.C. Lobby" /></div><span>A.C. Lobby</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>24/7 Power Back-up</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/golf-field.png" alt="golf-field" /></div><span>Golf Course</span>
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
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/road.png" alt="road" /></div><span> NH24 (Now Nh9) Sector-120, Noida<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/location1.png" alt="location" /></div><span> Crossing Republik<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/school.png" alt="school" /></div><span>Wisdom Tree School<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="hospital" /></div><span>Fortis Hospital Sai Temple Sector-52<br />5-10 Min</span>
                                        </li>
                                    </ul>
                                    <div class="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="View on Map" data-brochure="" data-pagename="biztop.php" data-projectname="Biztop" class="button"><span class="text">View on Map</span></a></div>
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
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/security.png" alt="security" /></div><span>3-tier Cloud-based Security</span>
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
                            <div class="swiper-wrapper" id="swiper-wrapper-7a987faf5c81061043" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                <div class="swiper-slide specSlide swiper-slide-active" role="group" aria-label="1 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/hub.jpg" alt="Details of Hub" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/business-suites.svg" class="filter-dark" alt="Details of Hub" /></div>
                                                <h6>Details of Hub</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Total No. Of Units </strong><span>336 Nos.</span></li>
                                                    <li><strong>7-10th Floor, 12-17th Floor &amp; 19-24 Floor </strong><span>Eighteen to a core</span></li>
                                                    <li><strong>11th, 18th &amp; 25 Refuse Floor </strong><span>Sixteen to a core</span></li>
                                                    <li><strong>Ceiling Height</strong><span>3600mm (H) floor to floor</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide swiper-slide-next" role="group" aria-label="2 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/escalator.jpg" alt="Lift and Escalator" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/lift.png" class="filter-dark" alt="Lift and Escalator" /></div>
                                                <h6>Lift and Escalator</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Lifts </strong><span>4 (passenger) + 1 (Service)</span></li>
                                                    <li><strong>Specification of lifts </strong><span>SS finish from inside &amp; outside</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="3 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/lobby.jpg" alt="Entrance Lobby &amp; Common Area" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/lobby.png" class="filter-dark" alt="Entrance Lobby &amp; Common Area" /></div>
                                                <h6>Entrance Lobby &amp; Common Area</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Flooring </strong><span>Granite /Vitrified tile</span></li>
                                                    <li><strong>Ceiling</strong><span> Metal Grid Ceiling</span></li>
                                                    <li><strong>Paint </strong><span>OBD</span></li>
                                                    <li><strong>Walls </strong><span>Plastered walls with Paint</span></li>
                                                    <li><strong>Electricity </strong><span>Common area and corridor lighting</span></li>
                                                    <li><strong>Fire Fighting</strong><span> As per fire NOC</span></li>
                                                    <li><strong>Staircase flooring </strong><span>Granite/ Tile</span></li>
                                                    <li><strong>Lighting</strong><span> Tube Light /Ceiling Mounted /LED<br />Light Fixture</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="4 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/basement-area.jpg" alt="Basement Area" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/building1.png" class="filter-dark" alt="Basement Area" /></div>
                                                <h6>Basement Area</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Road and Parking</strong><span>VDF Trimix Concrete Flooring</span></li>
                                                    <li><strong>Lighting</strong><span>Tube Light / Ceiling Mounted /LED Light Fixture</span></li>
                                                    <li><strong>Ramp </strong><span>Chequered Tiles/ Trimix Concrete</span></li>
                                                    <li><strong>Fire Fighting </strong><span>As per norms flooring</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="5 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/dg.jpg" alt="Services" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/generator.svg" class="filter-dark" alt="Services" /></div>
                                                <h6>Services</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>DG set </strong><span>As per load requirement</span></li>
                                                    <li><strong>STP </strong><span>As per load requirement</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="6 / 6" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/biztop/specifications/presidential-club-amenties.jpg" alt="Presidential Club Amenities" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/swimming.png" class="filter-dark" alt="Presidential Club Amenities" /></div>
                                                <h6>Presidential Club Amenities (On Paid Basis)</h6>
                                            </div>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Club Area</strong><span>16000 sq.ft. (approx) **</span></li>
                                                    <li><strong>Gymnasium Area</strong><span>Approx - 1800 sq.ft.</span></li>
                                                    <li><strong>Equipments</strong><span>Treadmill, leg press, Cross trainer, Chest press, Bench, Weight plates, Dumble (all equipments will be equipped as per the space), Split AC as per required capacity.</span></li>
                                                    <li><strong>Wall</strong><span>Wall paper/ wooden panelling/ texture paint/ Acrylic emulsion paint (Make - Asian /ICI Dulux / Berger or equivalent)</span></li>
                                                    <li><strong>Flooring</strong><span> Rubberized /PVC Flooring</span></li>
                                                    <li><strong>Ceiling</strong><span> Gypsum/ POP False ceiling</span></li>
                                                    <li><strong>Doors/Window</strong><span> Wooden with Glass door</span></li>
                                                    <li><strong>Exquisite year-round Swimming Pool</strong><span> All weather adult pool with deck approx area 1700 sq.ft. and 4ft depth, Pool Size - 37 ft. X 20ft. (approx).</span></li>
                                                    <li><strong>Indoor Games </strong><span>Snooker/ Billiards Room</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomControls">
                                <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-7a987faf5c81061043" aria-disabled="true"></div>
                                <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-7a987faf5c81061043" aria-disabled="false"></div>
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
                                    <div class="swiper-wrapper" id="swiper-wrapper-67905a107ab10816d10" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                        <div class="swiper-slide gallSlide swiper-slide-active" role="group" aria-label="1 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/3.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/3.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide swiper-slide-next" role="group" aria-label="2 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/4.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/4.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="3 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/6.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/6.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="4 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/8.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/8.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="5 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/12.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/12.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="6 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/biztop/gallery/14.webp" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/biztop/gallery/14.webp" alt="Biztop" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="swiper-button-next" id="int_next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-67905a107ab10816d10" aria-disabled="false"></div>
                                    <div class="swiper-button-prev swiper-button-disabled" id="int_prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-67905a107ab10816d10" aria-disabled="true"></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'video' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-video"
                            >
                                <div class="w-100">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/Mlpj22YREIo?si=0o0YC_KZPmjejNa2?rel=0&amp;enablejsapi=1&amp;origin=https://sayahomes.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
                                    <p class="mt-3"><b><i class="fa-solid fa-map-marker-alt"></i> Plot No. C-01, Sector-12, Ecotech III, Greater Noida, Uttar Pradesh 201306</b></p>
                                </div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'location' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-location"
                            >
                                <div class="img-fluid">
                                    <a href="https://sayahomes.com/assets/images/biztop/biztop-location.jpg" data-magnify="sp" data-group="sp" data-caption="Location Map"><img src="/sayahomes-react/assets/images/biztop/biztop-location.jpg" alt="Location Map" /></a>
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
                            <div class="col-lg-12 projectMap">
                                <div class="inside">
                                    <div class="heading mx-auto text-center  mx-lg-0 text-lg-left">
                                        <h2 class="h1 text-serif mb-0">Location</h2>
                                    </div>
                                    <div class="locationmap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9102697299463!2d77.44870277549967!3d28.60246857568125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee63cec82b53%3A0xce8c253846aa1a81!2sSaya%20South%20X!5e0!3m2!1sen!2sin!4v1718858108649!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
                                    </div>
                                    <div class="readmore"><a href="https://maps.app.goo.gl/wcJQ9stBTb9kzy7y7" target="_blank" class="button justify-content-lg-start">
                                        <span class="icon"><i class="fa-solid fa-map-marker-alt"></i></span>
                                        <span class="text">View Location Map</span>
                                        <span class="icon"><i class="fa-solid fa-map-marker-alt"></i></span>
                                    </a></div>
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

export default SayaBiztop