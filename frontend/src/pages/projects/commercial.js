import React from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import { Link } from 'react-router-dom'

function Commercial() {
    return (
        <div>
            <Navbar />
            <div>
                <div className="emptyBox"></div>
                <div className="pageTitle py-5 bg-orange w-100">
                    <div className="container-lg">
                        <h1 className="display-4 mb-0">Commercial</h1>
                    </div>
                </div>
                <div className="breadcrumbContainer">
                    <div className="container-lg">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Commercial</li>
                        </ol>
                    </div>
                </div>
                <div className="w-100 padding position-relative">
                    <div className="container-lg">
                        <div className="row gap-row">
                            <div className="col-md-4 col-sm-6 hm-featured">
                                <Link to='/saya-southX' className="inner">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/saya-south-x-th.jpg" alt="Saya South X" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                    <div className="text">
                                        <span className="line"></span>
                                        <div className="projectBoxName">
                                            <h6>Saya South X</h6>
                                            {/* <p className="mb-0">Mix Used retail destination, Ek Murti Chowk, Greater Noida West (Nearing Possession)</p> */}
                                            <ul className="list-inline d-flex">
                                                <li>Commercial</li>
                                                <li>Gr. Noida (W)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 hm-featured">
                                <Link to='/saya-biztop' className="inner">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/biztop-th.jpg" alt="Biztop" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                    <div className="text">
                                        <span className="line"></span>
                                        <div className="projectBoxName">
                                            <h6>Biztop</h6>
                                            {/* <p className="mb-0">Premium & fully furnished business suites that cater to the elite corporate className at Ek Murti Chowk, Gr. Noida (W). </p> */}
                                            <ul className="list-inline d-flex">
                                                <li>Commercial</li>
                                                <li>Gr. Noida (W)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 hm-featured">
                                <Link to='/saya-piazza' className="inner">
                                    <div className="img-fluid"><img src="https://sayahomes.com/assets/images/saya-piazza.jpg" alt="Saya Piazza" /><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                                    <div className="text">
                                        <span className="line"></span>
                                        <div className="projectBoxName">
                                            <h6>Saya Piazza</h6>
                                            {/* <p className="mb-0">Blockbuster Shopping destination, Sector 131, Jaypee Wish Town Noida. (Nearing Possession)</p> */}
                                            <ul className="list-inline d-flex">
                                                <li>Commercial</li>
                                                <li>Noida Expressway</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-icon"><img src="https://sayahomes.com/assets/images/logo-icon.svg" alt="Saya Homes" /></div>
            </div>
            <FooterAll />
        </div>
    )
}

export default Commercial