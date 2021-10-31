import React, { useState, useEffect } from 'react';
import Modal from '../../Components/Modal/Modal';
//import validateInfo from './validateInfo';
import useForm from './useForm';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Verification.css'

function Verify({submitForm, history}:{submitForm : any; history : any}){
    const[value, setValue] = useState("");
    const {handleChange, values, handleSubmit, errors, success, confirm} = useForm(submitForm, value);{/*validateInfo*/}

    const[openModal, setOpenModal] = useState(false)

    const childToParent1 = (childdata1: React.SetStateAction<string>) => {
        setValue(childdata1);
    }

    useEffect(() => {
        errors.message && toast.error(errors.message);
        errors.deviceid && toast.error(errors.deviceid);
      }, [errors]);
      useEffect(() => {
        success && confirm && history.push("/register");
      }, [success]);

    return (
        <div>
            <h1 className="title-2">Verify</h1>
            <h3 className="subtitle-2">Enter the S<span>f</span>UIT code to verify</h3>
        <div className="form-content-right-2">
            <img src="img/demo.png" alt="" className="demo" />
            <img src="img/verify.png" alt="" className="demo-2" />
            <form className="form-2" onSubmit={handleSubmit} noValidate>
                <div className="form-inputs-2">
                    <div className="inputcolor">1</div>
                    <input id="deviceid" type="text" name="deviceid" autoComplete="off" className="form-input-2" style={{textAlign: "center"}} required placeholder="Enter Code" value={value} onChange={handleChange}></input>
                </div>
                {errors.deviceid && <p>{errors.deviceid}</p>}
                <div className="form-input-btn-2" onClick={() => {setOpenModal(true)}}>
                    <p><i className="fas fa-camera"></i>Scan QR Code</p>
                </div>
                <div className="form-input-btn-2">
                    <button>Register</button>
                </div>
                <ToastContainer />
            </form>
                {openModal && <Modal closeModal={setOpenModal} childToParent1={childToParent1}/>}
        </div>
        </div>
    )
}

export default Verify;