import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
    return (
        <div>
        <div id="navBar">
        <img id="logo" src="https://image.flaticon.com/icons/png/512/32/32904.png" />
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