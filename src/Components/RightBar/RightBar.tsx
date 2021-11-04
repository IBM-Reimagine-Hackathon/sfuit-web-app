import React from 'react'
import Card from '../Card/Card'
import Meds from '../Meds/Meds'
import './RightBar.css'

function RightBar() {
    return (
        <div className='right-container'>
            <div className='heading'>PLANNER</div>
            {/*<Calendar />*/}
            <div className="sub-heading">Appointments</div>
            <Card />
            <div className="sub-heading move">Medicines</div>
            <Meds />
        </div>
    )
}

export default RightBar
