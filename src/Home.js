import React from "react";
import "./Home.css"; // Import CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Welcome to the Student Management System</h2>
                <p>Empowering educators and administrators to efficiently manage student information.</p>
            </div>
            <div className="home-image">
                <img src="/flat-lay-student-using-disinfectant.jpg" alt="Students studying" />
            </div>
        </div>
    );
};

export default Home;
