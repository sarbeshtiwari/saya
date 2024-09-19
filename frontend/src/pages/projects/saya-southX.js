import React, { useEffect, useState } from 'react'
import FooterAll from '../../components/footer2'
import Navbar from '../../components/navbar'
import HelpYou from './help-you';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

function SayaSouthX() {
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

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the scroll listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
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
        var swiper1 = new Swiper(".brand-slider", {
            slidesPerView: 2,
            spaceBetween: 10,

            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                360: {
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 8,
                },
            }
        });
        var swiper2 = new Swiper(".extSlider", {
            slidesPerView: 2,
            spaceBetween: 10,

            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
        var swiper3 = new Swiper(".news-slider", {
            slidesPerView: 2,
            spaceBetween: 10,

            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });
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

    }, []);
    const [activeTab, setActiveTab] = useState('image');

    const handleButtonClick = (target) => {
        setActiveTab(target);
    };
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <Navbar />
            <div class="insideBanner w-100">
                <img src="https://ecis.in/sayahomes-react/assets/images/saya-south-x-banner.jpg" class="h-100 object-cover" />
                <div class="project-bannerBox container-lg">
                    <div class="pageLogo"><img src="https://ecis.in/sayahomes-react/assets/images/south-x-logo.svg" alt="Saya South X" />
                        <p>Greater Noida West’</p>
                    </div>
                    <ul class="list-inline unitsBtn">
                        <li class="bottomTranslate translate">
                            <section>
                                <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/tower.png" alt="Saya South X" /></div>
                                <p><small>Development Area</small><span>12,000+ sq.m</span></p>
                            </section>
                        </li>
                        <li class="bottomTranslate translate"><section>
                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/unit.png" alt="Saya South X" /></div>
                            <p><small>Building Frontage</small><span>3-Side Open</span></p>
                        </section></li>
                    </ul>
                </div>
                <div class="scrollDown">Scroll to Explore</div>
            </div>
            <div className="pageHeader bg-secondary">
                <div class="container-lg">
                    <div class="pageMenuBtn"><small></small></div>
                    <ul class="list-inline">
                        <li class="topTranslate "><Link to='/sayahomes-react'><i class="fa fa-home"></i></Link></li>
                        <li class="topTranslate "><a href="#overview">Overview</a></li>
                        <li class="topTranslate "><a href="#amenities">Amenities</a></li>
                        <li class="topTranslate "><a href="#specifications">Specifications</a></li>
                        <li class="topTranslate "><a href="#gallery">Gallery</a></li>
                        <li class="topTranslate "><a href="#forms">Enquiry</a></li>
                        <li class="topTranslate "><a href="#location">Location</a></li>

                    </ul>
                </div>
            </div>
            <div class="breadcrumbContainer">
                <div class="container-lg">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Saya South X</li>
                    </ol>
                </div>
            </div>
            <section class="w-100">
                <a name="overview"></a>
                <div id="overview" class="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://ecis.in/sayahomes-react/assets/images/south-x/gallery/1.jpg)" }}>
                    <div class="container-lg">
                        <div class="row">

                            <div class="col-lg-12 projectsTag">
                                <div class="heading topTranslate translate doneTranslate">
                                    <h1 class="h2 text-serif">Enter the Greater Noida West’s new favourite destination for shopping, dining and lifestyle. Saya South X is here to take your retail experience to the next level with a diverse selection of luxury brands amidst tasteful landscaping.</h1>
                                    <hr />
                                    <p>Catch the latest flix, meet your friends for a cup of coffee, shop for the latest trends, or take your family on a culinary journey. Capture every beautiful moment and rejoice in the joys of retail therapy. With Saya South X, you can explore a mix of retail, restaurants and entertainment pulsating with style and energy. No limit, no end to fun &amp; excitement at Saya South X.</p>
                                    <p><small><b>RERA Number : UPRERAPRJ17950 | www.up-rera.in</b></small></p>
                                </div>
                                <ul class="list-inline unitsBtn overview-unitsBtn bottomTranslate translate doneTranslate">
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/families.png" alt="Saya South X" /></div>
                                            <p><small>Families</small>5 Lakh +<span></span></p>
                                        </section>
                                    </li>
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/footprints.png" alt="Saya South X" /></div>
                                            <p><small>Estimated Footfall</small><span>2 Lakh +</span></p>
                                        </section>
                                    </li>
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/area.png" alt="Saya Gold Avenue" /></div>
                                            <p><small>Status</small><span>Nearing Possession</span></p>
                                        </section>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <div class="w-100 padding ">

                    <div class="container-lg">
                        <div class="w-100">
                            <div class="heading mx-auto text-center">
                                <h2 class="h1 text-serif mb-0">Brands With Us</h2>
                            </div>
                            <div class="swiper brand-slider h-auto">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/1.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/2.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/3.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/4.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/5.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/6.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/7.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/8.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/9.jpg" class="w-100" /></div></div>
                                    <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/logo/10.jpg" class="w-100" /></div></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <a name="amenities"></a>
                <div id="amenities" className="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://ecis.in/sayahomes-react/assets/images/south-x/amenities.jpg)" }}>

                    <div className="container-lg amenitiesWrapper">
                        <div className="amenBox">
                            <article className="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div className="allItems">
                                    <ul className="list-inline halfList">
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/parking.png" alt="Ample Parking" /></div><span>Ample Parking</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/dinner.png" alt="Fine Dining" /></div><span>Fine Dining</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/people.png" alt="Banquets" /></div><span>Banquets</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/3-side-open.png" alt="3-Side Open" /></div><span>3-Side Open</span>
                                        </li>
                                    </ul>
                                </div>
                                <span className="arrow">→</span>
                            </article>
                            <div className="amenBoxBg" style={{ backgroundColor: "#4792a5" }}></div>
                        </div>
                        <div className="amenBox">
                            <article className="w-100 bottomTranslate translate doneTranslate">
                                <h3>Features</h3>
                                <div className="allItems">
                                    <ul className="list-inline halfList">
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/food_court.png" alt="Food Court" /></div><span>Food Court</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>24/7 Power Back-up</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/lift.png" alt="Hi-speed Elevators" /></div><span>Elevators</span>
                                        </li>
                                    </ul>
                                </div>
                                <span className="arrow">→</span>
                            </article>
                            <div className="amenBoxBg" style={{ backgroundColor: "#c38439" }}></div>
                        </div>
                        <div className="amenBox">
                            <article className="w-100 bottomTranslate translate doneTranslate">
                                <h3>Connectivity</h3>
                                <div className="allItems">
                                    <ul className="list-inline">
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/road.png" alt="road" /></div><span> NH24 (Now Nh9) Sector-120, Noida<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/location1.png" alt="location" /></div><span> Crossing Republik<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/school.png" alt="school" /></div><span>Top Schools<br />0-5 Min</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/hospital.png" alt="hospital" /></div><span>Fortis Hospital Sector-52<br />5-10 Min</span>
                                        </li>
                                    </ul>
                                    <div className="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="View on Map" data-brochure="" data-pagename="saya-south-x.php" data-projectname="Saya South X" className="button"><span className="text">View on Map</span></a></div>
                                </div>
                                <span className="arrow">→</span>
                            </article>
                            <div className="amenBoxBg" style={{ backgroundColor: "#7c1e35" }}></div>
                        </div>
                        <div className="amenBox">
                            <article className="w-100 bottomTranslate translate doneTranslate">
                                <h3>Security</h3>
                                <div className="allItems">
                                    <ul className="list-inline">
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/security.png" alt="security" /></div><span>3-tier Cloud-based Security</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/cctv.png" alt="cctv" /></div><span>24x7 CCTV Surveillance</span>
                                        </li>
                                    </ul>
                                </div>
                                <span className="arrow">→</span>
                            </article>
                            <div className="amenBoxBg" style={{ backgroundColor: "#2c4935" }}></div>
                        </div>
                        <div className="amenBox active">
                            <article className="w-100 bottomTranslate translate doneTranslate">
                                <h3>Neighbourhood</h3>
                                <div className="allItems">
                                    <ul className="list-inline">
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/park.png" alt="park" /></div><span>Park</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/hospital.png" alt="hospital" /></div><span>Hospitals</span>
                                        </li>
                                        <li>
                                            <div className="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/school.png" alt="Schools" /></div><span>Schools</span>
                                        </li>
                                    </ul>
                                </div>
                                <span className="arrow">→</span>
                            </article>
                            <div className="amenBoxBg" style={{ backgroundColor: "#a07963" }}></div>
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
                        <div class="swiper specSlider w-100">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide specSlide">
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/specifications/business-suites.jpg" alt="Business Suites" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/business-suites.svg" class="filter-dark" alt="Business Suites" /></div>
                                                <h6>Business Suites</h6>
                                            </div>
                                            <p>The ultimate VIP destination to conduct business.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">

                                                    <li><strong>Flooring</strong><span>RCC Slab - Ready to receive any Flooring by Owner / Buyer</span></li>
                                                    <li><strong>Ceiling</strong><span>Exposed RCC Ceiling (No Furnishing)</span></li>
                                                    <li><strong>Fire Fighting</strong><span>As Per Fire NOC</span></li>
                                                    <li><strong>Walls</strong><span>75 ~ 100 mm thick Dry Wall / Brickwork (Fly Ash brick), Single coat of White Cement Paint</span></li>
                                                    <li><strong>Door And Windows</strong><span>UPVC Three Tracks Channel, Both Side Sliding Door with 5mm Thick Toughened Plain Glass with one SS Jali Net Door (Make: Okotech / NCL Wintech / AMD / Prominence / Equivalent) for Business Suites</span></li>
                                                    <li><strong>Electricity</strong><span>One DB as per Required Load will be Provided Separate Meter for Power Backup Main Electrical Connections from NPCL Directly by Buye</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide">
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/specifications/landscaping.jpg" alt="Landscaping" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/landscaping.svg" class="filter-dark" alt="Landscaping" /></div>
                                                <h6>Landscaping</h6>
                                            </div>
                                            <p>A welcoming and positive atmosphere that adds to the retail therapy experience.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Hard Landscape</strong><span>Tiles / Trimix Concrete / Pavers / Kerb Stone / Chequered Tiles</span></li>
                                                    <li><strong>Soft Landscape</strong><span>Natural Grass / Artificial Grass Pad / Shrubs / Plants / Trees</span></li>
                                                    <li><strong>Lighting</strong><span>As per Design</span></li>
                                                    <li><strong>Dg Set</strong><span>As Per Load Requirement</span></li>
                                                    <li><strong>Transformer</strong><span>As Per Load Requirement, Multi-point Electrical Connection Directly from NPCL by the Buyer</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide">
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/specifications/basement-areas.jpg" alt="Basement Area" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/basement-area.svg" class="filter-dark" alt="Basement Area" /></div>
                                                <h6>Basement Area</h6>
                                            </div>
                                            <p>Extending the luxury experience to the parking lot.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Road And Parking</strong><span>VDF Trimix Concrete Flooring</span></li>
                                                    <li><strong>Lighting</strong><span>Tube Light / Ceiling Mounted LED Light Fixture</span></li>
                                                    <li><strong>Common Parking</strong><span>As per Drawings</span></li>
                                                    <li><strong>Ramp</strong><span>Chequered Tiles / Trimix Concrete Flooring</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide">
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/specifications/common-area.jpg" alt="Common Area" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/common-area.svg" class="filter-dark" alt="Common Area" /></div>
                                                <h6>Common Area</h6>
                                            </div>
                                            <p>A spacious common area to welcome shoppers at the heart of the mall.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Toilets</strong><span>Male, Female And Divyang Toilet on each floor</span></li>
                                                    <li><strong>Flooring</strong><span>Granite Flooring (Shivakashi Gold / Sadarali / Black / Steel</span></li>
                                                    <li><strong>Painting</strong><span>OBD Paints (Make: ICI Dulux / Asian / Berger or Equivalent Quality) and Exposed Services</span></li>
                                                    <li><strong>Wall Cladding</strong><span>Granite Dado (Shivakashi Gold / Sadarali / Black / Steel Grey / Equivalent)</span></li>
                                                    <li><strong>WC</strong><span>European WC / Floor / Wall Mounted</span></li>
                                                    <li><strong>Cp Fitting</strong><span>Chrome Plated</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide">
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/specifications/shops.jpg" alt="Shops" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/shops.svg" class="filter-dark" alt="Shops" /></div>
                                                <h6>Shops</h6>
                                            </div>
                                            <p>Designer outlets and high street favourites for an incredible shopping experience.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Flooring</strong><span>RCC Slab - Ready to receive any Flooring by Owner / Buyer</span></li>
                                                    <li><strong>Walls</strong><span>75 ~ 100 mm thick Dry Wall / Brickwork (Fly Ash brick), Single coat of White Cement Paint</span></li>
                                                    <li><strong>Ceiling</strong><span>Exposed RCC Ceiling (No Furnishing)</span></li>
                                                    <li><strong>Doors</strong><span>M.S Rolling Shutters on opening fixed inside of the shop front</span></li>
                                                    <li><strong>Electricity</strong><span>One DB as per Required Load will be Provided Separate Meter for Power Backup Main Electrical Connections from NPCL Directly by Buyer</span></li>
                                                    <li><strong>Fire Fighting</strong><span>As Per Fire NOC</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomControls">
                                <div class="swiper-button-prev solid"></div>
                                <div class="swiper-button-next solid"></div>
                            </div>
                        </div>
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
                                <div class="swiper extSlider w-100">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/3.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/3.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/4.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/4.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/5.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/5.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/6.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/6.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/7.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/7.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/8.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/8.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/9.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/9.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide">
                                            <a href="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/10.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/south-x/gallery/10.jpg" alt="Saya South X" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="swiper-button-next" id="int_next"></div>
                                    <div class="swiper-button-prev" id="int_prev"></div>
                                </div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'video' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-video"
                            >
                                <div class="w-100">
                                    <iframe width="100%" height="415" src="https://www.youtube.com/embed/4voQvRsj3k0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'location' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-location"
                            >
                                <div class="img-fluid">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/south-x/southX-location.gif" data-magnify="sp" data-group="sp" data-caption="Location Map"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/southX-location.gif" alt="Location Map" /></a>
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9102697299463!2d77.44870277549967!3d28.60246857568125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee63cec82b53%3A0xce8c253846aa1a81!2sSaya%20South%20X!5e0!3m2!1sen!2sin!4v1718858108649!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        <p class="mt-3"><b><i class="fa-solid fa-map-marker-alt"></i> Plot No. C-01, Sector-12, Ecotech III, Greater Noida, Uttar Pradesh 201306</b></p>
                                    </div>
                                    <div class="readmore"><a href="https://maps.app.goo.gl/wcJQ9stBTb9kzy7y7" target="_blank" class="button justify-content-lg-start">
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
                                    <div class="swiper news-slider blogContainer">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide newsBox blogBox">
                                                <a href="https://ecis.in/sayahomes-react/assets/images/awards/3.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Commercial Project Of The Year - Saya Southx">
                                                    <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/awards/th3.jpg" alt="Saya Homes" class="h-100 object-cover" title /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4 text-truncate">Real Estate Commercial Project Of The Year - Saya Southx</h5>
                                                        <p class="mb-0">Times Business Awards, North 2024</p>
                                                    </article>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="bottomControls justify-content-lg-start px-lg-0">
                                            <div class="swiper-button-prev solid"></div>
                                            <div class="swiper-button-next solid"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-100">
                <a name="faqs"></a>
                <div id="faqs" className="w-100 padding bg-secondary-light">
                    <div className="container-lg">
                        <div className="heading mx-auto text-center">
                            <h6 className="text-orange">FAQs</h6>
                            <h2 className="h1 text-serif mb-0">People Eager To Know About Saya SouthX</h2>
                        </div>
                        <div className="faqs-box">
                            <div className="faqs_question" onClick={() => toggleFAQ(0)}>
                                What is Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 0 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX is a premium commercial project offering Shopping, Dining, Entertainment, Food court and business suites, strategically located at Ek Murti Chowk in Greater Noida West.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(1)}>
                                Is the land ownership fully settled? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 1 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, the land for Saya SouthX is completely fully paid up.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(2)}>
                                What types of retail spaces are available at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 2 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX offers a variety of retail spaces suitable for shops and Business Suites a wide range of businesses and brands.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(3)}>
                                What dining options are available at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 3 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX features diverse dining options, including restaurants, cafes, and food courts offering a variety of cuisines to cater to different tastes.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(4)}>
                                Are there any well-known restaurant chains at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 4 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, several popular restaurant chains are expected to be part of Saya SouthX, enhancing its appeal as a dining destination.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(5)}>
                                What types of entertainment options are available at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 5 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX includes several pubs and bars, Game Zones, Kids' play stations providing vibrant nightlife and entertainment options for visitors.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(6)}>
                                Are the pubs and bars designed for specific themes or atmospheres? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 6 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, the pubs and bars at Saya SouthX offer various themes and atmospheres to cater to diverse preferences, from casual settings to upscale environments.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(7)}>
                                What types of business suites are available at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 7 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>The Business Suites at Saya SouthX are fully furnished studio apartments designed for entrepreneurs, Hotels and, End-users etc. They are ideal for short-term and long terms investment and can be a holiday home.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(8)}>
                                What amenities are provided in business Suites? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 8 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Amenities include high-speed internet, 24/7 security, power backup, All weather swimming Pool, Billiard room conference rooms, and modern infrastructure to support business operations.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(9)}>
                                How can I lease or purchase a space at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 9 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Interested parties can contact the sales office directly on 8888 32 8888 visit the official website- sayahomes.com or get in touch with authorized channel partners.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(10)}>
                                Are there any financing options available for purchasing spaces? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 10 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, various financing options and payment plans are available through associated banks and financial institutions.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(11)}>
                                What parking facilities are available at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 11 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX project is 3-sided open property, it provides ample parking space for both tenants and visitors, including multi-level parking structures & open parking spaces.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(12)}>
                                Is Saya SouthX accessible by public transport? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 12 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, the location is well-connected by public transport, including buses and the upcoming metro station nearby.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(13)}>
                                What security measures are in place at Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 13 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>The complex is equipped with 24/7 CCTV surveillance, security personnel, and controlled access points to ensure the safety of all occupants and visitors.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(14)}>
                                Are there any fire safety measures? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 14 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Yes, Saya SouthX is equipped with state-of-the-art fire safety systems, including sprinklers, alarms, and evacuation plans.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(15)}>
                                When will Saya SouthX Mall be ready for possession? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 15 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX will be open in March 2025 for the public.</p>
                                    </article>
                                </div>
                            )}

                            <div className="faqs_question" onClick={() => toggleFAQ(16)}>
                                Who is the developer behind Saya SouthX? <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 16 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>Saya SouthX is developed by Saya Homes, a well-known developer with a strong track record of delivering quality real estate projects.</p>
                                    </article>
                                </div>
                            )}
                            <div className="faqs_question" onClick={() => toggleFAQ(17)}>
                                Where is the sales office located?  <span><i className="fa fa-angle-down"></i></span>
                            </div>
                            {activeIndex === 17 && (
                                <div className="faqs_answer">
                                    <article>
                                        <p>The sales office is located at the project site: Plot No. C-01, Sector-12, Ecotech III, Ek Murti Chowk, Greater Noida West, Uttar Pradesh, India.</p>
                                    </article>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default SayaSouthX