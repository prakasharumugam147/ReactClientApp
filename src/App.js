import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/FormComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormComponent />
      </div>
    );
  }
}

export default App;
