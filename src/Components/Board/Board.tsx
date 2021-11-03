import React from 'react'
import './Board.css'

function Board() {
    var time = new Date();
    var hours = (time.getHours()<10?'0':'') + time.getHours();
    var minutes = (time.getMinutes()<10?'0':'') + time.getMinutes();
    var month = time.toLocaleString('default', {month : 'long'});
    var day = time.getDate();
    return (
        <div className='board-container'>
            <div className='board-heading'>Overview</div>
            <div className='time-container'>
                <div className='time'><i className="far fa-clock"></i>{hours}:{minutes}</div>
                <div className='date'>{month}, {day}</div>
            </div>
            <div className='first-row'>
                <div className='card'>
                    <div className='name'>Temperature</div>
                    <div className='value'>37<sup><span className='sup'></span></sup>C</div>
                </div>
                <div className='card'>
                    <div className='name'>Oxygen</div>
                    <div className='value'>98</div>
                </div>
                <div className='card'>
                    <div className='name'>Time Spent</div>
                    <div className='value'>2h 36m</div>
                </div>
            </div>
            <div className='second-row'>
                <div className='card'>
                    <div className='name'>Pulse</div>
                    <div className='semi-circle'></div>
                    <div className='quarter-circle'></div>
                    <div className='value move-bottom'>99 <sub>bpm</sub></div>
                </div>
                <div className='card'>
                    <div className='name'>Steps</div>
                    <div className='value'><i className="fas fa-shoe-prints"></i> 347 <sub>steps</sub></div>
                </div>
            </div>
            <div className='third-row'>
                <div className='card'>
                    <div className='name'>ECG</div>
                </div>
            </div>
        </div>
    )
}

export default Board