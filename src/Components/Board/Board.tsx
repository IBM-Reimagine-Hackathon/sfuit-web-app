import React, { useEffect, useState } from 'react'
import socket from '../../Socket';
import './Board.css'

function Board() {
    const device_id: any=localStorage.getItem('device_id')
    const[pulse, setPulse] = useState<string>('0');
    const[spo, setSpo] = useState<string>('0');
    const[temp, setTemp] = useState<string>('0');
    useEffect(()=>{
        socket.on(device_id,(Data: any)=>{
            setPulse(Data.data.Pulse);
            setSpo(Data.data.SpO2);
            setTemp(Data.data.temperature);
        })
    },[])
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
                <div className='card temp'>
                    <div className='name'>Temperature</div>
                    <div className='value'>{Math.trunc(parseInt(temp))}<sup><span className='sup'></span></sup>C</div>
                </div>
                <div className='card oxy'>
                    <div className='name'>Oxygen</div>
                    <div className='value'>{Math.trunc(parseInt(spo))}</div>
                </div>
                <div className='card time'>
                    <div className='name'>Time Spent</div>
                    <div className='value'>2h 36m</div>
                </div>
            </div>
            <div className='second-row'>
                <div className='card pulse'>
                    <div className='name'>Pulse</div>
                    <div className='semi-circle'></div>
                    <div className='quarter-circle'></div>
                    <div className='value move-bottom'>{Math.trunc(parseInt(pulse))} <sub>bpm</sub></div>
                </div>
                <div className='card steps'>
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
