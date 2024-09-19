import React, { useState } from 'react';
import axios from 'axios';

function HelpYou() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({
        modalType: '',
        pageName: '',
        projectName: '',
        brochure: '',
        brochureUrl: ''
    });

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleShowModal = (event) => {
        event.preventDefault();
        const modalType = event.currentTarget.getAttribute('data-modaltype');
        const pageName = event.currentTarget.getAttribute('data-pagename');
        const projectName = event.currentTarget.getAttribute('data-projectname');
        const brochure = event.currentTarget.getAttribute('data-brochure');
        const brochureUrl = event.currentTarget.getAttribute('data-brochureurl') || '';

        setModalData({
            modalType,
            pageName,
            projectName,
            brochure,
            brochureUrl
        });

        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newcreated = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const dataToSend = {
            ...formData,
            projects: modalData.projectName,
            source: modalData.modalType,
            medium: modalData.pageName,
            campaign: modalData.brochure,
            created: newcreated
        };

        try {
            const response = await axios.post('http://localhost:8080/projectQuery/upload', dataToSend);
            console.log('Form submitted successfully:', response.data);
            setSuccessMessage('Your enquiry has been submitted successfully.');
            setFormData({ name: '', mobile: '', email: '', message: '' });
            handleCloseModal();
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('There was an error submitting your enquiry. Please try again.');
        }
    };

    return (
        <div>
            <section className="w-100">
                <a name="forms"></a>
                <div id="forms" className="w-100 botpadding bg-secondary-light">
                    <div className="container-lg">
                        <div className="formBtnContainer">
                            <div className="formText">
                                <div className="heading mx-auto text-center">
                                    <h2 className="text-serif text-white mb-0">We’re Glad to Help</h2>
                                </div>
                                <p>We are here to help you 24*7. From arranging a callback to booking your dream home, we are equipped with every kind of Support.</p>
                            </div>
                            <div className="readmore mx-auto w-fit d-flex justify-content-center">
                                <a
                                    href="#modalforms"
                                    data-toggle="modal"
                                    data-modaltype="Schedule a Call"
                                    data-pagename="saya-gold-avenue.php"
                                    data-projectname="Saya Gold Avenue"
                                    data-brochure="brochure_url_here"
                                    data-brochureurl="brochure_url_here"
                                    onClick={handleShowModal}
                                    className="button secondary justify-content-center"
                                >
                                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                    <span className="text">Schedule a Call</span>
                                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                </a>
                                <a
                                    href="#modalforms"
                                    data-toggle="modal"
                                    data-modaltype="Plan Site Visit"
                                    data-pagename="saya-gold-avenue.php"
                                    data-projectname="Saya Gold Avenue"
                                    data-brochure="brochure_url_here"
                                    data-brochureurl="brochure_url_here"
                                    onClick={handleShowModal}
                                    className="button secondary justify-content-center"
                                >
                                    <span className="icon"><i className="fa-solid fa-car"></i></span>
                                    <span className="text">Plan Site Visit</span>
                                    <span className="icon"><i className="fa-solid fa-car"></i></span>
                                </a>
                                <a
                                    href="#modalforms"
                                    data-toggle="modal"
                                    data-modaltype="Enquire Now"
                                    data-pagename="saya-gold-avenue.php"
                                    data-projectname="Saya Gold Avenue"
                                    data-brochure="brochure_url_here"
                                    data-brochureurl="brochure_url_here"
                                    onClick={handleShowModal}
                                    className="button secondary justify-content-center"
                                >
                                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                    <span className="text">Enquire Now</span>
                                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="modal fade show" id="modalforms" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                <span aria-hidden="true" className="ion-ios-close">×</span>
                            </button>
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-sm-8">
                                    <div className="modal-body">
                                        <h5 className="mb-3">If you have any query, fill the form.</h5>
                                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                        <form className="modal-form" id="modalform" onSubmit={handleSubmit}>
                                            <div className="form-row">
                                                <div className="col-md-12 form-group">
                                                    <label className="customCursor" htmlFor="mname">Name *</label>
                                                    <input type="text" className="form-control" id="mname" name="name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label className="customCursor" htmlFor="mmobile">Mobile *</label>
                                                    <input type="tel" className="form-control" name="mobile" id="mmobile" value={formData.mobile} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label className="customCursor" htmlFor="memail">Email *</label>
                                                    <input type="email" className="form-control" name="email" id="memail" value={formData.email} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label className="customCursor" htmlFor="mquery">Query</label>
                                                    <textarea className="form-control" name="message" id="mmessage" data-gramm="false" value={formData.message} onChange={handleChange}></textarea>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <p className="mb-0"><small><input type="checkbox" required /> I authorise Saya Group and its representatives to Call, SMS, Email or WhatsApp me about its projects and offers. This consent overrides any registration for DNC / NDNC.</small></p>
                                                </div>
                                                <div className="col-md-12 formFooter readmore">
                                                    <input type="hidden" name="mmodal" value="active" />
                                                    <input type="hidden" name="mpagename" id="mpagename" value={modalData.pageName} />
                                                    <input type="hidden" name="projectName" id="projectName" value={modalData.projectName} />
                                                    <input type="hidden" name="mbrochure" id="mbrochure" value={modalData.brochure} />
                                                    <input type="hidden" name="brouchureurl" id="brouchureurl" value={modalData.brochureUrl} />
                                                    <button type="submit" className="button solid" id="modalsubmit"><span className="text">Submit</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HelpYou;
