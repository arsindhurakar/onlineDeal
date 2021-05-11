import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Signin.scss";

import { Button, Input, Logo } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";
import { userSignin } from "../../features/userSlice";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { signin } = useAuth();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      await signin(email, password)
        .then((res) => {
          dispatch(
            userSignin({
              uid: res.user.uid,
              name: res.user.displayName,
              email: res.user.email,
            })
          );
        })
        .then(() => history.push("/"));
    } catch (error) {
      setTimeout(() => {
        error.code === "auth/too-many-requests" &&
          setErrorMessage("Too many failed attempts. Please try again later.");
        error.code === "auth/user-not-found" &&
          setErrorMessage("Please enter a valid email address.");
        error.code === "auth/wrong-password" &&
          setErrorMessage("Incorrect password. Please try again.");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="signin">
      <div className="signin__logo">
        <Logo />
      </div>
      <div className="signin__wrapper">
        {errorMessage && (
          <p>
            <span className="signin__failed">{errorMessage}</span>
          </p>
        )}
        <div className="signin__container">
          <h2>Sign In</h2>
          <form onSubmit={handleSignin} className="signin__form">
            <div className="registration__inputField">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email (Phone for mobile accounts)"
                type="email"
                autoFocus
                required
              />
            </div>
            <div className="registration__inputField">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                nextLabel="Forgot your password?"
                type="password"
                required
              />
            </div>
            <Button disabled={loading}>Sign In</Button>
          </form>
          <div className="signin__newAccount">
            <p>New to OnlineDeal?</p>
            <Button secondary onClick={() => history.push("/registration")}>
              Create your OnlineDeal Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
