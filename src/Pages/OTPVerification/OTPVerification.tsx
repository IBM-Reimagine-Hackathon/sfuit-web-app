import React, { useState } from "react";
import OTP from "./OTP";
// import "./Verification.css";
import { Redirect } from "react-router-dom";

function OTPVerification() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <img src="img/otp.png" className="form-img-2" />
      {!isSubmitted ? (
        <OTP submitForm={submitForm} />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default OTPVerification;
