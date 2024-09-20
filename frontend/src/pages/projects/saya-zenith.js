import React, { useEffect, useState } from 'react'
import FooterAll from '../../components/footer2'
import Navbar from '../../components/navbar'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import HelpYou from './help-you';
import { Link } from 'react-router-dom';

function SayaZenith() {
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
        const swiper3 = new Swiper('.extSlider ', {
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
        const swiper4 = new Swiper('.news-slider ', {
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
                <img src="https://sayahomes.com/assets/images/zenith-banner.jpg" class="h-100 object-cover" />
                <div class="project-bannerBox container-lg">
                    <div class="pageLogo"><img src="https://sayahomes.com/assets/images/zenith-logo.png" alt="Saya zenith" /><p>Indirapuram, Ghaziabad</p></div>
                    <ul class="list-inline unitsBtn">

                        <li class="bottomTranslate translate doneTranslate"><section>
                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/tower.png" alt="Saya zenith" /></div>
                            <p><small>BHK</small><span>2/3/4</span></p>
                        </section></li>
                        <li class="bottomTranslate translate doneTranslate"><section>
                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/area.png" alt="Saya zenith" /></div>
                            <p><small>Project Area</small><span>-</span></p>
                        </section></li>
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
                        <li class="topTranslate "><a href="#forms">Enquiry</a></li>
                        <li class="topTranslate "><a href="#location">Location</a></li>

                    </ul>
                </div>
            </div>
            <div class="breadcrumbContainer">
                <div class="container-lg">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Saya zenith</li>
                    </ol>
                </div>
            </div>
            <section class="w-100">
                <a name="overview"></a>
                <div id="overview" class="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/saya-zenith/gallery/zenith-big2.jpg)" }}>
                    <div class="container-lg">
                        <div class="row">

                            <div class="col-lg-12 projectsTag">
                                <div class="heading topTranslate translate doneTranslate">
                                    <h1 class="h2 text-serif">Saya brings to you Zenith, apartments artfully curated for the discerning you. Each residence here is flooded with natural light and designed with elegance and outstanding craftsmanship.</h1>
                                    <hr />
                                    <p>Live your dream lifestyle and make way for all the things that you love. Celebrate lavishly at our spacious party lawns and burn all those extra calories at a fully equipped gym. Come home, enjoy your private oasis in the middle of the bustling Indirapuram.</p>
                                </div>
                                <ul class="list-inline unitsBtn overview-unitsBtn bottomTranslate translate doneTranslate">
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/unit.png" alt="Saya zenith" /></div>
                                            <p><small>Floors</small><span>-</span></p>
                                        </section>
                                    </li>
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/area.png" alt="Saya zenith" /></div>
                                            <p><small>Status</small><span>Delivered </span></p>
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
                <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/saya-zenith/amenities.jpg)" }}>

                    <div class="container-lg amenitiesWrapper">
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">

                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/party-lawn.png" alt="Party Lawn" /></div><span>Party Lawn</span></li>

                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/gym.png" alt="Fully-Equipped Gym" /></div><span>Fully-Equipped Gym</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/club-house.png" alt="Well-equipped clubhouse" /></div><span>Well-equipped clubhouse</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/vaastu.png" alt="Vaastu compliant site" /></div><span>Vaastu compliant site</span></li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#4792a5" }}></div>
                        </div>
                        <div class="amenBox active">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Features</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/lift.png" alt="Hi-speed Elevators" /></div><span>Elevators</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/lobby.png" alt="A.C. Lobby" /></div><span>A.C. Lobby</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>Power Back-up</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/parking.png" alt="Parking" /></div><span>Parking</span></li>
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
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/road.png" alt="road" /></div><span> Just off NH 24<br />0-15 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="road" /></div><span> Shanti Gopal Hospital in neighbourhood<br />15-25 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/mall.png" alt="railway" /></div><span>Close to Shipra Mall<br />15-25 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/railway.png" alt="railway" /></div><span>Anand Vihar Railway Station<br />25-35 Min</span></li>
                                    </ul>
                                    <div class="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="" data-brochure="" data-pagename="saya-zenith.php" data-projectname="Saya Zenth" class="button"><span class="text">View on Map</span></a></div>
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
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/security.png" alt="security" /></div><span>3-tier Cloud-based Security</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/cctv.png" alt="cctv" /></div><span>24x7 CCTV Surveillance</span></li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#2c4935" }}></div>
                        </div>
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate"> /
                                <h3>Neighbourhood</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/mall.png" alt="mall" /></div><span>Shopping Mall</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/park.png" alt="park" /></div><span>Park</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="hospital" /></div><span>Hospitals</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/school.png" alt="Schools" /></div><span>Schools</span></li>
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
                            <div class="swiper-wrapper" id="swiper-wrapper-152f297101c36c2ef" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                <div class="swiper-slide specSlide swiper-slide-active" role="group" aria-label="1 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-zenith/specifications/kitchen.jpg" alt="Kitchen" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/kitchen.png" class="filter-dark" alt="Saya zenith Kitchen" /></div>
                                                <h6>Kitchen</h6>
                                            </div>
                                            <p>Designed to be the heart of the home.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Fitting</strong><span>Unique stainless steel modular kitchen of Godrej or equivalent brand with chimney and hob. Double bowel sinks with faucet.</span></li>
                                                    <li><strong>Flooring</strong><span>Designer ceramic tiles on 2 feet above the working top and 5 feet from the floor level on remaining wall, individual RO water system.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide swiper-slide-next" role="group" aria-label="2 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-zenith/specifications/wall.jpg" alt="Walls" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/wall.png" class="filter-dark" alt="Saya zenith Walls" /></div>
                                                <h6>Walls</h6>
                                            </div>
                                            <p>Impeccably built to tell your home’s story.</p>
                                            <p>Plaster of Paris finish on walls &amp; ceilings. Designer pop ceilings in drawing room. Putty to be applied followed by coatings of acrylic emulsion paint in pleasing shades in room. One wall of drawing with wallpaper/textured paint.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="3 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-zenith/specifications/bathroom.jpg" alt="Bathroom" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/master-toilet.png" class="filter-dark" alt="Saya zenith Bathroom" /></div>
                                                <h6>Bathroom</h6>
                                            </div>
                                            <p>A perfect place built for you to relax and unwind.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Fittings</strong><span>Plumbing done with Prince or equivalents UPVC &amp; CPVC pipes. Shower panels in all washrooms, TOTO or equivalent sanitary brand, mirror in all washrooms.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="4 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-zenith/specifications/woodwork.jpg" alt="Woodwork" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/wood.svg" class="filter-dark" alt="Saya zenith" /></div>
                                                <h6>Woodwork</h6>
                                            </div>
                                            <p>Interiors crafted with rich woodwork for an elegant finish.</p>
                                            <div class="scroller">
                                                <ul class="list-inline list">
                                                    <li><strong>Flooring</strong><span>1m X 1m Rak or equivalent designer vitrified tiles in Drawing/Dining room &amp; Kitchen. Rustic Porcelain tiles in bedrooms.</span></li>
                                                    <li><strong>Woodwork</strong><span>Cupboards with ISI plywood and board and Hettich hinges and designer handles, laminates of Sundek or Real Touch or Heritage or equivalent brand will be used. Inner side of cupboards will also be laminated.</span></li>
                                                    <li><strong>Doors &amp; Windows</strong><span>Door frames of size 8’ height &amp; section of 6”x2.5” of Maranti wood with Dulux or equivalent matte finish enamel. 32 mm flush doors with designer laminates. Good quality hardware. 16 gauge aluminium powder coated/UPVC outer door/window. Reflective window glasses. Good quality hardware.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="5 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://sayahomes.com/assets/images/saya-zenith/specifications/electrical.jpg" alt="Electricals" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/electrical.png" class="filter-dark" alt="Saya zenith Electricals" /></div>
                                                <h6>Electricals</h6>
                                            </div>
                                            <p>Highest standards of electrical fittings that make your home come alive.</p>
                                            <p>ISI PVC conduits, ISI multi-strand electrical wires, MCB boxes, MCB, modular switches, Telephone &amp; TV outlets in all rooms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomControls">
                                <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-152f297101c36c2ef" aria-disabled="true"></div>
                                <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-152f297101c36c2ef" aria-disabled="false"></div>
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
                            <h2 class="h1 text-serif mb-0">Transforming Spaces Into Beautiful Places</h2>
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
                                </ul>
                            </div>
                        </div>
                        <div class="galleryContainerBox w-100">
                            <div
                                className={`galleryContainer ${activeTab === 'image' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-image"
                            >
                                <div class="swiper extSlider w-100 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" id="swiper-wrapper-85e570d85bb92d74" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                        <div class="swiper-slide gallSlide swiper-slide-active" role="group" aria-label="1 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/Zenith-mobile.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/Zenith-mobile.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide swiper-slide-next" role="group" aria-label="2 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/electrical-Zeniths.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/electrical-Zeniths.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="3 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/Kitchen-Zenith.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/Kitchen-Zenith.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="4 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/Walls-zenith.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/Walls-zenith.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="5 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/Washroom-zenith.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/Washroom-zenith.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="6 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://sayahomes.com/assets/images/saya-zenith/gallery/woodwork-Zenith.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zenith/gallery/woodwork-Zenith.jpg" alt="Saya zenith" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="swiper-button-next" id="int_next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-85e570d85bb92d74" aria-disabled="false"></div>
                                    <div class="swiper-button-prev swiper-button-disabled" id="int_prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-85e570d85bb92d74" aria-disabled="true"></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                            <div
                                className={`galleryContainer ${activeTab === 'video' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-video"
                            >
                                <iframe width="100%" height="515" src="https://www.youtube.com/embed/Xm6NC2-N7j0?si=NIhAjF5LsCVlpzm3?rel=0&amp;enablejsapi=1&amp;origin=https://sayahomes.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7003.430843938935!2d77.378659!3d28.638290000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf38f193c28d52b4!2sSaya%20Zenith%20Apartments!5e0!3m2!1sen!2sin!4v1654067867020!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
                                        <p class="mt-3"><b><i class="fa-solid fa-map-marker-alt"></i> GH 11, Ahinsa Khand II, Indirapuram, Ghaziabad, Uttar Pradesh 201014</b></p>
                                    </div>
                                    <div class="readmore"><a href="https://maps.app.goo.gl/RUKsikV4ZZCPTArY8" target="_blank" class="button justify-content-lg-start">
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
                                        <div class="swiper-wrapper" id="swiper-wrapper-27b4b3d1e7dcd31f" aria-live="polite" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                            <div class="swiper-slide newsBox blogBox swiper-slide-active" role="group" aria-label="1 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="https://sayahomes.com/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Luxury Segment Homes">
                                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61-th.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Excellence in Luxury Segment...</h5>
                                                        <p class="mb-0">ET Now Realty Conclave 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                            <div class="swiper-slide newsBox blogBox swiper-slide-next" role="group" aria-label="2 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="https://sayahomes.com/assets/images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Developer of the Year">
                                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0-th.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Real Estate Developer of...</h5>
                                                        <p class="mb-0">ET Now Realty Conclave 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                            <div class="swiper-slide newsBox blogBox" role="group" aria-label="3 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="https://sayahomes.com/assets/images/awards/1.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="ICONIC Real Estate Brand of The Year - Saya Group">
                                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/awards/th1.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Iconic Real Estate Brand of...</h5>
                                                        <p class="mb-0">Times Business Awards, North 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottomControls justify-content-lg-start px-lg-0">
                                            <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-27b4b3d1e7dcd31f" aria-disabled="true"></div>
                                            <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-27b4b3d1e7dcd31f" aria-disabled="false"></div>
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

export default SayaZenith