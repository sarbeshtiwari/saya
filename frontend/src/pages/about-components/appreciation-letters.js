import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function AppreciationLetter() {
    useEffect(() => {
    var swiper2 = new Swiper(".appreciation-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            412: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        }
    });
}, []);
  return (
    <div>
          <div class="w-100 padding bg-orange position-relative animate-section6" id="appreciation-letter">
          <a name="appreciation"></a>
                <div class="container-lg">
                    <div class="heading">
                        <h6 class="text-white">Appreciation Letter</h6>
                        <h2 class="h1 text-serif mb-0">Quality Acknowledgements</h2>
                    </div>
                    <div class="row gap-row">
                        <div class="col-lg-9 appreciation-video">
                            <video  src="https://sayahomes.com/assets/images/videos/appreciation.mp4" autoPlay loop muted playsInline class="h-100 bg-orange">
                            </video>
                        </div>
                        <div class="col-lg-3 apprecial-letter-box">
                            <div class="swiper appreciation-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide appreciation-slide newsBox">
                                        <a href="https://sayahomes.com/assets/images/appreciation-letters/Indian-Bank.jpg" class="inner h-10" data-magnify="magnify" data-group="appre" data-caption="Indian Bank">
                                            <div class="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/appreciation-letters/Indian-Bank.jpg" alt="Saya Homes" class="h-100 object-cover" /></div>
                                            <article>
                                                <h5 class="news-title mt-4">Indian Bank</h5>
                                            </article>
                                        </a>
                                    </div>
                                    <div class="swiper-slide appreciation-slide newsBox">
                                        <a href="https://sayahomes.com/assets/images/appreciation-letters/Canara-Bank.jpg" class="inner h-10" data-magnify="magnify" data-group="appre" data-caption="Canara Bank">
                                            <div class="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/appreciation-letters/Canara-Bank.jpg" alt="Saya Homes" class="h-100 object-cover" /></div>
                                            <article>
                                                <h5 class="news-title mt-4">Canara Bank</h5>
                                            </article>
                                        </a>
                                    </div>
                                    <div class="swiper-slide appreciation-slide newsBox">
                                        <a href="https://sayahomes.com/assets/images/appreciation-letters/Union-Bank.jpg" class="inner h-10" data-magnify="magnify" data-group="appre" data-caption="Union Bank">
                                            <div class="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/appreciation-letters/Union-Bank.jpg" alt="Saya Homes" class="h-100 object-cover" /></div>
                                            <article>
                                                <h5 class="news-title mt-4">Union Bank</h5>
                                            </article>
                                        </a>
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
  )
}

export default AppreciationLetter