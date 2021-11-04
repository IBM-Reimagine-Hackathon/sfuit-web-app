import React from 'react'
import './Meds.css'

function Meds() {
    return (
        <div className='medicine-container'>
            <div className="medicine">
                <div className="icon">
                    <i className="fas fa-capsules"></i>
                </div>
                <div className='details'>
                    <div className="name">Iron Tablet</div>
                    <div className="dosage">2 capsules after meals every day</div>
                </div>
                <div className='next'>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="medicine">
                <div className="icon">
                    <i className="fas fa-capsules"></i>
                </div>
                <div className='details'>
                    <div className="name">Iron Tablet</div>
                    <div className="dosage">2 capsules after meals every day</div>
                </div>
                <div className='next'>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="medicine">
                <div className="icon">
                    <i className="fas fa-capsules"></i>
                </div>
                <div className='details'>
                    <div className="name">Iron Tablet</div>
                    <div className="dosage">2 capsules after meals every day</div>
                </div>
                <div className='next'>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    )
}

export default Meds
