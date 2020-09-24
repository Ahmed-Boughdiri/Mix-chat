import React from "react";
import "../layout/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <form className="form-signin">
          <h2 className="form-signin-heading">Login</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            style={{marginBottom: "10px"}}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
          <div className="dont-account">
              <p>I Don't Have An Account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
