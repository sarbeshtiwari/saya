import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function MeetOurFounders() {
    useEffect(() => {
    var founder = new Swiper(".founder-slider", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}, []);
  return (
    <div>
         <div class="w-100 padding position-relative animate-section5" id="founder">
         <a name="meetourfounder"></a>
                    <div class="container-lg">
                        <div class="heading">
                            <h2 class="h1 text-serif mb-0">Meet Our Founder</h2>
                        </div>
                        <div class="chairmanContainer">
                            <div class="row no-gutters">
                                <div class="col-md-6 chairman-image">
                                    <div class="img-fluid h-100"><img src="https://sayahomes.com/assets/images/Chairman-Sir2.jpg" class="h-100 object-cover" alt /></div>
                                </div>
                                <div class="col-md-6 chairman-textarea">
                                    <div class="inner">
                                        <div class="swiper founder-slider">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="heading">
                                                        <h3 class="text-serif">Founder's Profile</h3>
                                                    </div>
                                                    <div class="chairman-text scroller">
                                                        <p><b>Mr. Vikas Bhasin</b>, the esteemed <b>Chairman and Managing Director</b> of Saya Group, exemplifies visionary leadership and unmatched dedication in the field of real estate development. With a remarkable career spanning more than twenty years, his relentless pursuit of excellence has propelled Saya Group to the forefront of the industry.</p>

                                                        <p>Mr. Bhasin was born in Delhi and pursued his education at one of the most prestigious schools in the city before venturing into real estate. In 1996, he initiated his journey as a first-generation entrepreneur, establishing Saya Homes and laying the foundation of his career in the industry.</p>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="heading">
                                                        <h3 class="text-serif">Early Life and Career</h3>
                                                    </div>
                                                    <div class="chairman-text scroller">
                                                        <p>His leadership ethos embodies a profound belief in the power of teamwork, where every member contributes to realising the collective vision of creating exceptional projects for discerning customers. Under his guidance, Saya Group has emerged as a trailblazing force, distinguished by its unwavering commitment to punctuality and uncompromising standards of craftsmanship.</p>
                                                        <p>Led by Mr. Bhasin's vision, Saya Homes has emerged in the dynamic real estate landscape in 1996. Since then, the company has made its mark with numerous residential and commercial projects across Delhi NCR with a vast portfolio encompassing over 8 million Sq.Ft. of luxurious residential and commercial spaces.</p>
                                                        <p>He is one of the visionaries in building the landscape of Indirapuram and is held in high regard by his customers with whom he started his journey in real estate. They continue to invest in his marquee projects and value their association with Saya.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bottomControls justify-content-lg-start px-0">
                                                <div class="swiper-button-prev solid"></div>
                                                <div class="swiper-button-next solid"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default MeetOurFounders