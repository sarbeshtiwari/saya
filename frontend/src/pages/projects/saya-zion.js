import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import HelpYou from './help-you'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

function SayaZion() {
    useEffect(() => {
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
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });

    }, []);

    const [activeTab, setActiveTab] = useState('image');

    const handleButtonClick = (target) => {
        setActiveTab(target);
    };
    return (
        <div>
            <Navbar />
            <div className="insideBanner w-100">
                <img src="https://sayahomes.com/assets/images/zion-banner.jpg" className="h-100 object-cover" alt='' />
                <div className="project-bannerBox container-lg">
                    <div className="pageLogo"><img src="https://sayahomes.com/assets/images/zion-logo.png" alt="Saya Zion" /><p>Gaur City 1, Sector 4, Greater Noida</p></div>
                    <ul className="list-inline unitsBtn">

                        <li className="bottomTranslate translate"><section>
                            <div className="imgBox"><img src="https://sayahomes.com/assets/images/icons/tower.png" alt="Saya Zion" /></div>
                            <p><small>BHK</small><span>2/3/4</span></p>
                        </section></li>
                        <li className="bottomTranslate translate"><section>
                            <div className="imgBox"><img src="https://sayahomes.com/assets/images/icons/area.png" alt="Saya Zion" /></div>
                            <p><small>Project Area</small><span>5.17 Acres</span></p>
                        </section></li>
                    </ul>
                </div>
                <div className="scrollDown">Scroll to Explore</div>
            </div>
            <div className="pageHeader bg-secondary">
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
            <div className="breadcrumbContainer">
                <div className="container-lg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Saya Zion</li>
                    </ol>
                </div>
            </div>
            <section className="w-100">
                <a name="overview"></a>
                <div id="overview" className="w-100 padding position-relative lightBg scrollto overviewBg" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/south-x/gallery/1.jpg)" }}>
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-12 projectsTag">
                                <div className="heading topTranslate translate doneTranslate">
                                    <h1 className="h2 text-serif">Here, Green Is The New Luxury</h1>
                                    <hr />
                                    <p>Zion perfectly captures the grandeur of its expansive green surroundings in Greater Noida West. Nestled amidst lush green landscapes, the building is an amalgamation of bountiful nature with lasting luxury. Feel the day’s stress vanish away in a landscaped garden filled with exotic flowers and let your kids play free and fair in expansive green spaces. Embrace the green lifestyle and live a healthy life, every day at Saya Zion. A perfect celebration of home on a grand scale, enhanced by the seasonal colours of the surrounding gardens and green belt.</p>
                                </div>
                                <ul className="list-inline unitsBtn overview-unitsBtn">
                                    <li className="bottomTranslate translate ">
                                        <section>
                                            <div className="imgBox"><img src="https://sayahomes.com/assets/images/icons/unit.png" alt="Saya Zion" /></div>
                                            <p><small>Floors</small><span>G+20 &amp; G+22</span></p>
                                        </section>
                                    </li>
                                    <li className="bottomTranslate translate ">
                                        <section>
                                            <div className="imgBox"><img src="https://sayahomes.com/assets/images/icons/tower.png" alt="Saya Zion" /></div>
                                            <p><small>Designed By</small><span>Hafeez Contractor</span></p>
                                        </section>
                                    </li>
                                    <li className="bottomTranslate translate ">
                                        <section>
                                            <div className="imgBox"><img src="https://sayahomes.com/assets/images/icons/area.png" alt="Saya Zion" /></div>
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
                <div id="amenities" class="w-100 padding amenitiesContainer" style={{ backgroundImage: "url(https://sayahomes.com/assets/images/saya-zion/amenities.jpg)" }}>

                    <div class="container-lg amenitiesWrapper">
                        <div class="amenBox">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Amenities</h3>
                                <div class="allItems">
                                    <ul class="list-inline halfList">
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/park.png" alt="Zen Garden" /></div><span>Zen Garden</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/vision-w.png" alt="Amphitheatre" /></div><span>Amphitheatre</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/yoga1.png" alt="Yoga Lawn" /></div><span>Yoga Lawn</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/mall.png" alt="Clubhouse" /></div><span>Shopping Centres</span></li>
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
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/railway.png" alt="road" /></div><span> City Centre Metro Station<br />0-15 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/school.png" alt="road" /></div><span> GD Goenka School<br />0-15 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/mall.png" alt="railway" /></div><span>Mall of India<br />15-25 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/hospital.png" alt="railway" /></div><span>Fortis Hospital<br />15-25 Min</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/railway.png" alt="railway" /></div><span>Anand Vihar Railway Station<br />25-35 Min</span></li>
                                    </ul>
                                    <div class="readmore"><a href="#modalforms" data-toggle="modal" data-modaltype="View on Map" data-brochure="" data-pagename="saya-zion.php" data-projectname="Saya Zion" class="button"><span class="text">View on Map</span></a></div>
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
                        <div class="amenBox active">
                            <article class="w-100 bottomTranslate translate doneTranslate">
                                <h3>Neighbourhood</h3>
                                <div class="allItems">
                                    <ul class="list-inline">
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/park.png" alt="temple" /></div><span>Expansive Greens</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/mall.png" alt="mall" /></div><span>Shopping Mall</span></li>
                                        <li><div class="imgBox"><img src="https://sayahomes.com/assets/images/icons/park.png" alt="park" /></div><span>Zen Garden</span></li>
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
                                        <div className="spec-img"><img src="https://sayahomes.com/assets/images/saya-zion/specifications/living-room.jpg" alt="Living Room" /></div>
                                        <div className="inner">
                                            <div className="spec-title">
                                                <div className="img-fluid"><img src="https://sayahomes.com/assets/images/icons/sofa.png" className="filter-dark" alt="Living Room" /></div>
                                                <h6>Living Room</h6>
                                            </div>
                                            <p>Designed for gatherings & the family’s entertainment hub.</p>
                                            <div className="scroller">
                                                <ul className="list-inline list">
                                                    <li><strong>Internal Wall</strong><span>Block work / Brickwork, plastered,POP punning, Plastic emulsion plastic paint ( Make : ICI dulux / Asian / Berger or Equivalent).</span></li>
                                                    <li><strong>Floor</strong><span>600x600 mm vitrified/Porcelain tiles (± 5%variation in tile size).</span></li>
                                                    <li><strong>External Balcony Door</strong><span>UPVC door frame size : 55 mm x 55 mm. UPVC Two track Sliding Doors with 5 mm thick plain glass, sliding both sides.</span></li>
                                                    <li><strong>Door</strong><span>Door Masonry Opening :900mm ( w ) x 2400 mm ( h ), Door frame : Meranti Wood., Door frame size : 115 mm x 60 mm section. Door frame ht. : 2400 mm. , Flush Door size 800 mm x 2350 mm and 32 mm thick both side laminated.</span></li>
                                                    <li><strong>Accessories</strong><span>8 inch Mortice Lock</span></li>
                                                    <li><strong>Ceiling</strong><span>Plastic emulsion plastic paint ( Make : ICI dulux / Asian / Berger or Equivalent )</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide specSlide">
                                    <div className="specDetails">
                                        <div className="spec-img"><img src="https://sayahomes.com/assets/images/saya-zion/specifications/master-bedroom.jpg" alt="Master Bedroom" /></div>
                                        <div className="inner">
                                            <div className="spec-title">
                                                <div className="img-fluid"><img src="https://sayahomes.com/assets/images/icons/bedroom.png" className="filter-dark" alt="Master Bedroom" /></div>
                                                <h6>Master Bedroom</h6>
                                            </div>
                                            <p>Elegantly crafted intimate space to make you feel right at home.</p>
                                            <div className="scroller">
                                                <ul className="list-inline list">
                                                    <li><strong>Internal Wall</strong><span>Blockwork / Brickwork, plastered,POP punning, Plastic emulsion plastic paint ( Make : ICI Dulux / Asian / Berger or Equivalent).</span></li>
                                                    <li><strong>Floor</strong><span>600x600 mm vitrified /Porclin tiles (± 5% variation in tile size).</span></li>
                                                    <li><strong>External Balcony Door</strong><span>UPVC door frame size : 55mm x 55mm. UPVC Two track Sliding Doors with 5 mm thick plain glass , sliding both sides.</span></li>
                                                    <li><strong>Door</strong><span>Door Masonry Opening :900mm ( w ) x 2400 mm ( h ). Door frame Meranti Wood. Door frame size: 115 mm x 60 mm section. Door frame ht.: 2400 mm.</span></li>
                                                    <li><strong>Flush Door size</strong><span>800 mm x 2350 mm and 32 mm thick both side laminated. Accessories 8 inch Mortice Lock.</span></li>
                                                    <li><strong>Ceiling</strong><span>Plastic emulsion plastic paint (Make : ICI dulux / Asian / Berger or Equivalent).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide specSlide">
                                    <div className="specDetails">
                                        <div className="spec-img"><img src="https://sayahomes.com/assets/images/saya-zion/specifications/kitchen.jpg" alt="Kitchen" /></div>
                                        <div className="inner">
                                            <div className="spec-title">
                                                <div className="img-fluid"><img src="https://sayahomes.com/assets/images/icons/kitchen.png" className="filter-dark" alt="Kitchen" /></div>
                                                <h6>Kitchen</h6>
                                            </div>
                                            <p>Designed to be the heart of the home.</p>
                                            <div className="scroller">
                                                <ul className="list-inline list">
                                                    <li><strong>Sink Size</strong><span>685.5MM X 508 MM(± 5%variation in size) Make : Lotus Single Bowl Stainless steel Sink.</span></li>
                                                    <li><strong>Internal Wall</strong><span>Blockwork/ Brickwork, plastered, POP punning, Plastic emulsion plastic paint, Ceramic tiles up to 2ft hight above working platform.</span></li>
                                                    <li><strong>Floor</strong><span>800x800 mm vitrified tiles (± 5%variation in tile size). Working platform : granite top ( R Black ).</span></li>
                                                    <li><strong>External Utility Balcony Door</strong><span>UPVC door frame size : 55mm x 55mm. UPVC</span></li>
                                                    <li><strong>Casement Door</strong><span>(850mm x 2400mm ) ( including 300mm high provision for ventilator).</span></li>
                                                    <li><strong>External Finish</strong><span>Texture paint ( Make : ICI dulux / Asian / Berger or Equivalent ) Ceiling : Plastic emulsion plastic paint</span></li>
                                                    <li><strong>Ceiling</strong><span>Plastic emulsion plastic paint.</span></li>
                                                    <li><strong>RO</strong><span>RO water purifier (whirlpool, livpure, kent or equivalent 7.5 to 8 ltr).</span></li>
                                                    <li><strong>Modular Cabinet</strong><span>Plyboard with laminate fitted with standard fittings"hettich hinges" (As displayed ).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide specSlide">
                                    <div className="specDetails">
                                        <div className="spec-img"><img src="https://sayahomes.com/assets/images/saya-zion/specifications/woodwork.jpg" alt="woodwork" /></div>
                                        <div className="inner">
                                            <div className="spec-title">
                                                <div className="img-fluid"><img src="https://sayahomes.com/assets/images/icons/wood.svg" className="filter-dark" alt="woodwork" /></div>
                                                <h6>Woodwork</h6>
                                            </div>
                                            <p>Interiors crafted with rich woodwork for an elegant finish.</p>
                                            <div className="scroller">
                                                <ul className="list-inline list">
                                                    <li><span>Ply board / MDF 18 mm sunmica cupboards in bedroom. Accessories: Hinges hettich or Equivalent. 305 mm high Handle ,Telescope channel 457.20 mm</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide specSlide">
                                    <div className="specDetails">
                                        <div className="spec-img"><img src="https://sayahomes.com/assets/images/saya-zion/specifications/bathroom.jpg" alt="Bathroom" /></div>
                                        <div className="inner">
                                            <div className="spec-title">
                                                <div className="img-fluid"><img src="https://sayahomes.com/assets/images/icons/master-toilet.png" className="filter-dark" alt="Bathroom" /></div>
                                                <h6>Bathroom</h6>
                                            </div>
                                            <p>A perfect place built for you to relax and unwind.</p>
                                            <div className="scroller">
                                                <ul className="list-inline list">
                                                    <li><strong>Door </strong><span> Door Masonry Opening :750mm ( w ) x 2400 mm ( h ). Door frame Meranti Wood. Door frame size : 115 mm x 60 mm section. Door frame ht. : 2400 mm. Flush Door size 650 mm x 2350 mm and 32 mm thick. Laminated one side and internal side finish with enamel paint. Accessories Tower bolt 150 mm, handle with latch.</span></li>
                                                    <li><strong>Ventilator </strong><span> Masonry opening : 400mm x750 mm. Ventilator : UPVC 300 mm openable with 5 mm thick plain glass and 300 mm for provision of exhaust.</span></li>
                                                    <li><strong>Internal Wall</strong><span>Wall tiles (300x450) upto 2400 mm.</span></li>
                                                    <li><strong>Floor</strong><span>Anti skid Ceramic Tiles (300x300) (± 5% variation in tile size).</span></li>
                                                    <li><strong>Ceiling</strong><span>Gypsum Grid False ceiling above 2400 mm. ht.</span></li>
                                                    <li><strong>Fittings</strong><span>CP Fittings : Jaguar or Equivalent. China ware : Varmora or equivalent. Wall mixture : in one wash room. Wash Basin : Granite counter in one wash room. EWC (European water closet ) : all wash room. Floor Jali : Stainless Steel.</span></li>
                                                </ul>
                                            </div>
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
                                    <li><button
                                        className={`galBtn ${activeTab === 'video' ? 'galBtnActive' : ''}`}
                                        onClick={() => handleButtonClick('video')}
                                    >Videos</button></li>
                                    {/* <li> <button
                                        className={`galBtn ${activeTab === 'location' ? 'galBtnActive' : ''}`}
                                        onClick={() => handleButtonClick('location')}
                                    >Location Map</button></li> */}

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
                                            <a href="https://sayahomes.com/assets/images/saya-zion/gallery/Master-Bedroom-zion.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zion/gallery/Master-Bedroom-zion.jpg" alt="Saya Zion" />
                                            </a>
                                        </div>
                                        <div className="swiper-slide gallSlide">
                                            <a href="https://sayahomes.com/assets/images/saya-zion/gallery/Bedroom-zion.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zion/gallery/Bedroom-zion.jpg" alt="Saya Zion" />
                                            </a>
                                        </div>
                                        <div className="swiper-slide gallSlide">
                                            <a href="https://sayahomes.com/assets/images/saya-zion/gallery/Washroom-zion.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zion/gallery/Washroom-zion.jpg" alt="Saya Zion" />
                                            </a>
                                        </div>
                                        <div className="swiper-slide gallSlide">
                                            <a href="https://sayahomes.com/assets/images/saya-zion/gallery/woodwork-zion.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zion/gallery/woodwork-zion.jpg" alt="Saya Zion" />
                                            </a>
                                        </div>
                                        <div className="swiper-slide gallSlide">
                                            <a href="https://sayahomes.com/assets/images/saya-zion/gallery/Kitchen-zion.jpg" data-magnify="gal" data-group="ext" data-caption="Image Gallery">
                                                <img src="https://sayahomes.com/assets/images/saya-zion/gallery/Kitchen-zion.jpg" alt="Saya Zion" />
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
                                <iframe width="100%" height="515" src="https://www.youtube.com/embed/7TTFflCV6f0?si=xbzdpZ4R2mGNu53Y?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            {/* <div
                                className={`galleryContainer ${activeTab === 'location' ? 'show' : 'hide'} w-100`}
                                id="galleryContainer-location"
                            >
                                <div className="img-fluid">
                                    <a href="https://sayahomes.com/assets/images/saya-zion/saya-zion-location.jpg" data-magnify="sp" data-group="sp" data-caption="Location Map"><img src="https://sayahomes.com/assets/images/saya-zion/saya-zion-location.jpg" alt="Location Map" /></a>
                                </div>
                            </div> */}
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.2343719093205!2d77.423869!3d28.611259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccba793af9fef9b8!2sSaya%20Zion!5e0!3m2!1sen!2sin!4v1654068470470!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                                        <p className="mt-3"><b><i className="fa-solid fa-map-marker-alt"></i> E Block, Gaur City 1, Sector 4, Greater Noida, Uttar Pradesh 201318
                                        </b></p>
                                    </div>
                                    <div className="readmore"><a href="https://maps.app.goo.gl/bo6FrwpcZpfNmofr9" target="_blank">
                                        <span className="icon"><i className="fa-solid fa-map-marker-alt"></i></span>
                                        <span className="text">View Location Map</span>
                                        <span className="icon"><i className="fa-solid fa-map-marker-alt"></i></span>
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
                                                <a href="https://sayahomes.com/assets/images/awards/3.jpg" class="inner h-100" data-magnify="awards" data-group="awards" data-caption="Real Estate Commercial Project Of The Year - Saya Southx">
                                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/awards/th3.jpg" alt="Saya Homes" class="h-100 object-cover" title="" /></div>
                                                    <article>
                                                        <h5 class="news-title mt-4 text-truncate">Real Estate Commercial Project Of The Year - Saya Southx</h5>
                                                        <p class="mb-0">Times Business Awards, North 2024</p>
                                                    </article>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottomControls justify-content-lg-start px-lg-0">
                                            <div class="swiper-button-prev solid" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-d95f13eb81f5102d1"></div>
                                            <div class="swiper-button-next solid" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d95f13eb81f5102d1"></div>
                                        </div>
                                    </div>
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

export default SayaZion