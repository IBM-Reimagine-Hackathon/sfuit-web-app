import React, { useEffect, useState } from 'react'
import socket from '../../Socket';
import './Board.css'

function Board() {
    const device_id: any=localStorage.getItem('device_id')
    const[pulse, setPulse] = useState<string>('0');
    const[spo, setSpo] = useState<string>('0');
    const[temp, setTemp] = useState<string>('32');
    const[deviceId, setDeviceId] = useState<string>('');
    const[std, setStd] = useState<string>('32');
    useEffect(()=>{
        socket.on(device_id,(Data: any)=>{
            setPulse(Data.data.Pulse);
            setSpo(Data.data.SpO2);
            setTemp(Data.data.temperature);
            setDeviceId(Data.data.device_id);
        })
    },[])

    return (
        <div className='board-container'>
            <div className='board-heading'>Overview</div>
            <div className='time-container'>
                <div className='time'>Device ID: {localStorage.getItem('device_id')}</div>
            </div>
            <div className='first-row'>
                <div className='card temp'>
                    <div className='name'>Temperature</div>
                    <div className='value'>{parseInt(temp) > 85 && parseInt(temp) < 99 ? Math.trunc(parseInt(temp)) && setStd(temp) : std}<sup><span className='sup'></span></sup>F</div>
                </div>
                <div className='card oxy'>
                    <div className='name'>Oxygen</div>
                    <div className='value'>{Math.trunc(parseInt(spo))}</div>
                </div>
                <div className='card time'>
                    <div className='name'>Time Spent</div>
                    <div className='value'>0h 0m</div>
                </div>
            </div>
            <div className='second-row'>
                <div className='card pulse'>
                    <div className='name'>Pulse</div>
                    <div className='semi-circle'></div>
                    <div className='quarter-circle'></div>
                    <div className='value move-bottom'>{Math.trunc(parseInt(pulse))} <sub>bpm</sub></div>
                </div>
            </div>
        </div>
    )
}

export default Board