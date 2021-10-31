import React, { useState } from "react";
import Verify from "./Verify";
import "./Verification.css";
import { Redirect } from "react-router-dom";

function Verification() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <img src="img/verify.png" className="form-img-2" />
      {!isSubmitted ? (
        <Verify submitForm={submitForm} history={undefined} />
      ) : (
        <Redirect to="/register" />
      )}
    </div>
  );
}

export default Verification;
