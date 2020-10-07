import React from 'react';
import './App.css';
import Header from './Header';
import {AnimalContextConsumer} from './AnimalContext';
import List from './List';
import Footer from './Footer';

class App extends React.Component {
  state={
    newAnimal: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <AnimalContextConsumer>
            {({animal}) => (
              <p className="main"> {animal} </p>
            )}
          </AnimalContextConsumer>
        </main>
        <input
          className="input"
          type="text"
          name="animal"
          placeholder="New Animal"
          value={this.state.newAnimal}
          onChange={this.handleChange}
        />
        <br></br>
        <button>Add animal</button>
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
