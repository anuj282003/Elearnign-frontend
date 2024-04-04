// CourseComponent.js
import React from "react";
import LectureComponent from "./LectureComponent";

const CourseComponent = ({ course, lectures }) => {
  return (
    <div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <h4>Lectures</h4>
      {lectures.map((lecture) => (
        <LectureComponent key={lecture.lectureId} lecture={lecture} />
      ))}
    </div>
  );
};

export default CourseComponent;
