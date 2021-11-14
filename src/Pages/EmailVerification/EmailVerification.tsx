import React from 'react'
import { Link } from 'react-router-dom';
import "./EmailVerification.css"

function EmailVerification() {
    return (
        <div className="verify-container">
            <div className="verify-body">
                <h1>Verification Email Sent!!</h1>
                <i className="far fa-check-circle"></i>
                <p>A verification email has been sent to your email id. Please verify your email to continue</p>
                <button><Link to="/verifyEmail" className='button'>Verify Email</Link></button>
            </div>
        </div>
    )
}

export default EmailVerification