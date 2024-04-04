import React, { useState } from "react";
import "../css/UserForm.css"; // Import CSS file for styling
import axios from "axios"; // Import Axios

function UserForm() {
  // State hooks for form data
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a User object from form data
    const newUser = {
      password,
      username,
      email,
      userRole,
    };
    // Send the newUser object to your backend API for further processing (e.g., saving to the database)
    console.log(newUser);
    // Clear form fields after submission
    axios
      .post("http://localhost:8080/add", newUser)
      .then((response) => {
        console.log("User added successfully");
        // Clear form fields after submission
        setPassword("");
        setUsername("");
        setEmail("");
        setUserRole("");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="user-form-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>User Role:</label>
          <div>
            <input
              type="radio"
              id="admin"
              value="Admin"
              checked={userRole === "Admin"}
              onChange={() => setUserRole("Admin")}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div>
            <input
              type="radio"
              id="student"
              value="Student"
              checked={userRole === "Student"}
              onChange={() => setUserRole("Student")}
            />
            <label htmlFor="student">Student</label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
