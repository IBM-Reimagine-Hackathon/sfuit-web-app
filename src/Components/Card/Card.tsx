import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="icon">
                    <i className="fas fa-tooth"></i>
                </div>
                <div className='details'>
                    <div className="name">Dentist</div>
                    <div className="timing">8:00 - 9:00</div>
                    <div className="doctor">Dr. Alex Brown</div>
                </div>
                <div className='next'>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <i className="fas fa-tooth"></i>
                </div>
                <div className='details'>
                    <div className="name">Dentist</div>
                    <div className="timing">8:00 - 9:00</div>
                    <div className="doctor">Dr. Alex Brown</div>
                </div>
                <div className='next'>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Card
