import React, { useRef } from "react";
import { loginRequest } from "../../store/auth/actions";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = (props) => {
  const emailRef = useRef(null); 
  const passwordRef = useRef(null);

  const callback = (data) => {
    console.log("Inside callback after login");
  };

  const login = () => {
    if (emailRef.current && passwordRef.current) {
      let data = {
        values: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
        callback,
      };
      props.login(data);
    } else {
      console.error("Email or password ref is not properly initialized.");
    }
  };

  return (
    <>
    <div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          name="email"
          id="floatingInput"
          placeholder="name@example.com"
          ref={emailRef}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating mt-3">
        <input
          type="password"
          className="form-control"
          name="password"
          id="floatingPassword"
          placeholder="Password"
          ref={passwordRef}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3 mt-3">
        <label>
          <input name="remember" type="checkbox" defaultValue="remember-me" />{" "}
          Remember me
        </label>
      </div>
      <button
        onClick={() => {
          login();
        }}
        className="w-100 btn btn-lg btn-warning"
        >
        Sign in
        </button>
        </div>
        </>
        );
    };

const mapDispatchToProps = (dispatch) => ({
  login: (params) => dispatch(loginRequest(params)),
});

export default connect(null, mapDispatchToProps)(Login);
