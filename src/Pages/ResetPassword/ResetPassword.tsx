import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Reset from './Reset';

import './ResetPassword.css';

function ResetPassword() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (<Reset submitForm={submitForm} history={undefined} />) : (<Redirect to="/login" />)}
        </div>
    )
}

export default ResetPassword