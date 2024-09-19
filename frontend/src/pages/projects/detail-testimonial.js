import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import FooterAll from "../../components/footer2";

export default function DetailTestimonial(){
    const [videoSrc, setVideoSrc] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (src, title) => {
      setVideoSrc(src);
      setVideoTitle(title);
      setShow(true);
    };

    const testimonials = [
        {
          text: "At first, I did not believe my husband. But then he gave me the keys to our new home.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials1.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mrs. Neeru Rathi (W/O Mr. Sunil Rathi)",
        },
        {
          text: "The beautiful workmanship of the home pleases my wife and kids and the well-maintained gardens and lawns are great for our parents. I am living a dream.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials2.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mr. Mishra",
        },
        {
          text: "My mother feels cared for.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials3.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mr. Dhananjay Verma",
        },
        {
          text: "We love the fact that our home is in close proximity to the metro station.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials4.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mrs. and Mr. Yadav",
        },
        {
          text: "From 2018, our weekend plans will be easier to execute. All thanks to Saya Homes.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials5.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mrs. and Mr. Singh",
        },
        {
          text: "With a two-level parking space available to us, we don't have to fret about finding a spot anymore.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials6.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mrs. and Mr. Das",
        },
        {
          text: "The security system ensures that our home and our neighbourhood remains a safe place for everyone.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials7.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mrs. and Mr. Gupta",
        },
        {
          text: "With malls and restaurants close to our home, our weekends are filled with happiness.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials8.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mr. Alok Jain",
        },
        {
          text: "We don't always need the AC to cool us down. We just take a walk inside our complex. The air is fresh and cool.",
          image: "https://ecis.in/sayahomes-react/assets/images/testimonials9.jpg",
          alt: "Satisfied Invest/ CP",
          name: "Mr. and Mrs. Khanna",
        },
      ];

      const testimonialsVideo = [
        {
          src: 'https://www.youtube.com/embed/PRgoLcERlOQ?rel=0&amp;autoplay=1',
          img: 'https://ecis.in/sayahomes-react/assets/images/PRgoLcERlOQ.jpg',
          title: 'Saya SouthX - Unrivalled Destination Unforgettable Experiences',
          name: 'Mr Pradeep Rawat',
        },
        {
          src: 'https://www.youtube.com/embed/MFdoV42c7Bk?rel=0&amp;autoplay=1',
          img: 'https://ecis.in/sayahomes-react/assets/images/MFdoV42c7Bk.jpg',
          title: 'Saya SouthX: Unrivalled Destination Unforgettable Experiences, Must Invest to get Best Return',
          name: 'Mr Vishal Bhardwaj',
        },
        {
          src: 'https://www.youtube.com/embed/M5_9_4AppSg?rel=0&amp;autoplay=1',
          img: 'https://ecis.in/sayahomes-react/assets/images/testim-gold-indrapuram.jpg',
          title: 'Owns a property in Saya Gold Avenue',
          name: 'Mr Prakash Ranawat',
        },
        {
          src: 'videos/Happy-Residents-GoldAvenue-4.mp4',
          img: 'https://ecis.in/sayahomes-react/assets/images/Video-4_1.jpg',
          title: 'Owns a property in Saya Gold Avenue',
          name: 'Saya SouthX - Unrivalled Destination Unforgettable Experiences',
        },
        {
          src: 'videos/customers3.mp4',
          img: 'https://ecis.in/sayahomes-react/assets/images/home3_1.avif',
          title: 'Owns a property in Saya Gold Avenue',
          name: 'Mr Vikash',
        },
        {
          src: 'videos/The-best-in-Delhi-NCR.mp4',
          img: 'https://ecis.in/sayahomes-react/assets/images/Video-1.avif',
          title: 'Saya SouthX - Unrivalled Destination Unforgettable Experiences',
          name: 'Mr Vajay',
        },
        {
          src: 'videos/Real-Estate-reviews-Gold-Avenue.mp4',
          img: 'https://ecis.in/sayahomes-react/assets/images/Video-2.avif',
          title: 'Saya SouthX - Unrivalled Destination Unforgettable Experiences',
          name: 'Mr Manoj',
        },
        {
          src: 'videos/Happy-Residents-GoldAvenue.mp4',
          img: 'https://ecis.in/sayahomes-react/assets/images/Video-3_1.avif',
          title: 'Saya SouthX - Unrivalled Destination Unforgettable Experiences',
          name: 'Mr Anil',
        },
      ];

      
    return(
        <div>
            <Navbar />
            <div>
                <div class="emptyBox"></div>
                <div class="pageTitle py-5 bg-orange w-100">
                    <div class="container-lg">
                        <h1 class="display-4 mb-0">Testimonials</h1>
                    </div>
                </div>
                <div class="breadcrumbContainer">
                    <div class="container-lg">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/home'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Testimonials</li>
                        </ol>
                    </div>

                </div>
                
                </div>
                <div className="w-100 padding overflow-hidden position-relative hm-overview-container">
      <div className="container-lg">
        <div className="heading">
          <h6 className="text-orange">Our happy clients</h6>
          <h2 className="h1 mb-0 text-serif">Testimonial</h2>
        </div>
        <div className="csrBox overview-text">
          <div className="inner">
            <p className="mb-0">
              At Saya, we make sure that we deliver before time. It’s our way of thanking you for the trust you place in us. We carefully choose locations that make connectivity easy for our customers. With a 75% green eco-friendly environment, we ensure that you lead a healthy lifestyle. With dual level parking space, we ensure that there is a special space reserved just for you.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-100 padding pt-0 overflow-hidden position-relative">
      <div className="container-lg">
        <div className="testimonials swiper">
          <div className="row gap-row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="testimonials-box">
                  <p>{testimonial.text}</p>
                  <div className="name-testi">
                    <div className="img-fluid">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        title={testimonial.alt}
                      />
                    </div>
                    <p>{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="w-100 padding position-relative bg-secondary">
      <div className="container-lg in-the-media">
        <div className="inside-blogsArchive">
          <div className="heading">
            <h1 className="mb-0 text-serif text-orange">Testimonial Videos</h1>
          </div>
          <div className="row gap-row">
            {testimonialsVideo.map((testimonial, index) => (
              <div key={index} className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  onClick={() => handleShow(testimonial.src, testimonial.title)}
                >
                  <div className="img-fluid mt-0 position-relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="h-100 object-cover"
                      title=""
                    />
                    <button className="playBtn">
                      <i className="fa fa-play"></i>
                    </button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">{testimonial.name}</h5>
                    <div className="date justify-content-between">
                      <small>{testimonial.title}</small>
                    </div>
                  </article>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for video */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{videoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={videoTitle}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    <FooterAll/>
                </div>
                
    );
}