import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Learn() {
  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === courseId);
  console.log(course);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to="/courses">
          <h2 className={style.back}>{"<<"}</h2>
        </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {course.chapters.map((chapter, i) => {
              return (
                <div className={style.chapterId} key={i}>
                  {/* task-5 create link to each chapter to outlet chapter details */}
                  <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                </div>
              );
            })}
          </ul>
        </div>

        <div className={style.courses}>
          {/**Task5:  Chapter Details Must be rendered here */}
         <Outlet context ={ {...course}}/>

        </div>
      </div>
    </div>
  );
}

export default Learn;
