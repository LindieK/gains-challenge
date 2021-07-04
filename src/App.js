import React, { Component } from 'react'
import Popup from './components/Popup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="btn primary cta-btn">Unfollow</button>

        <Popup />
      </div>
    )
  }
}
export default App
