import React from "react";
import SideBar from "./SideBar";

function HomePage() {
  return (
    <div>
      {/* <h2>Welcome to the homepage</h2>
      <p>This is a protected route. Only visible after login.</p> */}
      <SideBar></SideBar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default HomePage;
