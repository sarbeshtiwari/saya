import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import Overview from './overview';
import FeaturedProjects from './featured-projects';
import Awards from './awards';
import Testimonials from './testimonials';
import Blogs from './blogs';
import Footer from '../components/footer';

function Home() {
  const videoRef = useRef(null);
  const soundBtnRef = useRef(null);

  useEffect(() => {
    const handleSoundToggle = () => {
      const video = videoRef.current;
      const soundBtn = soundBtnRef.current;
      if (video.muted) {
        video.muted = false;
        soundBtn.querySelector('i').className = 'fa fa-volume-up';
      } else {
        video.muted = true;
        soundBtn.querySelector('i').className = 'fa fa-volume-mute';
      }
    };
  
    const handleScroll = () => {
      const video = videoRef.current;
      if (window.scrollY > 100 && !video.paused) {
        video.pause();
      } else if (window.scrollY <= 100 && video.paused) {
        video.play().catch(error => {
          console.log("Play request interrupted: ", error);
        });
      }
    };
  
    const soundBtn = soundBtnRef.current;
    soundBtn.addEventListener('click', handleSoundToggle);
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      soundBtn.removeEventListener('click', handleSoundToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleVideoLoad = () => {
    const video = videoRef.current;
    video.style.clipPath = 'inset(0 0 0 0)';
  };

  return (
    <div className='wrapper'>
      <Navbar />
      <div className="banner w-100 scrollto">
        <video
          ref={videoRef}
          src="https://ecis.in/sayahomes-react/assets/images/videos/banner2724.mp4"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          poster="https://ecis.in/sayahomes-react/assets/images/sayamainvideo.jpg"
          className="banner-video h-100 object-cover"
          onLoadedData={handleVideoLoad}
        ></video>
        <div ref={soundBtnRef} className="soundBtn"><i className="fa fa-volume-mute"></i></div>
      </div>
      <Overview />
      <FeaturedProjects />
      <Awards />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
