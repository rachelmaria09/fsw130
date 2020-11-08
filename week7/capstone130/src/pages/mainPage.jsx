import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h2>Old Denton at Grove Creek Mules</h2>
            <Link to="/servicesPage">Services</Link>
            <Link to="/facilitiesPage">Facilities</Link>
            <Link to="/contactUs">Contact Us</Link>
        </div>
    );
};

export default MainPage;