import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';

import './Register.css';

function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            <img src="img/register.png" className="form-img" />
            {!isSubmitted ? (<SignUp submitForm={submitForm} />) : (<Redirect to="/register/verification" />)}
        </div>
    )
}

export default Register