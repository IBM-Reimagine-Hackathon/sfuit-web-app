import React, {useEffect} from 'react';
import useForm from './useForm';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OTP.css"
import validateInfo from './validateInfo';

function OTP({submitForm}:{submitForm : any;}){
    const {handleChange, values, handleSubmit, errors, success} = useForm(
        submitForm,
        validateInfo
    );
    let history = useHistory();

    useEffect(() => {
      errors.otp && toast.error(errors.otp);
    }, [errors]);
    useEffect(() => {
      success && history.push("/login");
    }, [success]);

    return (
        <div>
            <h1 className="title-4">Verify Email</h1>
            <h3 className="subtitle-4">Enter OTP to verify your Email Address</h3>
        <div className="form-content-right">
            <form className="form-4" onSubmit={handleSubmit} noValidate>
                <div className="form-inputs">
                    <input 
                        id="otp" 
                        type="text" 
                        name="otp" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Enter OTP" 
                        value={values.otp} 
                        onChange={handleChange}
                    ></input>
                    {errors.otp && <p>{errors.otp}</p>}
                </div>
                <div className="form-input-btn">
                    <button type="submit">Verify</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
        </div>
    )
}

export default OTP;