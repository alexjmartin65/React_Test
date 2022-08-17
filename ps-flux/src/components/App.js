import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "../common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route == "/about") {
    //         return <AboutPage />;
    //     } else if (route == "/courses") {
    //         return <CoursesPage />;
    //     } else {
    //         return <HomePage />;
    //     }
    // }

    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header></Header>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course/" component={ManageCoursePage} />
                <Redirect path="/about-page" to="about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
