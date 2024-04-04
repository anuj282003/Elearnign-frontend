// import React from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation

// const UserDashboardComponent = () => {
//   const location = useLocation(); // Use useLocation hook to get location

//   if (!location.state) {
//     // Handle case when state is undefined
//     return <div>Loading...</div>;
//   }

//   const { user } = location.state; // Destructure user from location.state

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
//       {/* Display other user details as needed */}
//     </div>
//   );
// };

// export default UserDashboardComponent;
import React from "react";
import CourseComponent from "./CourseComponent";
import { useLocation } from "react-router-dom";

const UserDashboardComponent = () => {
  const location = useLocation();

  if (!location.state) {
    return <div>Loading...</div>;
  }

  const { user, courses } = location.state;

  return (
    <div>
      <div>
        <h2>User Details</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>

      <div>
        <h2>Courses</h2>
        {/* {courses.map((course) => (
          <CourseComponent
            key={course.courseId}
            course={course}
            lectures={course.lectures} // Pass lectures for each course
          />
        ))} */}
      </div>
    </div>
  );
};

export default UserDashboardComponent;
