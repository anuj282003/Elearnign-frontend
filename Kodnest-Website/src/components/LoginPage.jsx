import React, { useState } from "react";
import styles from "../css/LoginPage.module.css";
import { PiEyeSlashLight } from "react-icons/pi";
import ForgetPassword from "./ForgetPassword";
import CreateNewUser from "./CreateNewUser";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import UserDashboardComponent from "./UserDashboardComponent";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the request
    // Here, you would typically perform authentication
    // For simplicity, let's just check if username and password are 'admin'
    // if (username === "admin" && password === "admin") {
    //   onLogin();
    // } else {
    //   alert("Invalid username or password");
    // }
    const newLogin = {
      email,
      password,
    };
    // console.log(newLogin);
    axios
      .post("http://localhost:8080/login", newLogin)
      .then((response) => {
        console.log(response.data);
        setLoading(false); // Set loading back to false after receiving response
        // Redirect to dashboard after successful login
        navigateTo("/UserDashboardComponent", { state: response.data });
        // Clear form fields after submission
        setPassword("");
        setEmail("");
      })
      .catch((error) => {
        setLoading(false); // Set loading back to false if request fails
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className={styles.centerBox}>
      <div className={styles.container}>
        <h2>
          <img
            className={styles.objectContain}
            src="https://app.kodnest.com/logos/kodnest-logo.png"
            alt=""
          />
        </h2>
        <div className={styles.nameandtagcontainer}>
          <h5>Welcome KodNestian!</h5>
          <p>
            Sign In to KodNest and ignite your learning and placement journey
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <fieldset>
              <legend>Email</legend>

              <input
                className={styles.inputField}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className={styles.fieldsetBox}>
              <legend>Password </legend>
              <input
                className={styles.inputField}
                type="password"
                id="password"
                value={password}
                name="passwrod"
                onChange={(e) => setPassword(e.target.value)}
              />
              <PiEyeSlashLight />
            </fieldset>
          </div>
          <div className="d-flex">
            <ForgetPassword></ForgetPassword>
            <CreateNewUser></CreateNewUser>
          </div>

          <button type="submit" disabled={loading}>
            {/* Disable button when loading */}
            {loading ? "Loading..." : "Login"}{" "}
            {/* Change button text based on loading state */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
