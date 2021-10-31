import React, {useState} from 'react';
import Forgot from './Forgot';
import './ForgotPassword.css';

function ForgotPassword() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            <img src="img/forgot.png" className="form-img-3" />
            {!isSubmitted ? (<Forgot submitForm={submitForm} history={undefined} />) : console.log("Success")}
        </div>
    )
}

export default ForgotPassword