import React, { useState } from "react";
import "../styles/styles.css";
import img from "../images/pic.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });
  const [confirmPass, setComfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setComfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setComfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <div className="Auth">
      {/*left side */}
      <div className="a-left">
        <img src={img} alt="" />
      </div>
      {/* Right side*/}
      <div className="a-right">
        <form className="info-form authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          <div>
            {isSignUp && (
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="info-input"
                  name="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="info-input"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                />
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              className="info-input"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
          <input
            type="password"
            className="info-input"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />
          {isSignUp && (
            <input
              type="password"
              className="info-input"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmpass}
            />
          )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *Confirm Password is not same
        </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Signup"}
            </span>
          </div>
         
         
          <button className="share-btn info-button" type="submit" >
            { isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
