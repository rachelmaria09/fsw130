import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    return (
        <div>
            <h2>Training</h2>
            <Link to="/">Home</Link>
            <Link to="/facilitiesPage">Facilities</Link>
            <Link to="/contactUs">Contact Us</Link>
            <p>Rebecca Evans joins Old Denton from MillPond in Death Valley, California. With 20 years of training experience handling both horses and mules we are ecstatic to have her at the farm!</p>
            <ul>
                <li>Dressage</li>
                <li>Hunter/Jumper</li>
                <li>Reining</li>
                <li>Breaking to ride</li>
            </ul>
        </div>
    );
};

export default ServicesPage;