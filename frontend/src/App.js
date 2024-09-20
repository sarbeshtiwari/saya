import './css/all.min.css';
import './css/bootstrap.min.css';
import './css/jquery.magnify.css';
import './css/swiper-bundle.min.css';
import './css/custom5.beta2.css';
import './css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Residentials from './pages/projects/residentials';
import Commercial from './pages/projects/commercial';
import InTheMedia from './pages/media/in-the-media';
import CSR from './pages/csr';
import ConstructionUpdates from './pages/construction-updates';
import CustomerSupports from './pages/customer-supports';
import Careers from './pages/careers';
import ContactUs from './pages/contact-us';
import Events from './pages/media/events';
import MediaBlogs from './pages/media/media-blogs';
import SayaGoldAvenue from './pages/projects/saya-gold-avenue';
import SayaZion from './pages/projects/saya-zion';
import SayaSouthX from './pages/projects/saya-southX';
import SayaPiazza from './pages/projects/saya-piazza';
import SayaZenith from './pages/projects/saya-zenith';
import SayaDesireResidency from './pages/projects/saya-desire-residency';
import Projects from './pages/projects/projects';
import SayaBiztop from './pages/projects/saya-biztop';
import ScrollToTop from './scrollToTop';
import BlogsDetail from './pages/media/blogs-detail';
import EventDetail from './pages/media/event-details';
import DetailTestimonial from './pages/projects/detail-testimonial';
import PrivacyPolicy from './pages/projects/privacy-policy';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Main homepage route */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/residential" element={<Residentials />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/saya-gold-avenue" element={<SayaGoldAvenue />} />
          <Route path="/saya-zion" element={<SayaZion />} />
          <Route path="/saya-southX" element={<SayaSouthX />} />
          <Route path="/saya-piazza" element={<SayaPiazza />} />
          <Route path="/saya-zenith" element={<SayaZenith />} />
          <Route path="/saya-desire-residency" element={<SayaDesireResidency />} />
          <Route path="/saya-biztop" element={<SayaBiztop />} />
          <Route path="/in-the-media" element={<InTheMedia />} />
          <Route path="/blogs" element={<MediaBlogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/construction-updates" element={<ConstructionUpdates />} />
          <Route path="/customer-supports" element={<CustomerSupports />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/blog-details/:slugurl' element={<BlogsDetail />} />
          <Route path='/event-details/:id/:title' element={<EventDetail />} />
          <Route path='/testimonials' element={<DetailTestimonial />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
