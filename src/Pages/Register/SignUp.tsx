import React, {useEffect} from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Register.css'

const current = new Date().toISOString().split("T")[0];

function SignUp({submitForm}:{submitForm : any;}){
    const {handleChange, values, handleSubmit, errors, success} = useForm(
        submitForm, 
        validateInfo
    );
    let history = useHistory();

    useEffect(() => {
      errors.message && toast.error(errors.message);
      errors.email && toast.error(errors.email);
      errors.name && toast.error(errors.name);
      errors.dob && toast.error(errors.dob);
      errors.phone && toast.error(errors.phone)
      errors.password && toast.error(errors.password);
      errors.confirmPassword && toast.error(errors.confirmPassword);
    }, [errors]);
    useEffect(() => {
      success && history.push("/register/verification");
    }, [success]);

    return (
        <div>
            <h1 className="title">Join</h1>
            <h3 className="subtitle">Join us in our journey</h3>
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form-inputs">
                    <input 
                        id="email" 
                        type="email"
                        name="email" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Email Address" 
                        value={values.email} 
                        onChange={handleChange}
                    ></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <input 
                        id="name" 
                        type="text" 
                        name="name" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Name" 
                        value={values.name} 
                        onChange={handleChange}
                    ></input>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <input 
                        id="dob" 
                        type="date" 
                        name="dob" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        value={values.dob} 
                        onChange={handleChange}
                        max={current}
                    ></input>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <input 
                        id="phone" 
                        type="text" 
                        name="phone" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Phone Number" 
                        value={values.phone} 
                        onChange={handleChange}
                    ></input>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Password" 
                        value={values.password} 
                        onChange={handleChange}
                    ></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <input 
                        id="confirmPassword" 
                        type="password" 
                        name="confirmPassword" 
                        autoComplete="off" 
                        className="form-input" 
                        style={{textAlign: "left", padding: "20px"}} 
                        required 
                        placeholder="Confirm Password" 
                        value={values.confirmPassword} 
                        onChange={handleChange}
                    ></input>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div className="form-input-btn">
                    <button type="submit">Register</button>
                    <ToastContainer />
                </div>
                <span className="form-input-login">
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
        </div>
    )
}

export default SignUp;