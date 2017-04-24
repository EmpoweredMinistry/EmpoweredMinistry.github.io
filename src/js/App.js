import React, { Component } from 'react';
import logo from './assets/Logo_Final.png';
import '../css/App.css';
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
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
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
          {/*<h2>Welcome to React</h2>*/}
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
