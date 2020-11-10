const redux = require("redux")

export function addContact() {
    return {
        type: "ADD_CONTACT"
    }
}

export function deleteContact(id) {
    return {
        type: "DELETE_CONTACT",
        data: id
    }
}

export function getAllContacts(contact) {
    return {
        type: "GET_CONTACTS",
        data: contact
    }
}

export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        data: {name, value}
    }
}

const initialState = {
    contacts: [],
    contact: ""
}

export default function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, state.contact], contact: ""
            }
        case "DELETE_CONTACT":
            let newContacts = [...state.contacts]
            newContacts.splice(action.data, 1)
            return {
                ...state,
                contacts: newContacts
            }
        case "GET_CONTACTS":
            return [...state]
        case "SET_INPUTS":
            return {
                ...state,
                [action.data.name] : action.data.value
            }
        default:
            return state
    }
}