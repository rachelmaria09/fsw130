import React from 'react';
import { Link } from 'react-router-dom';

const FacilitiesPage = () => {
    return (
        <div>
            <h2>Facilities</h2>
            <Link to="/">Home</Link>
            <Link to="/servicesPage">Services</Link>
            <Link to="/contactUs">Contact Us</Link>
            <h4>Indoor Riding Arena</h4>
            <br />
            <h4>Outdoor Riding Arena</h4>
            <br />
            <h4>Bull Pen</h4>
            <br />
            <h4>20 stall barn with indoor wash stalls</h4>
            <br />
            <h4>Unlimited trails!</h4>
        </div>
    );
};

export default FacilitiesPage;