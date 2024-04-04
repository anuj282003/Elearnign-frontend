import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserForm from "./components/UserForm";
import Dashboard from "./components/UserDashboardComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/createuser" element={<UserForm />} />
        <Route path="/UserDashboardComponent" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
