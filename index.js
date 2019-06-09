import React, { Component } from 'react';
import { render } from 'react-dom';
import AutoComplete from './AutoComplete.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <AutoComplete name={this.state.name} />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
