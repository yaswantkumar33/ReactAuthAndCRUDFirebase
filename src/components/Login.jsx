import React from "react";

export default function Login() {
  return (
    <>
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a
                className="link signup-link"
                onClick={() => {
                  setflag(false);
                }}
              >
                Signup
              </a>
            </span>
          </div>
        </div>
        <div className="line" />
        <div className="media-options">
          <a className="field google link">
            <img src="images/google.png" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </>
  );
}
