import React, { memo, useState } from "react";
import "./SignForm.css"; // Import your CSS file

const Form = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can perform validation or API calls here
    if (isSignUp) {
      // Handle sign up
      console.log("Sign Up:", name, email, password);
    } else {
      // Handle sign in
      console.log("Sign In:", email, password);
    }
  };

  return (
    <div>
      {props.isVisibleset && (
        <div className="full_sign_page">
          <div className="flex_cancel_btn">
            <button onClick={props.togglecl} className="cancel_btn">
              Close x
            </button>
          </div>
          <div
            className={`container_sign ${isSignUp ? "right-panel-active" : ""}`}
          >
            <div className="form-container sign-up-container">
              <form onSubmit={handleSubmit}>
                <h1 className="headin_form">Create Account</h1>
                <div className="social-container">
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input
                  type="text"
                  className="input_con"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input_con"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input_con"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button_sys_sign" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={handleSubmit}>
                <h1 className="headin_form">Sign in</h1>
                <div className="social-container">
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" id="a_stl" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="input_con"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input_con"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" id="a_stl">
                  Forgot your password?
                </a>
                <button className="button_sys_sign" type="submit">
                  Sign In
                </button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="headin_form">Welcome Back!</h1>
                  <p className="sign_para">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="button_sys_sign ghost"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="headin_form">Hello, Friend!</h1>
                  <p className="sign_para">
                    Enter your personal details and start journey with us
                  </p>
                  <button
                    className=" button_sys_sign ghost"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Form);
