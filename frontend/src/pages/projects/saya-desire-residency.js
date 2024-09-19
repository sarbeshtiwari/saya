import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import HelpYou from './help-you';
import { Link } from 'react-router-dom';

function SayaDesireResidency() {
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
    return (
        <div>
            <Navbar />
            <div class="insideBanner w-100">
                <img src="https://ecis.in/sayahomes-react/assets/images/desire-banner.jpg" class="h-100 object-cover" />
                <div class="project-bannerBox container-lg">
                    <div class="pageLogo"><img src="https://ecis.in/sayahomes-react/assets/images/desire-logo.svg" alt="Saya Desire Residency" /><p>J9WJ+9RX, Indirapuram, Ahinsa Khand 2, Indirapuram, Ghaziabad</p></div>
                    <ul class="list-inline unitsBtn">

                        <li class="bottomTranslate translate "><section>
                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/tower.png" alt="Saya Desire Residency" /></div>
                            <p><small>BHK</small><span>2/3/4</span></p>
                        </section></li>
                        <li class="bottomTranslate translate "><section>
                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/area.png" alt="Saya Desire Residency" /></div>
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
                        <li class="breadcrumb-item"><Link to='/sayahomes-react'>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Saya Desire Residency</li>
                    </ol>
                </div>
            </div>
            <section class="w-100">
                <a name="overview"></a>
                <div id="overview" class="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/desire-banner-big1.jpg)" }}>
                    <div class="container-lg">
                        <div class="row">

                            <div class="col-lg-12 projectsTag">
                                <div class="heading topTranslate translate doneTranslate">
                                    <h1 class="h2 text-serif">At the heart of Indirapuram, Saya brings to you Desire Residency. It’s a dream come true for those seeking luxurious homes in the posh locality of Indirapuram. Every apartment at Saya Desire Residency is unique and offers 2/3/4 BHK apartments.</h1>
                                    <hr />
                                    <p>In fact, the 3-side open plot offers every resident stunning view of Indirapuram for a memorable evening after a busy day. Together with dedicated yoga centres and landscaped greens, feel the stress vanish into thin air. Moreover, each apartment offers exceptional privacy while at the same time inviting you to a vibrant and a happening neighbourhood.</p>
                                </div>
                                <ul class="list-inline unitsBtn overview-unitsBtn bottomTranslate translate doneTranslate">
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/unit.png" alt="Saya Desire Residency" /></div>
                                            <p><small>Floors</small><span>-</span></p>
                                        </section>
                                    </li>
                                    <li class="bottomTranslate translate ">
                                        <section>
                                            <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/area.png" alt="Saya Desire Residency" /></div>
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
                <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/amenities.jpg)" }}>

                    <div class="container-lg amenitiesWrapper">
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/club-house.png" alt="Clubhouse" /></div><span>Clubhouse</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/party-lawn.png" alt="Party Lawn" /></div><span>Party Lawn</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/gym.png" alt=" Gym" /></div><span> Gym</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/kids-play-area1.png" alt=" Kids Play Area" /></div><span> Kids Play Area </span></li>
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
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/lift.png" alt="Hi-speed Elevators" /></div><span>Elevators</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/lobby.png" alt="A.C. Lobby" /></div><span>A.C. Lobby</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>Power Back-up</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/parking.png" alt="Parking" /></div><span>Well-equipped clubhouse</span></li>
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
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/road.png" alt="road" /></div><span> Just off NH 24<br />0-15 Min</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/hospital.png" alt="road" /></div><span> Shanti Gopal Hospital in neighbourhood<br />5-10 Min</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/mall.png" alt="railway" /></div><span>Close to Shipra Mall<br />5-10 Min</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/ images/icons/railway.png" alt="railway" /></div><span>Anand Vihar Railway Station<br />10-15 Min</span></li>
                                    </ul>
                                    <div class="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="View on Map" data-brochure="" data-pagename="saya-desire-residency.php" data-projectname="Saya Desire Residency" class="button"><span class="text">View on Map</span></a></div>
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
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/security.png" alt="security" /></div><span>3-tier Cloud-based Security</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/cctv.png" alt="cctv" /></div><span>24x7 CCTV Surveillance</span></li>
                                    </ul>
                                </div>
                                <span class="arrow">→</span>
                            </article>
                            <div class="amenBoxBg" style={{ backgroundColor: "#2c4935" }}></div>
                        </div>
                        <div class="amenBox active">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Neighbourhood</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/mall.png" alt="mall" /></div><span>Shopping Mall</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/park.png" alt="park" /></div><span>Park</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/hospital.png" alt="hospital" /></div><span>Hospitals</span></li>
                                        <li><div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/school.png" alt="Schools" /></div><span>Schools</span></li>
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
                            <div class="swiper-wrapper" id="swiper-wrapper-9aa8a6bdbfffdb8f" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                <div class="swiper-slide specSlide swiper-slide-active" role="group" aria-label="1 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/specifications/kitchen.jpg" alt="Kitchen" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/kitchen.png" class="filter-dark" alt="Saya zenith Kitchen" /></div>
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
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/specifications/wall.jpg" alt="Walls" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/wall.png" class="filter-dark" alt="Saya zenith Walls" /></div>
                                                <h6>Walls</h6>
                                            </div>
                                            <p>Impeccably built to tell your home’s story.</p>
                                            <p>Plaster of Paris finish on walls &amp; ceilings. Designer pop ceilings in drawing room. Putty to be applied followed by coatings of acrylic emulsion paint in pleasing shades in room. One wall of drawing with wallpaper/textured paint.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide specSlide" role="group" aria-label="3 / 5" style={{ marginRight: "30px" }}>
                                    <div class="specDetails">
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/specifications/bathroom.jpg" alt="Bathroom" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/master-toilet.png" class="filter-dark" alt="Saya zenith Bathroom" /></div>
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
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/specifications/woodwork.jpg" alt="Woodwork" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/wood.svg" class="filter-dark" alt="Saya zenith" /></div>
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
                                        <div class="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/specifications/electrical.jpg" alt="Electricals" /></div>
                                        <div class="inner">
                                            <div class="spec-title">
                                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/electrical.png" class="filter-dark" alt="Saya zenith Electricals" /></div>
                                                <h6>Electricals</h6>
                                            </div>
                                            <p>Highest standards of electrical fittings that make your home come alive.</p>
                                            <p>ISI PVC conduits, ISI multi-strand electrical wires, MCB boxes, MCB, modular switches, Telephone &amp; TV outlets in all rooms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomControls">
                                <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9aa8a6bdbfffdb8f" aria-disabled="true"></div>
                                <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9aa8a6bdbfffdb8f" aria-disabled="false"></div>
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
                                    <li><button class="galBtn galBtnActive" data-target="image">Images</button></li>

                                </ul>
                            </div>
                        </div>
                        <div class="galleryContainerBox w-100">
                            <div class="galleryContainer show w-100" id="galleryContainer-image">
                                <div class="swiper extSlider w-100 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" id="swiper-wrapper-e9de1a21ce27206e" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                        <div class="swiper-slide gallSlide swiper-slide-active" role="group" aria-label="1 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Saya-Desire-Residency-mobile.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Saya-Desire-Residency-mobile.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide swiper-slide-next" role="group" aria-label="2 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Kitchen-desire.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Kitchen-desire.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="3 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Wall.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Wall.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="4 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Washroom.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Washroom.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="5 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/woodwork-desire.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/woodwork-desire.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide gallSlide" role="group" aria-label="6 / 6" style={{ marginRight: "30px" }}>
                                            <a href="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Electricals-desire.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency/gallery/Electricals-desire.jpg" alt="Saya Desire Residency" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="swiper-button-next" id="int_next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-e9de1a21ce27206e" aria-disabled="false"></div>
                                    <div class="swiper-button-prev swiper-button-disabled" id="int_prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-e9de1a21ce27206e" aria-disabled="true"></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                            <div class="galleryContainer w-100" id="galleryContainer-video">
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7002.916675530079!2d77.382102!3d28.645992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1daeee376071162!2sDesire%20Residency!5e0!3m2!1sen!2sin!4v1654066249402!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-p1e024brarp4gb6d="true" data-lf-yt-playback-inspected-p1e024brarp4gb6d="true" data-lf-vimeo-playback-inspected-p1e024brarp4gb6d="true"></iframe>
                                        <p class="mt-3"><b><i class="fa-solid fa-map-marker-alt"></i> J9WJ+9RX, Ahinsa Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014</b></p>
                                    </div>
                                    <div class="readmore"><a href="https://maps.app.goo.gl/oDP4ugE3F2YUvRmk7" target="_blank" class="button justify-content-lg-start">
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
                                        <div class="swiper-wrapper" id="swiper-wrapper-5ece64d8fff9ab97" aria-live="polite" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                            <div class="swiper-slide newsBox blogBox swiper-slide-active" role="group" aria-label="1 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="https://ecis.in/sayahomes-react/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Luxury Segment Homes">
                                                    <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/awards/3563c150-0025-426b-a2e0-30c6068e3c61-th.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Excellence in Luxury Segment...</h5>
                                                        <p class="mb-0">ET Now Realty Conclave 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                            <div class="swiper-slide newsBox blogBox swiper-slide-next" role="group" aria-label="2 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="./images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Developer of the Year">
                                                    <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/awards/11f3e7c5-30cd-4a98-8190-341ee4a0fcb0-th.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Real Estate Developer of...</h5>
                                                        <p class="mb-0">ET Now Realty Conclave 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                            <div class="swiper-slide newsBox blogBox" role="group" aria-label="3 / 3" style={{width: "226px", marginRight: "10px"}}>
                                                <a href="./images/awards/1.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="ICONIC Real Estate Brand of The Year - Saya Group">
                                                    <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/awards/th1.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4">Iconic Real Estate Brand of...</h5>
                                                        <p class="mb-0">Times Business Awards, North 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottomControls justify-content-lg-start px-lg-0">
                                            <div class="swiper-button-prev solid swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-5ece64d8fff9ab97" aria-disabled="true"></div>
                                            <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-5ece64d8fff9ab97" aria-disabled="false"></div>
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

export default SayaDesireResidency