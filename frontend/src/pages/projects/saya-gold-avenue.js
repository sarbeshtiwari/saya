import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import FooterAll from '../../components/footer2';
import HelpYou from './help-you';
import { Link } from 'react-router-dom';

function SayaGoldAvenue() {
    const getBackgroundColor = (title) => {
        switch (title) {
            case 'Amenities': return '#4792a5';
            case 'Features': return '#c38439';
            case 'Connectivity': return '#7c1e35';
            case 'Security': return '#2c4935';
            case 'Neighbourhood': return '#a07963';
            default: return '#fff';
        }
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

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
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({
        modalType: '',
        pageName: '',
        projectName: '',
        brochure: '',
        brochureUrl: ''
    });


    const handleShowModal = (event) => {
        event.preventDefault();
        const modalType = event.currentTarget.getAttribute('data-modaltype');
        const pageName = event.currentTarget.getAttribute('data-pagename');
        const projectName = event.currentTarget.getAttribute('data-projectname');
        const brochure = event.currentTarget.getAttribute('data-brochure');
        const brochureUrl = event.currentTarget.getAttribute('data-brochureurl') || '';

        setModalData({
            modalType,
            pageName,
            projectName,
            brochure,
            brochureUrl
        });

        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);
    const [activeTab, setActiveTab] = useState('image');

    const handleButtonClick = (target) => {
        setActiveTab(target);
    };
    return (
        <div>
            <Navbar />
            <div className="insideBanner w-100">
                <div id="banner" className="w-100 carousel slide banner" data-pause="false" data-ride="carousel">
                    <div className="carousel-inner h-100">
                        <div className="carousel-item h-100 active">
                            <picture>
                                <source media="(min-width: 768px)" srcset="/sayahomes-react/assets/images/banner/6.jpg" />
                                    <img src="/sayahomes-react/assets/images/banner/6.jpg" className="h-100 object-cover" alt="" />
                                    </picture>
                                </div>
                                <div className="carousel-item h-100">
                                    <picture>
                                        <source media="(min-width: 768px)" srcset="/sayahomes-react/assets/images/banner/2.jpg" />
                                            <img src="/sayahomes-react/assets/images/banner/2.jpg" className="h-100 object-cover" alt="" />
                                            </picture>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <picture>
                                                <source media="(min-width: 768px)" srcset="/sayahomes-react/assets/images/banner/3.jpg" />
                                                    <img src="/sayahomes-react/assets/images/banner/3.jpg" className="h-100 object-cover" alt="" />
                                                    </picture>
                                                </div>
                                                <div className="carousel-item h-100">
                                                    <picture>
                                                        <source media="(min-width: 768px)" srcset="/sayahomes-react/assets/images/banner/7.jpg" />
                                                            <img src="/sayahomes-react/assets/images/banner/7.jpg" className="h-100 object-cover" alt="" />
                                                            </picture>
                                                        </div>
                                                </div>
                                                {/* <div class="banner-bottom-controls">
                                                    <a class="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#banner" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div> */}
                                        </div>

                                        <div class="project-bannerBox container-lg">
                                            <div class="pageLogo"><img src="/sayahomes-react/assets/images/logo-saya-gold-avenue-white.png" alt="Saya Gold Avenue" />
                                                <p>Indirapuram, Ghaziabad</p>
                                            </div>
                                            <ul class="list-inline unitsBtn">

                                                <li class="bottomTranslate translate ">
                                                    <section>
                                                        <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/tower.png" alt="Saya Gold Avenue" /></div>
                                                        <p><small>BHK</small><span>2/3/4</span></p>
                                                    </section>
                                                </li>
                                                <li class="bottomTranslate translate ">
                                                    <section>
                                                        <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/area.png" alt="Saya Gold Avenue" /></div>
                                                        <p><small>Club Area</small><span>7432 sqmt</span></p>
                                                    </section>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="scrollDown">Scroll to Explore</div>
                                </div>
                                <div className="pageHeader bg-secondary">
                                    <div className="container-lg">
                                        <div className="pageMenuBtn"><small></small></div>
                                        <ul className="list-inline">
                                            <li className="topTranslate "><Link to='/sayahomes-react'><i className="fa fa-home"></i></Link></li>
                                            <li className="topTranslate "><a href="#overview">Overview</a></li>
                                            <li className="topTranslate "><a href="#amenities">Amenities</a></li>
                                            <li className="topTranslate "><a href="#specifications">Specifications</a></li>
                                            <li className="topTranslate "><a href="#gallery">Gallery</a></li>
                                            <li className="topTranslate "><a href="#location">Location</a></li>

                                            <li className="topTranslate "><a href="#forms">Enquiry</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="breadcrumbContainer">
                                    <div className="container-lg">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Saya Gold Avenue</li>
                                        </ol>
                                    </div>
                                </div>
                                <section className="w-100">
                                    <a name="overview"></a>
                                    <div id="overview" className="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://ecis.in/sayahomes-react/assets/images/gold-avenue/overview-img.jpg)" }}>
                                        <div class="container-lg">
                                            <div class="row">

                                                <div class="col-lg-12 projectsTag">
                                                    <div class="heading topTranslate translate doneTranslate">
                                                        <h1 class="h2 text-serif">Saya Gold Avenue is a perfect blend of modernity, luxury, comfort, and affordability. The exceptionally high towers are a true representation of upscale and trendy architecture. Designed by Hafeez contractor, the world renowned architect behind India's tallest skyscrapers.</h1>
                                                        <hr />
                                                        <p>Every small detail, from the spectacular interiors to the relaxing semi-olympic sized swimming pool has been crafted, keeping in mind the discerning taste of our residents. Strategically located adjacent to the North India Mall (erstwhile Shipra Mall), and in close proximity to NH-9, Saya Gold Avenue will offer every resident effortless connectivity for a truly comfortable living experience. In fact, with a range of luxurious amenities &amp; recreational facilities, the homes at Gold Avenue promise to mesmerize you throughout your life.</p>
                                                        <p><small><strong>RERA Number Phase I : UPRERAPRJ6548 Phase II: UPRERAPRJ6678 | www.up-rera.in</strong></small></p>
                                                    </div>
                                                    <ul class="list-inline unitsBtn overview-unitsBtn bottomTranslate translate doneTranslate">
                                                        <li class="bottomTranslate translate ">
                                                            <section>
                                                                <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/families.png" alt="Saya Gold Avenue" /></div>
                                                                <p><small>Happy Families</small><span>1200+</span></p>
                                                            </section>
                                                        </li>
                                                        <li class="bottomTranslate translate ">
                                                            <section>
                                                                <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/tower.png" alt="Saya Gold Avenue" /></div>
                                                                <p><small>Designed By</small><span>Hafeez Contractor</span></p>
                                                            </section>
                                                        </li>
                                                        <li class="bottomTranslate translate ">
                                                            <section>
                                                                <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/area.png" alt="Saya Gold Avenue" /></div>
                                                                <p><small>Status</small><span>Ready-to-move-in</span></p>
                                                            </section>
                                                        </li>
                                                        <li class="bottomTranslate translate ">
                                                            <section>
                                                                <div class="imgBox"><img src="https://ecis.in/sayahomes-react/assets/images/icons/possession.png" alt="Saya Gold Avenue" /></div>
                                                                <p><small>Immediate</small><span>Registry &amp; Possession</span></p>
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
                                    <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(/sayahomes-react/assets/images/gold-avenue/amenities.jpg)" }}>

                                        <div class="container-lg amenitiesWrapper">
                                            <div class="amenBox">
                                                <article class="w-100 bottomTranslate translate doneTranslate">
                                                    <h3>Amenities</h3>
                                                    <div class="allItems">
                                                        <ul class="list-inline halfList">
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/club-house.png" alt="Clubhouse" /></div><span>Clubhouse</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/jacuzzi1.png" alt="jacuzzi" /></div><span>Jacuzzi</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/gym.png" alt="Gymnasium" /></div><span>Gymnasium</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/swimming.png" alt="Swimming Pool" /></div><span>Swimming Pool</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/party-lawn.png" alt="Party Lawn" /></div><span>Party Lawn</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/jogging.png" alt="Jogging Track" /></div><span>Jogging Track</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span class="arrow">→</span>
                                                </article>
                                                <div class="amenBoxBg bottomTranslate translate doneTranslate" style={{ backgroundColor: "#4792a5" }}></div>
                                            </div>
                                            <div class="amenBox">
                                                <article class="w-100 bottomTranslate translate doneTranslate">
                                                    <h3>Features</h3>
                                                    <div class="allItems">
                                                        <ul class="list-inline halfList">
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/lift.png" alt="Hi-speed Elevators" /></div><span>Elevators</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/security.png" alt="security" /></div><span>Security</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/power-backup.png" alt="Power Back-up" /></div><span>Power Back-up</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/parking.png" alt="Parking" /></div><span>Parking</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span class="arrow">→</span>
                                                </article>
                                                <div class="amenBoxBg bottomTranslate translate doneTranslate" style={{ backgroundColor: "#c38439" }}></div>
                                            </div>
                                            <div class="amenBox active">
                                                <article class="w-100 bottomTranslate translate doneTranslate">
                                                    <h3>Connectivity</h3>
                                                    <div class="allItems">
                                                        <ul class="list-inline">
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/railway.png" alt="railway" /></div><span>Electronic city centre<br />- 1 Km approx</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/highway.png" alt="highway" /></div><span>NH-24<br />- 200 mtrs approx</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/road.png" alt="road" /></div><span>45m wide approach roads</span>
                                                            </li>
                                                        </ul>
                                                        <div class="readmore"><a href="#modalforms" data-toggle="modal" data-pagename="saya-gold-avenue.php" data-projectname="Saya Gold Avenue" class="button"><span class="text">View on Map</span></a></div>
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
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/security.png" alt="security" /></div><span>3-tier Security</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/cctv.png" alt="cctv" /></div><span>24x7 CCTV Surveillance</span>
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
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/temple.png" alt="temple" /></div><span>Sai Mandir - 1 km</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/park.png" alt="park" /></div><span>25 Acre Swarn Jayanti Park</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/mall.png" alt="mall" /></div><span>Shopping Mall</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/hospital.png" alt="hospital" /></div><span>Hospitals</span>
                                                            </li>
                                                            <li>
                                                                <div class="imgBox"><img src="/sayahomes-react/assets/images/icons/school.png" alt="Schools" /></div><span>Schools</span>
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

                                <section className="w-100">
                                    <a name="specifications"></a>
                                    <div id="specifications" className="w-100 padding bg-secondary-light overflow-hidden">
                                        <div className="container-lg">
                                            <div className="heading mx-auto text-center">
                                                <h6 className="text-orange">Specifications</h6>
                                                <h2 className="h1 text-serif mb-0">Simple Pleasures, Elegant Living</h2>
                                            </div>
                                            <div className="swiper specSlider w-100">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide specSlide">
                                                        <div className="specDetails">
                                                            <div className="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/specifications/living-room1.jpg" alt="Living Room" /></div>
                                                            <div className="inner">
                                                                <div className="spec-title">
                                                                    <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/sofa.png" className="filter-dark" alt="Living Room" /></div>
                                                                    <h6>Living Room</h6>
                                                                </div>
                                                                <p>Designed for gatherings & the family's entertainment hub.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide specSlide">
                                                        <div className="specDetails">
                                                            <div className="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/specifications/kitchen1.jpg" alt="kitchen" /></div>
                                                            <div className="inner">
                                                                <div className="spec-title">
                                                                    <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/kitchen.png" className="filter-dark" alt="kitchen" /></div>
                                                                    <h6>Kitchen</h6>
                                                                </div>
                                                                <p>Designed to be the heart of the home.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide specSlide">
                                                        <div className="specDetails">
                                                            <div className="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/specifications/bedroom1.jpg" alt="Bedroom" /></div>
                                                            <div className="inner">
                                                                <div className="spec-title">
                                                                    <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/bedroom.png" className="filter-dark" alt="Bedroom" /></div>
                                                                    <h6>Bedroom</h6>
                                                                </div>
                                                                <p>A perfect space to unwind after a long day.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide specSlide">
                                                        <div className="specDetails">
                                                            <div className="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/specifications/bathroom1.jpg" alt="Bathroom" /></div>
                                                            <div className="inner">
                                                                <div className="spec-title">
                                                                    <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/master-toilet.png" className="filter-dark" alt="Bathroom" /></div>
                                                                    <h6>Bathroom</h6>
                                                                </div>
                                                                <p>A perfect place built for you to refresh and relax.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide specSlide">
                                                        <div className="specDetails">
                                                            <div className="spec-img"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/specifications/balcony1.jpg" alt="Balcony" /></div>
                                                            <div className="inner">
                                                                <div className="spec-title">
                                                                    <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/icons/balcony.png" className="filter-dark" alt="Balcony" /></div>
                                                                    <h6>Balcony</h6>
                                                                </div>
                                                                <p>Your own private space with a majestic view.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottomControls">
                                                    <div className="swiper-button-prev solid"></div>
                                                    <div className="swiper-button-next solid"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="w-100">
                                    <a name="gallery"></a>
                                    <div id="gallery" className="w-100 padding overflow-hidden">
                                        <div className="container-lg">
                                            <div className="heading mx-auto text-center">
                                                <h6 className="text-orange">Gallery</h6>
                                                <h2 className="h1 text-serif mb-0">A Glimpse of Excellence</h2>
                                            </div>
                                            <div className="pageHeadingContainer w-100">
                                                <div className="scroller-heading">
                                                    <ul className="list-inline">
                                                        <li><button
                                                            className={`galBtn ${activeTab === 'image' ? 'galBtnActive' : ''}`}
                                                            onClick={() => handleButtonClick('image')}
                                                        >Images</button></li>
                                                        <li> <button
                                                            className={`galBtn ${activeTab === 'video' ? 'galBtnActive' : ''}`}
                                                            onClick={() => handleButtonClick('video')}
                                                        >Videos</button></li>
                                                        <li> <button
                                                            className={`galBtn ${activeTab === 'location' ? 'galBtnActive' : ''}`}
                                                            onClick={() => handleButtonClick('location')}
                                                        >Location Map</button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="galleryContainerBox w-100">
                                                <div
                                                    className={`galleryContainer ${activeTab === 'image' ? 'show' : 'hide'} w-100`}
                                                    id="galleryContainer-image"
                                                >
                                                    <div className="swiper extSlider w-100">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Banquet.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Banquet.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Club-House.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Club-House.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Elevation.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Elevation.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Elevator.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Elevator.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Gymnasium.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Gymnasium.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Kids-Play-Area.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/Kids-Play-Area.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                            <div className="swiper-slide gallSlide">
                                                                <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/swimming-pool.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                                    <img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gallery/swimming-pool.jpg" alt="Saya Gold Avenue" />
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="swiper-button-next" id="int_next"></div>
                                                        <div className="swiper-button-prev" id="int_prev"></div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`galleryContainer ${activeTab === 'video' ? 'show' : 'hide'} w-100`}
                                                    id="galleryContainer-video"
                                                >
                                                    <iframe width="100%" height="515" src="https://www.youtube.com/embed/7pGngI9YQ3E?si=JxJT2ldMm0p3DbPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </div>

                                                <div
                                                    className={`galleryContainer ${activeTab === 'location' ? 'show' : 'hide'} w-100`}
                                                    id="galleryContainer-location"
                                                >
                                                    <div className="img-fluid">
                                                        <a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gold-avenue-location.jpg" data-magnify="sp" data-group="sp" data-caption="Location Map"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gold-avenue-location.jpg" alt="Location Map" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <HelpYou />
                                <section className="w-100">
                                    <a name="location"></a>
                                    <div id="location" className="w-100 padding">
                                        <div className="container-lg">
                                            <div className="row gap-row">
                                                <div className="col-lg-8 projectMap">
                                                    <div className="inside">
                                                        <div className="heading mx-auto text-center  mx-lg-0 text-lg-left">
                                                            <h2 className="h1 text-serif mb-0">Location</h2>
                                                        </div>
                                                        <div className="locationmap">
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.103560774069!2d77.37144600583494!3d28.63647815368282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55208a29989%3A0x34108dce06a6a1cd!2sSaya%20Gold%20Avenue!5e0!3m2!1sen!2sin!4v1718359522496!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                            <p className="mt-3"><b><i className="fa-solid fa-map-marker-alt"></i> Plot 10/1, Block A, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014</b></p>
                                                        </div>
                                                        <div className="readmore"><a href="https://ecis.in/sayahomes-react/assets/images/gold-avenue/gold-avenue-location.jpg" data-magnify="sp" data-group="sp" data-caption="Location Map" className="button justify-content-lg-start">
                                                            <span className="icon"><i className="fa-solid fa-map-marker-alt"></i></span>
                                                            <span className="text">View Location Map</span>
                                                            <span className="icon"><i className="fa-solid fa-map-marker-alt"></i></span>
                                                        </a></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 projectAwards">
                                                    <div className="inside">
                                                        <div className="heading mx-auto text-center  mx-lg-0 text-lg-left">
                                                            <h2 className="h1 text-serif mb-0">Awards</h2>
                                                        </div>
                                                        <div className="swiper news-slider blogContainer">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide newsBox blogBox">
                                                                    <a href="https://ecis.in/sayahomes-react/assets/images/awards/ee0b9226-6537-4ff9-9297-51e106c8503f.jpg" className="inner h-100" data-magnify="awards" data-group="awards" data-caption="Excellence in Environmental Friendly Projects for Saya Gold Avenue">
                                                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/awards/ee0b9226-6537-4ff9-9297-51e106c8503f-th.jpg" alt="Saya Homes" className="h-100 object-cover" title /></div>
                                                                        <article>
                                                                            <h5 className="news-title mt-4">Excellence in Environmental Friendly Projects for Saya Gold Avenue</h5>
                                                                            <p className="mb-0">Times Realty & Infrastructure Conclave 2024. </p>
                                                                        </article>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            {/* <div className="bottomControls justify-content-lg-start px-lg-0">
                                            <div className="swiper-button-prev solid"></div>
                                            <div className="swiper-button-next solid"></div>
                                        </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="button-top"><i className="fa fa-chevron-up"></i></div>

                                <FooterAll />
                        </div>
                        )
}

                        export default SayaGoldAvenue