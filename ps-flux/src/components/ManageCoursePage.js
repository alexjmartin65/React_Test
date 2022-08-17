import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    useEffect(() => {
        const slug = props.match.params.slug; // from /courses/:slug
        if (slug) {
            courseApi.getCourseBySlug(slug).then((_course) => {
                setCourse(_course);
            });
        }
    }, [props.match.params.slug]);

    // function handleTitleChange(event) {
    //     const updatedCourse = { ...course, title: event.target.value };
    //     setCourse(updatedCourse);
    // }

    function handleChange({ target }) {
        const updatedCourse = {
            ...course,
            [target.name]: target.value,
        };
        setCourse(updatedCourse);
    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) {
            _errors.title = "Title is Required";
        }

        if (!course.category) {
            _errors.category = "Category is Required";
        }

        if (!course.authorId) {
            _errors.authorId = "Author is Required";
        }

        setErrors(_errors);
        //Form is valid if errors has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) {
            return;
        }

        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course Saved");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
            {/* {props.match.params.slug} */}
            <CourseForm
                course={course}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default ManageCoursePage;
