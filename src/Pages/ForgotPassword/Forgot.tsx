import React, {useEffect} from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ForgotPassword.css'

function Forgot({submitForm, history}:{submitForm : any; history : any}){
    const {handleChange, values, handleSubmit, errors, success} = useForm(submitForm, validateInfo);
    
    useEffect(() => {
        errors.message && toast.error(errors.message);
        errors.email && toast.error(errors.email);
      }, [errors]);
      useEffect(() => {
        success && history.push("/login");
      }, [success]);

    return (
        <div>
            <h1 className="title-3">Forgot Password</h1>
        <div className="form-content-right-3">
            <form className="form-3" onSubmit={handleSubmit}>
                <div className="form-inputs-3">
                    <div className="inputcolor1">1</div>
                    <input id="forgotpassword" type="email" name="forgotpassword" autoComplete="off" className="form-input-3" style={{textAlign: "left", padding: "20px"}} required placeholder="Enter Email" value={values.email} onChange={handleChange}></input>
                    {errors.forgotpassword && <p>{errors.forgotpassword}</p>}
                </div>
                <div className="form-input-btn-3">
                    <button>Send Email</button>
                </div>
                <ToastContainer />
            </form>
        </div>
        </div>
    )
}

export default Forgot;