import React, { Component } from 'react'
// assets
import '../css/App.css'
// components
import Header from './Header'
import Cards from './Cards'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Cards />
        </div>
      </div>
    );
  }
}

export default App
