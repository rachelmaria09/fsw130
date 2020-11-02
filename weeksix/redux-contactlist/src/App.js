import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import updateContacts from '../src/store/actions/updateContacts'

function App(props) {
  return (
    <div className="App">
      <h3>Redux ContactList App</h3>
        <br/>
        <span>
          Contact Name: 
        </span>
        {props.contacts.name}
        <br/>
        <button onClick={props.updateContacts}>Add Contact</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateContacts: () => dispatch(updateContacts)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
