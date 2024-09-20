import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function CustomerRelationship() {
    useEffect(() => {
    var swiper = new Swiper(".relation-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        // centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
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
            1600: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}, []);
  return (
    <div>
          <div class="w-100 padding bg-orange position-relative animate-section5" id="customer-relationship">
          <a name="customer"></a>
                <div class="container-lg">
                    <div class="heading">
                        <h6 class="text-white">Customer Relationship</h6>
                        <h2 class="h1 text-serif mb-0">With You. For You. All The Way.</h2>
                    </div>
                    <div class="swiper relation-slider">
                        <div class="swiper-wrapper align-items-center">
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Generation-of-KYC.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Generation of KYC</h5>
                                        <p class="mb-0">Once the sales is closed on agreed terms & conditions, the booking booklet along with the complete KYC are received by the CRM Department.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Welcoming-The-Customer.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Welcoming The Customer</h5>
                                        <p class="mb-0">Department sends a welcome mail and a verification call to the respective allottee to avoid any discrepancy at the later stage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Booking-Entry.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Booking The Entry</h5>
                                        <p class="mb-0">Subsequently, CRM uses the latest secured data entry software for booking the entry.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Builder-Buyer-Agreement.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Builder Buyer Agreement</h5>
                                        <p class="mb-0">After the receipt of the initial booking amount, the builder buyer agreement is drafted & executed which is strictly as per the RERA prescribed model agreement.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Assistance-in-home-loan.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Assistance in funding</h5>
                                        <p class="mb-0">If the customer requires assistance in a home loan/retail funding facility from a bank/financial institution, our team connects the customer with the concerned bank/financial institution so that they can get the proper guidance regarding their funding.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Dispatching-the-demand-letters.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Dispatching the Demand Letters</h5>
                                        <p class="mb-0">The demand letters are dispatched as per the payment plan written in the agreement.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Timely-updates.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Timely Updates</h5>
                                        <p class="mb-0">Construction schedule and its updates are timely shared with the customers.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/On-time-payments.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">On Time Payments</h5>
                                        <p class="mb-0">An important parameter to ensure that your homes or assets are created well in time. It is a constant endeavour at Saya that timely intimation is sent for dues.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Offer-of-possession.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Offer of Possession</h5>
                                        <p class="mb-0">The offer of possession is dispatched and 'No Dues 'certificate is issued by the accounts department.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Co-ordination-for-registration.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Co-ordination for Registration</h5>
                                        <p class="mb-0">Coordination with the advocate for payment of stamp duty by the allottees till the registration of sale deeds.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Transparency.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Transparency</h5>
                                        <p class="mb-0">CRM Team mails the whole process to the customers to maintain the transparency and to make the entire process hassle-free.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relationBox">
                                <div class="inner">
                                    <div class="img-fluid"><img src="https://sayahomes.com/assets/images/icons/Handover.svg" alt='' /></div>
                                    <div class="relation-text">
                                        <h5 class="text-serif">Handover</h5>
                                        <p class="mb-0">Customers that are done with the registration process, can proceed with handover formalities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottomControls">
                            <div class="swiper-button-prev solid"></div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next solid"></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CustomerRelationship