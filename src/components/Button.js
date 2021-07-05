import React from 'react'

const Button = (props) => {
    return (
        <button id="btn1" className="btn primary cta-btn" onClick={props.onClick}>
            Unfollow
        </button>
    )
}
export default Button