import React, { Component, component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: ''
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        alert('Name: ' + this.state.value);
        e.preventDefault();
    }

    render() {

    return (
        <div>
            <h2>Contact Us</h2>
            <Link to="/">Home</Link>
            <Link to="/servicesPage">Services</Link>
            <Link to="/facilitiesPage">Facilities</Link>
        <form onSubmit={this.handleSubmit}>
            <input value="name" type="text" onChange={this.handleChange} />
            <input type="text" onChange={this.handleChange}Email Address />
            <input type="text" onChange={this.handleChange}>Question</input>
            <input type="submit" className="submitButton" value="ADD" />
        </form>
        </div>
    )
};
}
export default ContactUs;