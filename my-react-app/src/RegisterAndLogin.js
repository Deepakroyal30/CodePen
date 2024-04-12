import React, { useState } from "react";
import { database } from "./FireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css"; // Assuming you've stored the provided CSS in a file named styles.css

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of history

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/Compiler"); // Navigate to "/Compiler" after signup
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/Compiler"); // Navigate to "/Compiler" after login
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  return (
    <div className="App1">
      <div className="form-container">
        {/* Registration and login Screen */}
        <div className="row">
          <div
            className={login === false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SIGN UP
          </div>
          <div
            className={login === true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SIGN IN
          </div>
        </div>
        <h1>{login ? "SIGN IN" : "SIGN UP"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input name="email" placeholder="Email" />
          <br />
          <input name="password" type="password" placeholder="Password" />
          <br />
          <button className="btn3">{login ? "SignIn" : "SignUp"}</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAndLogin;
