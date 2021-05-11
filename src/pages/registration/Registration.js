import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Registration.scss";

import { Logo, Input, Button } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";
import { userSignin } from "../../features/userSlice";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { register } = useAuth();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    if (password !== passwordAgain) {
      setTimeout(() => {
        setErrorMessage("Passwords do not match. Please try again.");
        setLoading(false);
      }, 1000);
      return;
    }
    try {
      setLoading(true);
      setErrorMessage("");
      await register(name, email, password).then((res) => {
        res.user
          .updateProfile({
            displayName: name,
          })
          .then(() =>
            dispatch(
              userSignin({
                uid: res.user.uid,
                name: res.user.displayName,
                email: res.user.email,
              })
            )
          );
      });
      setSuccessMessage("Registered successfully");
      setTimeout(() => history.push("/"), 1000);
    } catch (error) {
      setTimeout(() => {
        error.code === "auth/weak-password" &&
          setErrorMessage("Password should be at least six characters.");
        error.code === "auth/email-already-in-use" &&
          setErrorMessage("Email already registered.");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="registration">
      <div className="registration__logo">
        <Logo />
      </div>
      <div className="registration__wrapper">
        {errorMessage && (
          <p>
            <span className="registration__failed">{errorMessage}</span>
          </p>
        )}
        {successMessage && (
          <p>
            <span className="registration__success">{successMessage}</span>
          </p>
        )}
        <div className="registration__container">
          <h2>Registration</h2>
          <form onSubmit={handleRegistration} className="registration__form">
            <div className="registration__inputField">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                type="text"
                autoFocus
                required
              />
            </div>
            <div className="registration__inputField">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email (Phone for mobile accounts)"
                type="email"
                required
              />
            </div>
            <div className="registration__inputField">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                required
              />
            </div>
            <div className="registration__inputField">
              <Input
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                label="Password Again"
                type="password"
                required
              />
            </div>
            <Button disabled={loading}>Proceed</Button>
          </form>

          <p>
            By creating an account, you agree to OnlineDeal's{" "}
            <span>Conditions of Use</span> and <span>Privacy Notice</span>
          </p>
          <p>
            Already have an account?{" "}
            <span onClick={() => history.push("/signin")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
