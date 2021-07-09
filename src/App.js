import React, { Component } from 'react'
import Modal from './lib/components/Modal';
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
    const popupText = 'We have to let you know that if you proceed to this action, the member\'s content (posts) will no longer be visible to your feed, and they will disappear from your "Followed Members" list. Are you sure about this?'
    return (
      <div className="App">
        <Button onClick={this.handleButtonClick} btnText="Unfollow"/>

        {showModal ? <Modal memberTag="@superfunnymemes" onUnfollow={this.handleUnfollowAction} onCancel={this.handleCancelAction} cancelText="Nope, cancel" unfollowText="Unfollow" bodyText={popupText}/> : null}
      </div>
    )
  }
}
export default App
