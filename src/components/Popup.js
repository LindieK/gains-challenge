import React from 'react'
import '../Popup.css'

export default function Popup(props) {
    return (
        <div className="modal-overlay">
             <div id="popup-card">
                <div className="text-container">
                    <h2>Unfollowing...</h2>
                    <p>Member Tag: <span className="member-tag">{props.memberTag}</span></p>
                    <p>We have to let you know that if you proceed to this action, the member's content (posts) will no longer be visible to your feed, and they will 
                        disappear from your "Followed Members" list. Are you sure about this?
                    </p>
                </div>
            
                <div className="btn-container">
                    <button className="btn secondary">Nope, cancel</button>
                    <button className="btn primary">Unfollow</button>
                </div>
            </div>
        </div>
    )
}
