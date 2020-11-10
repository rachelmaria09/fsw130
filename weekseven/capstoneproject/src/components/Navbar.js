import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
    return (
        <div id="navBar">
            <Link to="/home">Home</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/services">Services</Link>
            <Link to="/contactus">Contact Us</Link>
        </div>
    )
}

export default Navbar