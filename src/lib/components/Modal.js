import React from 'react'
import Popup from './Popup'
import '../styles/Popup.css'

export default function Modal(props) {
    return (
        <>
            <Popup>
                <div data-testid="modal" className="modal-overlay">
                    <div id="popup-card">
                        <div className="text-container">
                            <h2>Unfollowing...</h2>
                            <p>Member Tag: <span className="member-tag">{props.memberTag}</span></p>
                            <p>{props.bodyText}</p>
                        </div>
                    
                        <div className="btn-container">
                            <button className="btn secondary" onClick={props.onCancel}>{props.cancelText}</button>
                            <button className="btn primary" onClick={props.onUnfollow}>{props.unfollowText}</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}
