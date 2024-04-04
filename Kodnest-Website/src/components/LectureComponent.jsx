// LectureComponent.js
import React from "react";

const LectureComponent = ({ lecture }) => {
  return (
    <div>
      <p>Title: {lecture.lectureTitle}</p>
      <p>Path: {lecture.lecturePath}</p>
      {/* Display other lecture details as needed */}
    </div>
  );
};

export default LectureComponent;
