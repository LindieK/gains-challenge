import React, { Component } from 'react'
import Popup from './lib/components/Popup';
import Button from './lib/components/Button'
import './lib/styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCancelAction = this.handleCancelAction.bind(this);
    this.handleUnfollowAction = this.handleUnfollowAction.bind(this);
  }
  
  handleButtonClick = (event) => {
    if(event.target.innerText === "Unfollow"){
      this.setState({
        showModal: true
      })
    }
    else{
      let btn = document.getElementById("btn1");
      btn.innerText = "Unfollow";
    }
  }

  handleUnfollowAction = () => {
    let btn = document.getElementById("btn1");
    btn.innerText = "Follow";

    this.setState({
      showModal: false
    })
  }

  handleCancelAction = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    const showModal = this.state.showModal;
    return (
      <div className="App">
        <Button onClick={this.handleButtonClick} />

        {showModal ? <Popup memberTag="@superfunnymemes" onUnfollow={this.handleUnfollowAction} onCancel={this.handleCancelAction} /> : null}
      </div>
    )
  }
}
export default App
