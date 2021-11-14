import React from 'react'
import './AnalysisBoard.css'

function AnalysisBoard() {
    return (
        <div className='board-container'>
            <div className='board-heading'>Analysis DashBoard</div>
            
            <div className='first-row'>
                <div className='card pulse'>
                    <div className='name'>Pulse</div>
                </div>
                <div className='card steps'>
                    <div className='name'>Steps</div>
                </div>
            </div>
            <div className='third-row'>
                <div className='card ecg'>
                    <div className='name'>ECG</div>
                </div>
            </div>
        </div>
    )
}

export default AnalysisBoard
