import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [closingDropdown, setClosingDropdown] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setClosing(false);
                document.body.classList.remove('overflow-hidden');
            }, 500);
        } else {
            setMenuOpen(true);
            document.body.classList.add('overflow-hidden');
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const handleMenuItemClick = () => {
            setMenuOpen(false);
            setActiveDropdown(null);
            document.body.classList.remove('overflow-hidden');
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`header ${menuOpen ? 'notfixed' : ''} ${isFixed ? 'fixed' : ''}`}>
                <div className="container-lg mainHeader">
                    <div className="logo">
                        <Link to='/home'><img src="https://ecis.in/sayahomes-react/assets/images/logo5.svg" alt="Saya Homes" /></Link>
                    </div>
                    <div className="readmore mt-0 w-auto">
                        <button
                            role="button"
                            className={`button menuBtn ${menuOpen ? 'closeMenuBtn' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                            <span className="text">{menuOpen ? 'Close' : 'Menu'}</span>
                            <span className="icon"><i className="fa fa-bars"></i></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mbMenuContainer ${menuOpen ? 'active' : ''} ${closing ? 'closing' : ''}`} style={{ display: menuOpen || closing ? 'block' : 'none' }}>
                <div className="mbMenu scroller">
                    <ul className="list-inline">
                        <li><Link to="/home">Home</Link></li>
                        <li className={`hasChild ${activeDropdown === 0 ? 'active' : ''}`}>
                            <a href="javascript:;" onClick={() => toggleDropdown(0)}>About Us <i className="fa fa-plus"></i></a>
                            <div className="dropdown" style={{ display: activeDropdown === 0 ? 'block' : 'none' }}>
                                <ul className="list-inline">
                                    <li><Link to='/about-us' onClick={handleMenuItemClick}>Overview</Link></li>
                                    <li><a href="#visionmission" onClick={handleMenuItemClick}>Vision & Mission</a></li>
                                    <li><a href="#meetourfounder" onClick={handleMenuItemClick}>Meet Our Founder</a></li>
                                    <li><a href="#awards" onClick={handleMenuItemClick}>Awards & Recognition</a></li>
                                    <li><a href="#customer" onClick={handleMenuItemClick}>Customer Relationship</a></li>
                                    <li><a href="#partners" onClick={handleMenuItemClick}>Partnerships</a></li>
                                    <li><a href="#appreciation" onClick={handleMenuItemClick}>Appreciation Letter</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`hasChild ${activeDropdown === 1 ? 'active' : ''}`}>
                            <a href="javascript:;" onClick={() => toggleDropdown(1)}>Projects <i className="fa fa-plus"></i></a>
                            <div className="dropdown" style={{ display: activeDropdown === 1 ? 'block' : 'none' }}>
                                <ul className="list-inline">
                                    <li><Link to='/residential' onClick={handleMenuItemClick}>Residential</Link></li>
                                    <li><Link to='/commericial' onClick={handleMenuItemClick}>Commercial</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`hasChild ${activeDropdown === 2 ? 'active' : ''}`}>
                            <a href="javascript:;" onClick={() => toggleDropdown(2)}>Media <i className="fa fa-plus"></i></a>
                            <div className="dropdown" style={{ display: activeDropdown === 2 ? 'block' : 'none' }}>
                                <ul className="list-inline">
                                    <li><Link to='/in-the-media' onClick={handleMenuItemClick}>In the Media</Link></li>
                                    <li><Link to ='/events' onClick={handleMenuItemClick}>Events</Link></li>
                                    <li><Link to ='/media-blogs' onClick={handleMenuItemClick}>Blogs</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to='/csr' onClick={handleMenuItemClick}>CSR</Link></li>
                        <li><Link to='/construction-updates' onClick={handleMenuItemClick}>Construction Updates</Link></li>
                        <li><Link to='/customer-supports' onClick={handleMenuItemClick}>Customer Support</Link></li>
                        <li><Link to ='/careers' onClick={handleMenuItemClick}>Careers</Link></li>
                        <li><Link to='/contact-us' onClick={handleMenuItemClick}>Contact Us</Link></li>
                    </ul>
                    <div className="header-bottom w-100">
                        <ul className="list-inline socialBtn flex-row">
                            <li><a href="https://www.facebook.com/sayahomesofficial" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/sayahomes/" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCzicWlJx_HQtk4llMO8mMpw" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title="YouTube"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/saya-homes" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
