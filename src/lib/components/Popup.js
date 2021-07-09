import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../styles/Popup.css'


const popupRoot = document.getElementById("modal-root");

class Popup extends Component {

    constructor(props) {
        super(props)
    
        this.el = document.createElement('div');
    }
    
    componentDidMount(){
        popupRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        popupRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <div data-testid="modal" className="modal-overlay">
                <div id="popup-card">
                    <div className="text-container">
                        <h2>Unfollowing...</h2>
                        <p>Member Tag: <span className="member-tag">{this.props.memberTag}</span></p>
                        <p>{this.props.bodyText}</p>
                    </div>
                
                    <div className="btn-container">
                        <button className="btn secondary" onClick={this.props.onCancel}>{this.props.cancelText}</button>
                        <button className="btn primary" onClick={this.props.onUnfollow}>{this.props.unfollowText}</button>
                    </div>
                </div>
            </div>,
            this.el
        )
    }
}
export default Popup