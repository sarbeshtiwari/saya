// import React from 'react'
// import Navbar from '../../components/navbar'
// import FooterAll from '../../components/footer2'

// function Events() {
//     return (
//         <div>
//             <Navbar />
//             <div className="emptyBox"></div>
//             <div className="pageTitle py-5 bg-orange w-100">
//                 <div className="container-lg">
//                     <h1 className="display-4 mb-0">Saya Events</h1>
//                 </div>
//             </div>
//             <div className="breadcrumbContainer">
//                 <div className="container-lg">
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item"><a href="/">Home</a></li>
//                         <li className="breadcrumb-item active" aria-current="page">Events</li>
//                     </ol>
//                 </div>
//             </div>
//             <div className="w-100 padding position-relative">
//                 <div className="container-lg">
//                     <div className="inside-blogsArchive">
//                         <div className="row gap-row">
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/P11679411724763359.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Janamasthami Celebration</h5>
//                                         <div className="date justify-content-between">
//                                             <small>26 August, 2024</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/P11676821724141964.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Independence Day Celebration at Saya SouthX</h5>
//                                         <div className="date justify-content-between">
//                                             <small>15 August, 2024</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Untitled-11718277134.jpg" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Shri Laxmi Narayan Yagya at SouthX</h5>
//                                         <div className="date justify-content-between">
//                                             <small>16 December, 2023</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/A73088121718460556.1717495595" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Rewards and Recognition at Saya</h5>
//                                         <div className="date justify-content-between">
//                                             <small>16 December, 2023</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717495806.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Janmashtami 2022</h5>
//                                         <div className="date justify-content-between">
//                                             <small>1 October, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717496757.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Independence Day 2022</h5>
//                                         <div className="date justify-content-between">
//                                             <small>15 August, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717498211.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Saya Gold Avenue Club House Launch</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Grand_Lohri_Night1717500519.jpg" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Grand Lohri Night</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717498293.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Piazza Event Launch</h5>
//                                         <div className="date justify-content-between">
//                                             <small>3 June, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717498370.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Elevated Merchandise Launch</h5>
//                                         <div className="date justify-content-between">
//                                             <small>2 June, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/11717498560.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Teej Mahotsav Celebration 2022</h5>
//                                         <div className="date justify-content-between">
//                                             <small>1 June, 2022</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#6">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Diwali_Celebration_2020_(1)1717499203.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Diwali Celebration 2020</h5>
//                                         <div className="date justify-content-between">
//                                             <small>20 October, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#0">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Womens_Day_Celebration_at_SGA_2020_(1)1717498691.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Women's Day Celebration at SGA 2020</h5>
//                                         <div className="date justify-content-between">
//                                             <small>21 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#1">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/New_Year_Celebration-2019_0000_1634742328_NY_191717498749.1" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">New Year Celebration-2019</h5>
//                                         <div className="date justify-content-between">
//                                             <small>21 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#3">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Dandiya_Night_Celebration_at_SGA_2019_(1)1717498929.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Dandiya Night Celebration at SGA 2019</h5>
//                                         <div className="date justify-content-between">
//                                             <small>12 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#2">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Holi-2019_(2)1717498842.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Holi-2019</h5>
//                                         <div className="date justify-content-between">
//                                             <small>10 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#4">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Saya_Gold_Avenue_Carnival_(2)1717499040.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Saya Gold Avenue Carnival</h5>
//                                         <div className="date justify-content-between">
//                                             <small>5 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#8">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Saya_South-X_Launch_(1)1717499841.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Saya South-X Launch</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#4">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Launch of S Class (1).1717500400.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Launch of S className</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#6">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Success_Celebration1717500568.jpg" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Success Celebration</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#8">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Zenith_Club_Launch_(12)1717500747.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Zenith Club Launch</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#5">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Housewarming_Ceremony_at_SGA_(5)1717499121.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Housewarming Ceremony at SGA</h5>
//                                         <div className="date justify-content-between">
//                                             <small>3 June, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#9">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/The_Dandiya-07-Oct-15_copy1717500847.jpg" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">The Dandiya</h5>
//                                         <div className="date justify-content-between">
//                                             <small>6 April, 2020</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#1">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Bhangra_Night_Celebration_at_SGA_2019_(11)1717500124.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Bhangra Night Celebration at SGA 2019</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2019</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#2">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Sai_Sandhya_(1)1717500218.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Sai Sandhya</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2019</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#3">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Baisakhi_Celebration_(1)1717500300.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Baisakhi Celebration</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2019</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#7">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Saya_Homes_Festival-Patna-July_2018_(1)1717499317.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Saya Homes Festival-Patna-July 2018</h5>
//                                         <div className="date justify-content-between">
//                                             <small>1 July, 2018</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#9">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Vishwakarma_Puja_at_Saya_Gold_Avenue_Site_(1)1717499931.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Vishwakarma Puja at Saya Gold Avenue Site</h5>
//                                         <div className="date justify-content-between">
//                                             <small>4 June, 2018</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                             <div className="col-md-4 newsBox">
//                                 <a className="inner h-100" href="#0">
//                                     <div className="img-fluid mt-0 position-relative">
//                                         <img src="https://ecis.in/sayahomes-react/assets/uploads/events/Christmas_Day_Celebration_(1)1717500038.webp" alt="Saya Homes" className="h-100 object-cover" title />
//                                     </div>
//                                     <article>
//                                         <h5 className="news-title mt-4">Christmas Day Celebration</h5>
//                                         <div className="date justify-content-between">
//                                             <small>26 December, 2017</small>
//                                         </div>
//                                     </article>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <FooterAll />
//         </div>
//     )
// }

// export default Events

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import FooterAll from '../../components/footer2';
import axios from 'axios';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events data from API
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://ecis.in/apis/sayahomes/events/get');
                setEvents(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="emptyBox"></div>
            <div className="pageTitle py-5 bg-orange w-100">
                <div className="container-lg">
                    <h1 className="display-4 mb-0">Saya Events</h1>
                </div>
            </div>
            <div className="breadcrumbContainer">
                <div className="container-lg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Events</li>
                    </ol>
                </div>
            </div>
            <div className="w-100 padding position-relative">
                <div className="container-lg">
                    <div className="inside-blogsArchive">
                        <div className="row gap-row">
                            {events.map((event) => (
                                <div key={event.id} className="col-md-4 newsBox">
                                    <Link className="inner h-100" to={`/event-details/${event.ev_id}/${encodeURIComponent(event.ev_group)}`}>
                                        <div className="img-fluid mt-0 position-relative">
                                            <img
                                                src={`https://www.sayahomes.com/uploads/events/${event.ev_image}`}
                                                alt={event.ev_title}
                                                className="h-100 object-cover"
                                                title={event.ev_title}
                                            />
                                        </div>
                                        <article>
                                            <h5 className="news-title mt-4">{event.ev_title}</h5>
                                            <div className="date justify-content-between">
                                                <small>{new Date(event.ev_created).toLocaleDateString()}</small> {/* Format date as needed */}
                                            </div>
                                        </article>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterAll />
        </div>
    );
}

export default Events;
