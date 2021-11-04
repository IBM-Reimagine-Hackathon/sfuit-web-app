import React from 'react'
import './Overlay.css'

function Overlay() {
    return (
        <div className='overlay-container' onClick={e => e.stopPropagation()}>
            <div className="notification-details">
                <div className="notification-title">Title</div>
                <div className="notification-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div className="divide"></div>
            </div>
        </div>
    )
}

export default Overlay
