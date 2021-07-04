import React, { Component } from 'react'
import Popup from './components/Popup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal: false
    }
  }
  
  render() {

    const showModal = this.state.showModal;
    return (
      <div className="App">
        <button className="btn primary cta-btn">Unfollow</button>

        {showModal ? <Popup memberTag="@superfunnymemes"/> : null}
      </div>
    )
  }
}
export default App
