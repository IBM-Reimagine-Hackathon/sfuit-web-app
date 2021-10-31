import React, {useEffect} from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ResetPassword.css'

function Forgot({submitForm, history}:{submitForm : any; history : any}){
    const {handleChange, values, handleSubmit, errors, success} = useForm(submitForm, validateInfo);
    
    useEffect(() => {
        errors.message && toast.error(errors.message);
        errors.password && toast.error(errors.password);
        errors.confirmPassword && toast.error(errors.confirmPassword);
      }, [errors]);
      useEffect(() => {
        success && history.push("/login");
      }, [success]);

    return (
        <div>
            <h1 className="title-4">Reset Password</h1>
        <div className="form-content-right-4">
            <form className="form-4" onSubmit={handleSubmit}>
            <div className="form-inputs-4">
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        autoComplete="off" 
                        className="form-input-4" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Password" 
                        value={values.password} 
                        onChange={handleChange}
                    ></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
            <div className="form-inputs-4">
                    <input 
                        id="confirmPassword" 
                        type="password" 
                        name="confirmPassword" 
                        autoComplete="off" 
                        className="form-input-4" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Confirm Password" 
                        value={values.confirmPassword} 
                        onChange={handleChange}
                    ></input>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div className="form-input-btn-4">
                    <button>Reset Password</button>
                </div>
                <ToastContainer />
            </form>
        </div>
        </div>
    )
}

export default Forgot;