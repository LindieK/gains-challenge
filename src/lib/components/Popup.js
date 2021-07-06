import React from 'react'
import ReactDOM from 'react-dom'
import '../../styles/Popup.css'


const Popup = (props) => {
    return ReactDOM.createPortal(
        <div data-testid="modal" className="modal-overlay">
            <div id="popup-card">
                <div className="text-container">
                    <h2>Unfollowing...</h2>
                    <p>Member Tag: <span className="member-tag">{props.memberTag}</span></p>
                    <p>We have to let you know that if you proceed to this action, the member's content (posts) will no longer be visible to your feed, and they will 
                        disappear from your "Followed Members" list. Are you sure about this?
                    </p>
                </div>
            
                <div className="btn-container">
                    <button className="btn secondary" onClick={props.onCancel}>Nope, cancel</button>
                    <button className="btn primary" onClick={props.onUnfollow}>Unfollow</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}
export default Popup