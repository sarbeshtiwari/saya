import React, { useRef, useState } from 'react';

const Videos = () => {
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

      <div className="w-100 padding position-relative">
        <div className="container-lg in-the-media">
          <div className="inside-blogsArchive">
            <div className="heading">
              <h1 className="mb-0 text-serif text-orange">Videos</h1>
            </div>
            <div className="row gap-row">
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya South X Excavation', 'https://www.youtube.com/embed/2UizL7qOAAg?rel=0&amp;autoplay=1')}
                >
                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/2UizL7qOAAg.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya South X Excavation | Construction Update</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya South X Excavation', 'https://www.youtube.com/embed/OZYRK4miByE?rel=0&amp;autoplay=1')}
                >
                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/OZYRK4miByE.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya South X | Construction Update | 4th Sep 2020</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya South X | Construction Update | February 2020', 'https://www.youtube.com/embed/3qompf7MOfw?rel=0&amp;autoplay=1')}
                >
                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/3qompf7MOfw.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya South X | Construction Update | February 2020</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya Homes covered by Aaj Tak', 'https://www.youtube.com/embed/3XtTjFXamCY?rel=0&amp;autoplay=1')}
                >
                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/3XtTjFXamCY.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya Homes covered by Aaj Tak</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Luxurious Home at Saya Gold Avenue Awaits You', 'https://www.youtube.com/embed/eECgQeykbI0?rel=0&amp;autoplay=1')}
                >

                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/eECgQeykbI0.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Luxurious Home at Saya Gold Avenue Awaits You</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya South X | Construction Update | July 2020', 'https://www.youtube.com/embed/9p8K6uVDjjg?rel=0&amp;autoplay=1')}
                >

                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/9p8K6uVDjjg.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya South X | Construction Update | July 2020</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya Homes Festival organised in Patna, Bihar', 'https://www.youtube.com/embed/i5bc2lfSP8U?rel=0&amp;autoplay=1')}
                >

                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/i5bc2lfSP8U.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya Homes Festival organised in Patna, Bihar.</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Saya Homes Festival organised at Patna', 'https://www.youtube.com/embed/PUnkpUcN6yk?rel=0&amp;autoplay=1')}
                >

                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/shgjMCyUE-g.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Saya Homes Festival organised at Patna.</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
              </div>
              <div className="col-md-4 newsBox">
                <a
                  className="inner h-100"
                  href="#video-Modal"
                  data-toggle="modal"
                  onClick={() => handleShowModal('Mr. Manoj Jain, Director, Saya Homes during Saya Homes Festival', '"https://www.youtube.com/embed/PUnkpUcN6yk?rel=0&amp;autoplay=1')}
                >

                  <div className="img-fluid mt-0 position-relative">
                    <img src="https://sayahomes.com/assets/images/videos/PUnkpUcN6yk.jpg" alt="Saya Homes" className="h-100 object-cover" title />
                    <button className="playBtn"><i className="fa fa-play"></i></button>
                  </div>
                  <article>
                    <h5 className="news-title mt-4">Mr. Manoj Jain, Director, Saya Homes during Saya Homes Festival.</h5>
                    <div className="date justify-content-center justify-content-sm-between">
                      <small>2020</small>
                    </div>
                  </article>
                </a>
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
    </div>
  );
};

export default Videos;
