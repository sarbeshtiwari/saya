import React from 'react';
import Counter from './counter'; // Adjust the path as needed

function Overview() {
    return (
        <div>
            <div className="w-100 padding overflow-hidden position-relative hm-overview-container animate-section1">
                <div className="container-lg">
                    <div className="row gap-row mb-5">
                        <div className="col-lg-7 hm-overviewBox">
                            <div className="inner pr-lg-4">
                                <div className="heading">
                                    <h2 className="text-serif">Saya Group, established 25 years ago, is a trailblazer in the real estate industry with a strong presence in the Delhi NCR region. Known for pioneering luxury residential.</h2>
                                    <hr />
                                    <p className="mb-0">Saya Group a portfolio of over 5.37 million sq. ft. of luxurious residential spaces and innovative commercial projects. This includes 2.37 million sq. ft. of high-street retail malls in Noida and Greater Noida West...<a href="#">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 hm-overview-img">
                            <img src="https://sayahomes.com/assets/images/overview-img2.webp" alt='' />
                        </div>
                    </div>
                    <div className="row gap-row">
                        <div className="col-lg-3 col-sm-6 hm-stats-box saya-stats-box">
                            <div className="inner h-100 d-flex flex-column justify-content-center">
                                <h3 className="text-serif"> <Counter end={2} duration={2000} isWholeNumber /> Decades of</h3>
                                <p className="mb-0">Delivering Excellence</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 hm-stats-box saya-stats-box">
                            <div className="inner h-100 d-flex flex-column justify-content-center">
                                <h3 className="text-serif"><Counter end={4000} duration={2000} isWholeNumber />+</h3>
                                <p className="mb-0">Happy Families</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 hm-stats-box saya-stats-box">
                            <div className="inner h-100 d-flex flex-column justify-content-center">
                                <h3 className="text-serif"> Over <Counter end={5.37} duration={2000} /></h3>
                                <p className="mb-0">Million Sq.Ft. Delivered (Residential)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 hm-stats-box saya-stats-box">
                            <div className="inner h-100 d-flex flex-column justify-content-center">
                                <h3 className="text-serif">Over  <Counter end={2.37} duration={2000} /></h3>
                                <p className="mb-0">Million Sq.Ft. Delivered (Commercial)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-icon"><img src="https://sayahomes.com/assets/images/logo-icon.svg" alt="Saya Homes" /></div>
        </div>
    );
}

export default Overview;
