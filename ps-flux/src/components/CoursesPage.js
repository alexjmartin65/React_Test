import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

// class CoursesPage extends React.Component {
//   state = {
//     courses: [],
//   };

/*
    constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
*/

/*
  renderRow(course) {
    return (
      <tr>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }
*/

//   componentDidMount() {
//     getCourses().then((courses) => this.setState({ courses: courses }));
//   }

//   render() {
//     return (
//       <>
//         <h2>Courses</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author Id</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map((course) => {
//               return (
//                 <tr key={course.id}>
//                   <td>{course.title}</td>
//                   <td>{course.authorId}</td>
//                   <td>{course.category}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((_courses) => setCourses(_courses));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;
