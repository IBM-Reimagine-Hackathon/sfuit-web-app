import React, { useEffect } from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function SignIn({ submitForm }:{submitForm: any;}) {
  const { handleChange, values, handleSubmit, errors, success } = useForm(
    submitForm,
    validateInfo
  );

  let history = useHistory();

  useEffect(() => {
    errors.message && toast.error(errors.message);
    errors.email && toast.error(errors.email);
  }, [errors]);
  useEffect(() => {
    success && history.push('/');
  }, [success]);

  return (
    <div>
      <h1 className="title-1">Enter</h1>
      <h3 className="subtitle-1">Login and start monitoring</h3>
      <div className="form-content-right-1">
        <form className="form-1" onSubmit={handleSubmit} noValidate>
          <div className="form-inputs-1">
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              className="form-input-1"
              style={{ textAlign: "left", padding: "20px" }}
              required
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs-1">
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              className="form-input-1"
              style={{ textAlign: "left", padding: "20px" }}
              required
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-input-btn-1">
            <button type="submit">Login</button>
            <ToastContainer />
          </div>
          <span className="form-input-login-1">
            Don't have an account? <Link to="/verification">Create an account</Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
