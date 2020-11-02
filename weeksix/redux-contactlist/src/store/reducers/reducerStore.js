import {createStore, combineReducers} from 'redux'
import contactListReducer from '../actions/contactListReducer'

const reducer = combineReducers({contacts: contactListReducer})

const initialState = {
    contacts: {name: "Rachel Gildea"}
}
const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
