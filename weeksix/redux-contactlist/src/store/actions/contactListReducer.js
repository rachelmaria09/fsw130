import {UPDATE_CONTACTS} from './updateContacts'




const contactListReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case UPDATE_CONTACTS:
            return {name: payload}
            default:
        return state
    }
}

export default contactListReducer