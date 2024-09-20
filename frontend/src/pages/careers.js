import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import FooterAll from '../components/footer2'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Careers() {
    const [applyWrapperVisible, setApplyWrapperVisible] = useState(false);
    const [jobDetails, setJobDetails] = useState({ experience: '', jobPosition: '' });

    const applyNow = (funArea, jobRole) => {
        console.log(funArea);
        console.log(jobRole);
        setJobDetails({ experience: funArea, jobPosition: jobRole });
        setApplyWrapperVisible(true);
    };

    useEffect(() => {
        if (applyWrapperVisible) {
            const applyWrapper = document.querySelector('#applyWrapper');
            applyWrapper.style.display = 'block';
            applyWrapper.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [applyWrapperVisible]);

    const [formData, setFormData] = useState({
        crfirstname: '',
        crlastname: '',
        crmobile: '',
        cremail: '',
        jobPosition: 'Developer', // Example job position
        experience: '3 years', // Example experience
        shortdescription: '',
        resume: null
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('https://ecis.in/apis/sayahomes/career/upload', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submitted successfully:', response.data);
            setSuccessMessage('Your application has been submitted successfully.');
            setFormData({
                crfirstname: '',
                crlastname: '',
                crmobile: '',
                cremail: '',
                jobPosition: '',
                experience: '',
                shortdescription: '',
                resume: null
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('There was an error submitting your application. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="emptyBox"></div>
                <div className="pageTitle py-5 bg-orange w-100">
                    <div className="container-lg">
                        <h1 className="display-4 mb-0">Careers</h1>
                    </div>
                </div>
                <div className="breadcrumbContainer">
                    <div className="container-lg">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Careers</li>
                        </ol>
                    </div>
                </div>
                <div className="w-100 padding position-relative">
                    <div className="container-lg">
                        <div className="row no-gutters">
                            <div className="col-lg-6 gridBoxText bg-white d-flex align-items-center">
                                <div className="inner p-5">
                                    <div className="heading">
                                        <h2 className="h1 text-serif text-orange mb-0">Why Work With Saya?</h2>
                                    </div>
                                    <p className="mb-0">Of the various assets, services, and, products a company can boast of, its
                                        strength is always measured by its employees. Imbibing this ethos, we at Saya invest a
                                        great deal to train the human capital we have. The training and education programs we
                                        run are designed to be easy, engaging, and interactive. This allows our employees to
                                        enhance their skill sets.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 gridBoxImg">
                                <img src="https://sayahomes.com/assets/images/career-Banner.jpg" className="h-100 object-cover" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 padding bg-dark">
                    <div className="container-lg">
                        <div className="heading mx-auto">
                            <h2 className="text-serif mb-0">Explore Opportunities</h2>
                        </div>
                        <div className="opportunitiesContainer">
                            <div className="row">
                                <div className="col-sm-4 opportunityBox">
                                    <div className="inner">
                                        <h5>Graduates</h5>
                                        <img src="https://sayahomes.com/assets/images/icons/cgraduates.svg" alt='' />
                                    </div>
                                </div>
                                <div className="col-sm-4 opportunityBox">
                                    <div className="inner">
                                        <h5>Experienced <br />Professionals</h5>
                                        <img src="https://sayahomes.com/assets/images/icons/professionals.svg" alt='' />
                                    </div>
                                </div>
                                <div className="col-sm-4 opportunityBox">
                                    <div className="inner">
                                        <h5>Students/Internships</h5>
                                        <img src="https://sayahomes.com/assets/images/icons/students.svg" alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 padding bg-secondary">
                    <div className="container-lg">
                        <div className="heading mx-auto ml-sm-0">
                            <h2 className="text-serif text-orange mb-0">Current Openings</h2>
                        </div>
                        <div className="textbody mb-5">
                            <p className="mb-0">Explore our current job openings below.</p>
                        </div>
                        <div className="careerForm">
                            <div className="row gap-row">

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Finance & Accounts </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Manager/Senior Manager/AGM</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">05 -12 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-manager-agm" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onClick={() => applyNow('05 - 12 yrs', 'Manager/Senior Manager/AGM')} type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Finance & Accounts </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">DM/Manager/Senior Manager</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">03 - 09 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-manager-dm" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('03 - 09 yrs ','DM/Manager/Senior Manager')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">CRM </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Senior Manager/AGM/DGMr</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">08 - 15 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-sr-agm-dgm" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('08 - 15 yrs ','Senior Manager/AGM/DGMr')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">CRM </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Front Desk/GRE</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">01 - 05 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-desk-gre" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('01 - 05 yrs ','Front Desk/GRE')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Legal </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Dy. Manager/Manager/Senior Manager</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">03 - 09 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-mgr-sr" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('03 - 09 yrs ','Dy. Manager/Manager/Senior Manager')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">CRM </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Tele caller</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">01-03 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-tele-caller" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('01-03 yrs ','Tele caller')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Real Estate</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Copy / Content Writer</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">07 - 12 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-content-writer" data-toggle="modal" className="button stroke bg-orange text-white"><span>Job Description</span></button>
                                            <button onclick="applyNow('07 - 12 yrs','Copy/ Content Writer')" type="submit" className="button stroke bg-orange text-white">Apply Now </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Real Estate</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Senior Graphic Designer</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">04 - 09 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-senior-graphic-designer" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('04 - 09 yrs','Senior Graphic designer')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Leasing </h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Assistant Manager</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">03 - 07 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-assistant-manager" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('03 - 07 yrs ','Assistance Manager')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Commercial/ Luxury Sales</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Senior Manager/ Manager</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">07 -12 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-Senior-manager" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('07 -12 yrs','SENIOR MANAGER/ MANAGER')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 career-card">
                                    <div className="card inside">
                                        <div className="card-header pt-0 px-0">
                                            <p className="mb-0">Functional Area</p>
                                            <h5 className="job-role">Sales Support</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Job Position</strong><span className="job-positions">Presales/ Sales Coordinator/ Sales Support</span></li>
                                            <li className="list-group-item"><strong>Experience</strong><span className="job-experience">01 - 05 yrs</span></li>
                                        </ul>
                                        <div className="viewmore mt-4 d-flex">
                                            <button data-target="#jobDescModal-presales" data-toggle="modal" className="button stroke bg-orange text-white">Job Description</button>
                                            <button onclick="applyNow('01 - 05 yrs','PRESALES/ SALES COORDINATOR/ SALES SUPPORT')" type="submit" className="button stroke bg-orange text-white">Apply Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className="mb-0 mt-5">Fill out the form and we'll be in touch soon! The aspirants may send their resumes
                            to
                            <a href="mailto=hr@sayahomes.in."><span className="__cf_email__" data-cfemail="0a62784a796b736b6265676f79246364"> hr@sayahomes.in.</span></a>.
                        </p>
                    </div>
                </div>
                <div className="w-100 padding" id="applyWrapper">
                    <div className="container-lg">
                        <div className="heading mx-auto ml-sm-0">
                            <h2 className="h1 mb-0">Apply Online</h2>
                        </div>
                        <div className="form-container">
                            <form className="career-form" id="careerForm" method="post" onSubmit={handleSubmit}>
                                <span className="text-danger carstatus"></span>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="crfirstname">First Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-bg" name="crfirstname" id="crfirstname" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="crlastname">Last Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-bg" name="crlastname" id="crlastname" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="crmobile">Tel/Mobile <span className="text-danger">*</span></label>
                                        <input type="tel" className="form-control form-control-bg" name="crmobile" id="crmobile" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="cremail">Email <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control form-control-bg" name="cremail" id="cremail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label>Job Position</label>
                                        <input type="text" className="form-control form-control-bg" name="jobPosition" id="jobPosition"  value={jobDetails.jobPosition} readonly />
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="exp_yrs">Experience <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-bg" name="experience" id="experience" value={jobDetails.experience} readonly />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <label for="specialization">Short Description</label>
                                        <textarea className="form-control form-control-bg" name="shortdescription" id="shortdescription" rows="7"></textarea>
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label for="specialization">Attach Your Resume <span className="text-danger">*</span></label>
                                        <input type="file" name="resume" id="resume" onChange={handleFileChange} accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" size="34" maxlength="255" className="form-control form-control-bg" />
                                        <input type="hidden" name="Resume" id="resume" />

                                        <div className="col-md-12 form-group readmore">
                                            <input type="hidden" name="car_action" value="active" />
                                            <button type="submit" className="button justify-content-start" id="contsubmti">
                                                <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                                <span className="text" id="contidbtn">Submit</span>
                                                <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-senior-graphic-designer" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Senior Graphic Designer</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ol className="mb-0">
                                    <li>Study design briefs and determine requirements.</li>
                                    <li>Schedule projects and define budget constraints.</li>
                                    <li>Conceptualize visuals based on requirements.</li>
                                    <li>Prepare rough drafts and present ideas.</li>
                                    <li>Develop illustrations, logos and other designs using software or by hand.</li>
                                    <li>Use the appropriate colors and layouts for each graphic.</li>
                                    <li>Work with copywriters and creative director to produce final design.</li>
                                    <li> Working on graphics across various media.</li>
                                    <li>Amend designs after feedback.</li>
                                    <li>Ensure final graphics and layouts are visually appealing and on-brand.</li>
                                </ol>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('04 - 09 yrs','Senior Graphic Designer')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="jobDescModal-content-writer" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Copy/ Content Writer</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ol className="mb-0">
                                    <li>Develop and create effective, engaging concepts for promotions that support business
                                        objectives that adhere to established brand voice</li>
                                    <li>Creating and editing original copy that is accurate, well-researched, and meets
                                        client/company needs and deadlines.</li>
                                    <li>Speaking with internal and external parties to learn about their content needs.</li>
                                    <li>Conducting research to formulate ideas or support writing.</li>
                                    <li>Learning about the target audience for copy.</li>
                                    <li>Assisting in other aspects of the creative or research processes to create cohesive,
                                        accurate content.</li>
                                </ol>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('07 - 12 yrs','Copy/ Content Writer')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="jobDescModal-assistant-manager" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">ASSISTANT MANAGER</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ol className="mb-0">
                                    <li>Conduct a market study on factors such as demographics of the area, current and future
                                        competition</li>
                                    <li>Approaching brands from National & Local market, making lease presentations</li>
                                    <li>Send Offer Letters/Letter of Intent (LOI) to confirmed brands/retailers.</li>
                                    <li>Co-ordinate the fit out of shops, in conjunction with the Mall projects team and the
                                        clients, to ensure timely completion of fit outs.</li>
                                    <li>Manage collection of the required fees /charges and deposits (security deposit, stamp
                                        duty and registration fees, completion of lease administration procedures and MIS
                                        reporting)</li>
                                    <li>Enter into Leave and License agreements and closing L&L Agreement, etc.</li>
                                    <li> Conducting site visits for retailers in the mall</li>
                                    <li>Responsible for Documentations like Master Sheets, MIS, Rent Performa, Monthly MMR,
                                        Quarterly reports, Weekly Progress Reports etc.</li>
                                    <li>Responsible for Leasing of Kiosk spaces</li>
                                    <li>Pitching & generating leads, execution & closing retail transaction.</li>
                                </ol>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('03 - 07 yrs','ASSISTANT MANAGER')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="jobDescModal-Senior-manager" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">SENIOR MANAGER</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ol className="mb-0">
                                    <li>Responsible for Sales and Marketing activities of the company.</li>
                                    <li>Responsible for developing channel partners for the Projects.</li>
                                    <li>Organizing customers meet for development.</li>
                                    <li>Meeting and greeting clients visiting the offices.</li>
                                    <li>Following up business leads.</li>
                                    <li>Comparing a property to others in the area then estimating its value.</li>
                                    <li>Pointing out a properties best feature to buyer and answering their questions.</li>
                                    <li>Responsible for generating led for business.</li>
                                    <li>Designing and implementing of sales strategies for targeted revenue.</li>
                                    <li>Responsible for preparing the daily sales report.</li>
                                </ol>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('07 -12 yrs ','SENIOR MANAGER/ MANAGER')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="jobDescModal-presales" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">PRESALES/ SALES COORDINATOR/ SALES SUPPORT</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ol className="mb-0">
                                    <li><b>Generate new sales lead:</b> To ensure generate new sales lead through calling to the
                                        customers and identify their needs and explaining them proper details of the projects.
                                    </li>
                                    <li><b>Follow up and arrange site visit:</b> To ensure proper follow up of the customers and
                                        convince them for site visit. To ensure proper arrangement of site visit and schedule
                                        meetings with sales team and proper update the correct disposition.</li>
                                    <li><b>Co-ordination with sales team:</b> To ensure proper coordination with sales team
                                        regarding their existing and new customer visit.</li>
                                    <li>Conducting research to formulate ideas or support writing.</li>
                                    <li><b>Proper answer to the customers Query:</b> To ensure proper answering to the customer
                                        regarding their query on time through calls and email.</li>
                                    <li><b>Client Handling:</b> To ensure proper client handling in absence of Sales team and
                                        report to senior.</li>
                                </ol>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('01 - 05 yrs','PRESALES/ SALES COORDINATOR/ SALES SUPPORT')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-manager-agm" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Manager/Senior Manager/AGM</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>F&A/MIS/Balance Sheet</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>CA</li>
                                    <li>05 - 12 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('05 - 12 years','Manager/Senior Manager/AGM')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="jobDescModal-manager-dm" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">DM/Manager/Senior Manager</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>F&A/AR/AP</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>B. Com/M. Com/MBA</li>
                                    <li>03 - 09 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('03 - 09 years','DM/Manager/Senior Manager')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-sr-agm-dgm" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Senior Manager/AGM/DGM</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>CRM-MIS/ERP/Price Calculation/ file login/ Client Coordination</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>Graduate</li>
                                    <li>08 - 15 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('08 - 15 years','Senior Manager/AGM/DGM')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-desk-gre" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Front Desk/GRE</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>Front Desk/Customer Interaction</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>Diploma/Graduate</li>
                                    <li>01 - 05 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('01 - 05 years','Front Desk/GRE')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-mgr-sr" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Dy. Manager/Manager/Senior Manager</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>Drafting/Reply/Case study/RERA etc.</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>BA LLB</li>
                                    <li>03 - 09 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('03 - 09 years','Dy. Manager/Mgr./Senior Mgr.')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="jobDescModal-tele-caller" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="ion-ios-close">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="heading">
                                <h4 className="font-weight-bold text-golden mb-0">Tele caller</h4>
                            </div>
                            <h6 className="mb-3 font-weight-bold">Job Responsibilities</h6>
                            <div className="list">
                                <ul className="mb-2">
                                    <li>Collection & Sales Lead.</li>
                                </ul>
                                <h6>Qualifications:</h6>
                                <ul className="mb-2">
                                    <li>Graduate</li>
                                    <li>01 - 03 years of Experience</li>
                                </ul>
                            </div>
                            <div className="border-top border-golden my-4"></div>
                            <p className="mb-0"><b>CTC:</b> Not disclosed</p>
                            <div className="readmore">
                                <button onclick="applyNow('01 - 03 years','Tele caller')" data-dismiss="modal" aria-label="Close" className="button solid">
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    <span className="text">Apply Now</span>
                                    <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAll />
        </div >

    )
}

export default Careers