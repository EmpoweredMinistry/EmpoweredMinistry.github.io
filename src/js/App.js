import React, { Component } from 'react';
// assets
import logo from './assets/logo.png';
import '../css/App.css';
// components
import PhotosCarousel from './PhotosCarousel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PhotosCarousel
          index={this.state.index}
          direction={this.state.direction}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
