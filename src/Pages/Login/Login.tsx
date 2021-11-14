import React, {useState} from 'react';
import SignIn from './SignIn';
import './Login.css';
import { Redirect } from 'react-router-dom';

function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            <img src="img/login.png" className="form-img-1" />
            {!isSubmitted ? (<SignIn submitForm={submitForm} />) : <Redirect to="/" />}
        </div>
    )
}

export default Login