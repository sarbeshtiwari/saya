import React, { useState, useRef } from 'react';
import Navbar from '../components/navbar';
import FooterAll from '../components/footer2';
import { Link } from 'react-router-dom';

function ConstructionUpdates() {
    const [modalData, setModalData] = useState({ title: '', src: '' });
    const iframeRef = useRef(null);

    const handleShowModal = (title, src) => {
        setModalData({ title, src });
    };

    const handleCloseModal = () => {
        setModalData({ title: '', src: '' });
        if (iframeRef.current) {
            iframeRef.current.src = '';
        }
    };

    return (
        <div>
            <Navbar />
            <div className="emptyBox"></div>
            <div className="pageTitle py-5 bg-orange w-100">
                <div className="container-lg">
                    <h1 className="display-4 mb-0">Construction Updates</h1>
                </div>
            </div>
            <div className="breadcrumbContainer">
                <div className="container-lg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Construction Updates</li>
                    </ol>
                </div>
            </div>
            <div className="w-100 padding position-relative">
                <div className="container-lg in-the-media">
                    <div className="inside-blogsArchive">
                        <div className="heading">
                            <h1 className="mb-0 text-serif text-orange">Construction Updates</h1>
                        </div>
                        <div className="row gap-row">
                        <div className="col-md-4 newsBox">
                                <div
                                    className="inner h-100"
                                    onClick={() => handleShowModal(
                                        'Saya Piazza Sep 2024 Construction Update: Rising to New Heights @11th Sep 2024',
                                        'https://www.youtube.com/embed/E6Mg-AH0ZGQ?rel=0&autoplay=1'
                                    )}
                                    data-toggle="modal"
                                    data-target="#video-Modal"
                                >
                                    <div className="img-fluid mt-0 position-relative">
                                        <img src="https://sayahomes.com/assets/images/E6Mg-AH0ZGQ.jpg" alt="Saya Homes" className="h-100 object-cover" />
                                        <button className="playBtn"><i className="fa fa-play"></i></button>
                                    </div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Saya Piazza</h5>
                                        <div className="date justify-content-between">
                                            <small>September 2024</small>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-4 newsBox">
                                <div
                                    className="inner h-100"
                                    onClick={() => handleShowModal(
                                        'Saya South X Construction update: May 2024',
                                        'https://www.youtube.com/embed/4voQvRsj3k0?rel=0&autoplay=1'
                                    )}
                                    data-toggle="modal"
                                    data-target="#video-Modal"
                                >
                                    <div className="img-fluid mt-0 position-relative">
                                        <img src="https://sayahomes.com/assets/images/4voQvRsj3k0.jpg" alt="Saya Homes" className="h-100 object-cover" />
                                        <button className="playBtn"><i className="fa fa-play"></i></button>
                                    </div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Saya South X</h5>
                                        <div className="date justify-content-between">
                                            <small>May 2024</small>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-4 newsBox">
                                <div
                                    className="inner h-100"
                                    onClick={() => handleShowModal(
                                        'Saya Piazza Feb 2024 Construction Update: Rising to New Heights @25th Feb 2024',
                                        'https://www.youtube.com/embed/YZnDosx2HbQ?rel=0&autoplay=1'
                                    )}
                                    data-toggle="modal"
                                    data-target="#video-Modal"
                                >
                                    <div className="img-fluid mt-0 position-relative">
                                        <img src="https://sayahomes.com/assets/images/YZnDosx2HbQ.jpg" alt="Saya Homes" className="h-100 object-cover" />
                                        <button className="playBtn"><i className="fa fa-play"></i></button>
                                    </div>
                                    <article>
                                        <h5 className="news-title mt-4 text-truncate">Saya Piazza</h5>
                                        <div className="date justify-content-between">
                                            <small>February 2024</small>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal testim-modal fade" id="video-Modal" tabIndex="-1" role="dialog" aria-labelledby="sapnaModalTitle" aria-hidden="true" style={{ display: modalData.src ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content border-0 shadow rounded-0">
                        <button type="button" className="close videoClose" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <h5 className="modal-title">{modalData.title}</h5>
                            <iframe
                                ref={iframeRef}
                                width="100%"
                                height="315"
                                src={modalData.src}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <FooterAll />
        </div >
    );
}

export default ConstructionUpdates;
