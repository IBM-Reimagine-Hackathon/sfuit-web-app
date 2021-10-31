import React from 'react'
import "./EmailVerification.css"

function EmailVerification() {
    return (
        <div className="verify-container">
            <div className="verify-body">
                <h1>Verification Email Sent!!</h1>
                <i className="far fa-check-circle"></i>
                <p>A verification email has been sent to your email id. Please verify your email to continue</p>
            </div>
        </div>
    )
}

export default EmailVerification