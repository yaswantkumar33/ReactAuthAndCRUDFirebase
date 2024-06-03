import React from "react";
export default function Signup(props) {
  return (
    <>
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <p style={{ color: "red" }}>
            {props.errval.emailerr && props.errval.emailerr}
          </p>
          <p style={{ color: "red" }}>
            {props.errval.passworderr && props.errval.passworderr}
          </p>
          <form
            action="#"
            onSubmit={(e) => {
              props.Signupsubmit(e);
            }}
          >
            <div className="field input-field">
              <input
                // type="email"
                placeholder="Email"
                className="input"
                name="email"
                onChange={(e) => {
                  props.onChangeHandeler(e.target.name, e.target.value);
                }}
                value={props.Vals.email}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
                name="password"
                onChange={(e) => {
                  props.onChangeHandeler(e.target.name, e.target.value);
                }}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?
              <a
                className="link login-link"
                onClick={() => {
                  props.setflag(true);
                }}
              >
                Login
              </a>
            </span>
          </div>
        </div>
        <div className="line" />
        <div className="media-options">
          <a className="field google link" onClick={props.signupwithgoogle}>
            <img src="images/google.png" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </>
  );
}
