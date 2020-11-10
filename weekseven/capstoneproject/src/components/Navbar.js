import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
    return (
        <div>
        <div id="navBar">
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/facilities">Facilities</Link>
            <Link id="link" to="/gallery">Gallery</Link>
            <Link id="link" to="/contactus">Contact Us</Link>
        </div>
        <h2 id="navHeading">Old Denton Stables</h2>
        </div>
    )
}

export default Navbar