import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
         
        <Footer/>
      </div>
    );
  }
}

export default App;
