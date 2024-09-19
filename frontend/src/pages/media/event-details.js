import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import FooterAll from '../../components/footer2';
import axios from 'axios';

function EventDetail() {
    const [events, setEvents] = useState([]);
    const { id, title } = useParams();

    useEffect(() => {
        const fetchEvents = async (id) => {
            try {
                const response = await axios.get(`https://ecis.in/apis/sayahomes/events/getByID/${id}`);
                setEvents(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents(id);
    }, [id]);

    const imageStyle = {
        height: '200px',
        width: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
    };

    const imageHoverStyle = {
        transform: 'scale(1.1)',
    };

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
                        <li className="breadcrumb-item">
                            <Link to="/sayahomes-react/events">Events</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </div>
            </div>
            <div className="w-100 padding position-relative">
                <div className="container-lg">
                    <div className="inside-blogsArchive">
                        <div className="row gap-row">
                            {events.slice(0, 25).map((event) => (
                                <div key={event.id} className="col-6 col-md-3 mb-4">
                                    <div
                                        className="img-fluid mt-0 position-relative"
                                        style={{ overflow: 'hidden' }} // Ensures the image doesn't overflow its container
                                    >
                                        <img
                                            src={`https://www.sayahomes.com/uploads/events/${event.ev_image}`}
                                            alt={event.ev_title}
                                            style={imageStyle}
                                            className="zoom-image"
                                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>
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

export default EventDetail;
