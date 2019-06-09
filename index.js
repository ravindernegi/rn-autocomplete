import React, { Component } from 'react';
import { render } from 'react-dom';
import AutoComplete from './AutoComplete.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <AutoComplete />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
