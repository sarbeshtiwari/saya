import React from 'react'
import FooterAll from '../../components/footer2'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div>
            <Navbar />
            <div class="emptyBox"></div>
            <div class="pageTitle py-5 bg-dark w-100">
                <div class="container-lg">
                    <h1 class="display-4 mb-0">Projects</h1>
                </div>
            </div>
            <div class="breadcrumbContainer">
                <div class="container-lg">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to='/sayahomes-react'>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Projects</li>
                    </ol>
                </div>
            </div>
            <div class="w-100 padding position-relative">
                <div class="container-lg">
                    <div class="row gap-row">
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-gold-avenue' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/gold-avenue/overview-image1.jpg" alt="Saya Gold Avenue" /><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya Gold Avenue</h6>
                                        {/* <p class="mb-0">2/3/4 BHK luxury homes designed for the elite class, reflecting exclusivity and sophistication.</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-zion' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zion.jpg" alt="Saya Zion" /><i class="fa-solid fa-arrow-up-right-from-square" ></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya Zion</h6>
                                        {/* <p class="mb-0">Zion perfectly captures the grandeur of its expansive green surroundings in Greater Noida West.</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-zenith' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-zenith.jpg" alt="Saya Zenith" /><i class="fa-solid fa-arrow-up-right-from-square" ></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya Zenith</h6>
                                        {/* <p class="mb-0">Saya brings to you Zenith, apartments artfully curated for the discerning you.</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-desire-residency' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-desire-residency.jpg" alt="Saya Desire Residency" /><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya Desire Residency</h6>
                                        {/* <p class="mb-0">At the heart of Indirapuram, Saya brings to you Desire Residency.</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Residential</li>
                                            <li>Ghaziabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-southX' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/south-x/saya-southx.webp" alt="Saya South X" /><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya South X</h6>
                                        {/* <p class="mb-0">Mix Used retail destination, Ek Murti Chowk, Greater Noida West (Nearing Possession)</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Commercial</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-biztop' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/biztop-th.jpg" alt="Biztop" /><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Biztop</h6>
                                        {/* <p class="mb-0">Premium &amp; fully furnished business suites that cater to the elite corporate class.</p> */}
                                        <ul class="list-inline d-flex">
                                            <li>Commercial</li>
                                            <li>Gr. Noida (W)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 hm-featured">
                            <Link to='/sayahomes-react/saya-piazza' class="inner">
                                <div class="img-fluid"><img src="https://ecis.in/sayahomes-react/assets/images/saya-piazza.jpg" alt="Saya Piazza" /><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                                <div class="text">
                                    <span class="line"></span>
                                    <div class="projectBoxName">
                                        <h6>Saya Piazza</h6>
                                        {/* <p class="mb-0">Blockbuster Shopping destination, Sector 131, Jaypee Wish Town Noida. (Nearing Possession)</p> */}
                                        <ul class="list-inline d-flex">
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
            <FooterAll />
        </div>

    )
}

export default Projects