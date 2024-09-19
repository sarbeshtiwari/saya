import React from 'react';
import Navbar from '../../components/navbar';
import FooterAll from '../../components/footer2';
import { Link } from 'react-router-dom';

function Residentials() {
    return (
        <>
        <Navbar />
            <div className="emptyBox"></div>
            <div className="pageTitle py-5 bg-orange w-100">
                <div className="container-lg">
                    <h1 className="display-4 mb-0">Residential</h1>
                </div>
            </div>
            <div className="breadcrumbContainer">
                <div className="container-lg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/home'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Residential</li>
                    </ol>
                </div>
            </div>
            <div className="w-100 padding position-relative">
                <div className="container-lg">
                    <div className="row gap-row">
                        <div className="col-md-4 col-sm-6 hm-featured">
                            <Link to='/saya-gold-avenue' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/overview-image1.jpg" alt="Saya Gold Avenue" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Gold Avenue</h6>
                                        {/* <p className="mb-0">2/3/4 BHK luxury homes designed for the elite className, reflecting exclusivity and sophistication.</p> */}
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 hm-featured">
                            <Link to='/saya-zion' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zion.jpg" alt="Saya Zion" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Zion</h6>
                                        {/* <p className="mb-0">Zion perfectly captures the grandeur of its expansive green surroundings in Greater Noida West.</p> */}
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 hm-featured">
                            <Link to='/saya-zenith' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zenith.jpg" alt="Saya Zenith" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Zenith</h6>
                                        {/* <p className="mb-0">Saya brings to you Zenith, apartments artfully curated for the discerning you.</p> */}
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 hm-featured">
                            <Link to='/saya-desire-residency' className="inner">
                                <div className="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency.jpg" alt="Saya Desire Residency" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div className="text">
                                    <span className="line"></span>
                                    <div className="projectBoxName">
                                        <h6>Saya Desire Residency</h6>
                                        {/* <p className="mb-0">At the heart of Indirapuram, Saya brings to you Desire Residency.</p> */}
                                        <ul className="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-icon"><img src="./images/logo-icon.svg" alt="Saya Homes" /></div>

            <FooterAll />
        </>
    );
}

export default Residentials;
