import React from "react"
import { connect } from "react-redux"
import { addContact, deleteContact, getAllContacts, setInputs } from "../redux/contactus"

function Contactus (props) {
    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        props.setInputs(name, value)
    }

    const onClickUpdate = (event) => {
        event.preventDefault()
        props.addContact()
    }

    const onClickDelete =(event, index) => {
        event.preventDefault()
        props.deleteContact(index)
    }

    return (
        <div>
            <form>
                <h3>Contact Us</h3>
                <input
                    type="text"
                    name="name"
                    value={props.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    name="contactType"
                    value={props.contactType}
                    placeholder="Email or Phone Number"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    name="inquiry"
                    value={props.inquiry}
                    placeholder="Questions..."
                    onChange={handleChange}
                />
                <br />
                <p>{props.contact}</p>
                <br />
                <button onClick={onClickUpdate}>Submit</button>
            </form>

            {props.contacts.map((contacts, index) =>
                <div key={index}>
                    <p>{contacts}</p>
                    <button onClick={(event) => onClickDelete (event, index)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default connect(state => ({...state.contacts, contacts: state.contacts.contacts}), {addContact, deleteContact, getAllContacts, setInputs})(Contactus)