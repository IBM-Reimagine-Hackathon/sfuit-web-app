import React, {useState} from 'react'
import QrCode from '../QrCode/QrCode'
import './Modal.css'

function Modal({ closeModal, childToParent1 }:{closeModal : any; childToParent1 : any;}) {
    const[data, setData] = useState("");
    const childToParent = (childdata: React.SetStateAction<string>) => {
        setData(childdata);
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <div onClick={() => closeModal(false)}> X </div>
                </div>
                <QrCode childToParent={childToParent}/>
                {childToParent1(data)}
                {data && closeModal(false)}
            </div>
        </div>
    )
}

export default Modal
