import React from 'react';
import './App.css';
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import ThemeContext from './themeContext'

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeContext.Consumer>
        {({theme}) => (
          <Button theme = {theme} />
        )}
      </ThemeContext.Consumer>
      <Footer />
    </div>
  );
}

export default App;
