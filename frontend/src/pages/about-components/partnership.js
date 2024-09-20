import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function Partnership() {
    useEffect(() => {
    var swiper1 = new Swiper(".brand-slider", {
        slidesPerView: 2,
        spaceBetween: 10,
        // centeredSlides: true,
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
                slidesPerView: 4,
                grid: {
                    rows: 2,
                },
            },
        }
    });
    const buttons = document.querySelectorAll('.partnersBtn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                document.querySelector('.partnersBtn.active').classList.remove('active');
                this.classList.add('active');

                const containers = document.querySelectorAll('.partners-container');
                containers.forEach(container => container.style.display = 'none');

                const targetContainer = document.getElementById(`partners-${this.dataset.target}`);
                if (targetContainer) {
                    targetContainer.style.display = 'block';
                }
            });
        });

        // Cleanup event listeners on unmount
        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', function() {});
            });
        };
}, []);

  return (
    <div>
         <div class="w-100 padding position-relative animate-section5" id="partnerships">
         <a name="partners"></a>
                <div class="container-lg">
                    <div class="headingContainer d-flex justify-content-between align-items-center">
                        <div class="heading mb-0">
                            <h6 class="text-orange">Partnerships</h6>
                            <h2 class="h1 text-serif mb-0">Powering Through Partnerships</h2>
                        </div>
                        <div class="viewmore d-flex">
                            <button class="button stroke partnersBtn active" data-target="finance">Finance</button>
                            <button class="button stroke partnersBtn" data-target="media">Media Partners</button>
                        </div>
                    </div>
                    <div id="partners-finance" class="partners-container show">
                        <div class="row gap-row">
                            <div class="col-lg-5">
                                <div class="inner pr-md-4">
                                    <p class="mb-0">As a result of its remarkable performance record, Saya enjoys an exceptionally strong reputation with the leading banks and investors that ensure access to the capital necessary to execute on any given investment strategy. We pride ourselves on our solid and long-term alliances with many of the respected financial institutions. These successful relationships are a testament to Saya’s status as a premier real estate developer.</p>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="swiper brand-slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Axis-bank.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Hdfc-ltd.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Pnb-housing-finance.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Icici-bank-ltd.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Aditya-Birla-housing-Finanacer-ltd.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Yes-bank-ltd.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Indiabulls-housing.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Piramal-housing.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Union-bank.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Bank-of-maharashtra.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Indian-bank.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Bank-of-india.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Fedral-bank.svg" class="w-100" /></div></div>
                                        <div class="swiper-slide brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Central-bank-of-india.svg" class="w-100" /></div></div>
                                    </div>
                                    <div class="swiper-button-prev solid"></div>
                                    <div class="swiper-button-next solid"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="partners-media" class="partners-container">
                        <div class="row gap-row">
                            <div class="col-lg-5 col-md-6">
                                <div class="inner pr-md-4">
                                    <p class="mb-0">Saya, a name synonymous with trust and excellence. Across print and digital media, we have cemented our presence as the most ethical real estate builder that continues to deliver on its promises. Mr.Vikas Bhasin, the Chief Managing director of Saya Group has been vocal images the latest developments in real estate. In fact, his responses have been quoted in the most prestigious print & digital newspapers of Delhi-NCR.</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6">
                                <div class>
                                    <div class="form-row gap-form-row">
                                        <div class="col-md-3 brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Amar-Ujala.png" class="w-100" /></div></div>
                                        <div class="col-md-3 brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/Dainik-Jagran.png" class="w-100" /></div></div>
                                        <div class="col-md-3 brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/HT-Media.png" class="w-100" /></div></div>
                                        <div class="col-md-3 brandLogo"><div class="img-fluid"><img src="https://sayahomes.com/assets/images/partners/THE-TIMES-OF-INDIA.png" class="w-100" /></div></div>
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

export default Partnership