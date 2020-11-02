export const UPDATE_CONTACTS = "UPDATE_CONTACTS"

const updateContacts ={
    type: UPDATE_CONTACTS,
    payload: "Rachel Gildea"
}

export default updateContacts


// function getContact() {
//     return {
//         type: "GET_CONTACT",
//     }
// }

// function addContact(contact) {
//     return {
//         type: "ADD_CONTACT",
//         data: contact
//     }
// }

// function deleteContact(contact) {
//     return {
//         type: "DELETE_CONTACT",
//         data: contact
//     }
// }

// function contactReducer(contacts = [], action) {
//     switch(action.type) {
//         case "ADD_CONTACT":
//             return [...contacts, action.data]
//         case "DELETE_CONTACT": {
//             const updatedArr = contacts.filter(contact => contact.toLowerCase() !== action.data.toLowerCase())
//             return updatedArr
//         }
//         case "GET_CONTACT": {
//             return contacts
//         }
//         default:
//             return contacts
//     }
// }

// export default {getContact, addContact, deleteContact, contactReducer}