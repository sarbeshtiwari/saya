import './css/all.min.css';
import './css/bootstrap.min.css';
import './css/jquery.magnify.css';
import './css/swiper-bundle.min.css';
import './css/custom5.beta2.css'
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
function App() {
  return (
    <div className="App" basename='/sayahomes-react'>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/sayahomes-react" element={<Home />} />
        <Route path="/sayahomes-react/about-us" element={<AboutUs />} />
        <Route path="/sayahomes-react/projects" element={<Projects />} />
        <Route path="/sayahomes-react/residential" element={<Residentials />} />
        <Route path="/sayahomes-react/commericial" element={<Commercial />} />
        <Route path="/sayahomes-react/saya-gold-avenue" element={<SayaGoldAvenue />} />
        <Route path="/sayahomes-react/saya-zion" element={<SayaZion />} />
        <Route path="/sayahomes-react/saya-southX" element={<SayaSouthX />} />
        <Route path="/sayahomes-react/saya-piazza" element={<SayaPiazza />} />
        <Route path="/sayahomes-react/saya-zenith" element={<SayaZenith />} />
        <Route path="/sayahomes-react/saya-desire-residency" element={<SayaDesireResidency />} />
        <Route path="/sayahomes-react/saya-biztop" element={<SayaBiztop />} />
        <Route path="/sayahomes-react/in-the-media" element={<InTheMedia />} />
        <Route path="/sayahomes-react/media-blogs" element={<MediaBlogs />} />
        <Route path="/sayahomes-react/events" element={<Events />} />
        <Route path="/sayahomes-react/csr" element={<CSR />} />
        <Route path="/sayahomes-react/construction-updates" element={<ConstructionUpdates />} />
        <Route path="/sayahomes-react/customer-supports" element={<CustomerSupports />} />
        <Route path="/sayahomes-react/careers" element={<Careers />} />
        <Route path="/sayahomes-react/contact-us" element={<ContactUs />} />
        <Route path='/sayahomes-react/blog-details/:slugurl' element={<BlogsDetail/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
