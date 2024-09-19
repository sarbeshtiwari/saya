import React from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import PrintMedia from './print-media';
import DigitalMedia from './digital-media';
import Videos from './video';
import { Link } from 'react-router-dom';

function InTheMedia() {


    return (
        <div>
            <Navbar />
            <div className="emptyBox"></div>
            <div className="pageTitle py-5 bg-orange w-100">
                <div className="container-lg">
                    <h1 className="display-4 mb-0">In the Media</h1>
                </div>
            </div>
            <div className="breadcrumbContainer">
                <div className="container-lg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/sayahomes-react'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">In the Media</li>
                    </ol>
                </div>
            </div>
            <PrintMedia />
            <DigitalMedia />
            <Videos />
            <FooterAll />
        </div>
    )
}

export default InTheMedia