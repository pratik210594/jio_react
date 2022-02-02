import React, { Component } from 'react';

import Navigation from './Navigation';
import Body from './Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  

  renderNavigation() {
    return (<Navigation/>);
  }

  renderBody(){
    return (<Body/>);
  }

  render() {
    return (
      <div className="App">
        {this.renderNavigation()}
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
