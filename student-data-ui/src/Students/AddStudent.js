import React, { useState } from "react";
import Navbar from "../Navbar";

function AddStudent() {
    const [formData, setFormData] = useState({
        Hours_Studied: "",
        Attendance: "",
        Parental_Involvement: "",
        Access_to_Resources: "",
        Extracurricular_Activities: "",
        Sleep_Hours: "",
        Previous_Scores: "",
        Motivation_Level: "",
        Internet_Access: "",
        Tutoring_Sessions: "",
        Family_Income: "",
        Teacher_Quality: "",
        School_Type: "",
        Peer_Influence: "",
        Physical_Activity: "",
        Learning_Disabilities: "",
        Parental_Education_Level: "",
        Distance_from_Home: "",
        Gender: "",
        Exam_Score: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:4545/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add student");
                }
                return response.json();
            })
            .then((data) => {
                alert(data.message || "Student added successfully!");
                setFormData({
                    Hours_Studied: "",
                    Attendance: "",
                    Parental_Involvement: "",
                    Access_to_Resources: "",
                    Extracurricular_Activities: "",
                    Sleep_Hours: "",
                    Previous_Scores: "",
                    Motivation_Level: "",
                    Internet_Access: "",
                    Tutoring_Sessions: "",
                    Family_Income: "",
                    Teacher_Quality: "",
                    School_Type: "",
                    Peer_Influence: "",
                    Physical_Activity: "",
                    Learning_Disabilities: "",
                    Parental_Education_Level: "",
                    Distance_from_Home: "",
                    Gender: "",
                    Exam_Score: "",
                });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error adding student");
            });
    };

    return (
        <div>
            <h2 className="text-center mb-4">Add Student</h2>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="Hours_Studied">Hours Studied</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Hours_Studied"
                                name="Hours_Studied"
                                value={formData.Hours_Studied}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Attendance">Attendance</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Attendance"
                                name="Attendance"
                                value={formData.Attendance}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Parental_Involvement">Parental Involvement</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Parental_Involvement"
                                name="Parental_Involvement"
                                value={formData.Parental_Involvement}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Access_to_Resources">Access to Resources</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Access_to_Resources"
                                name="Access_to_Resources"
                                value={formData.Access_to_Resources}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Extracurricular_Activities">Extracurricular Activities</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Extracurricular_Activities"
                                name="Extracurricular_Activities"
                                value={formData.Extracurricular_Activities}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Sleep_Hours">Sleep Hours</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Sleep_Hours"
                                name="Sleep_Hours"
                                value={formData.Sleep_Hours}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Previous_Scores">Previous Scores</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Previous_Scores"
                                name="Previous_Scores"
                                value={formData.Previous_Scores}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Motivation_Level">Motivation Level</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Motivation_Level"
                                name="Motivation_Level"
                                value={formData.Motivation_Level}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Internet_Access">Internet Access</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Internet_Access"
                                name="Internet_Access"
                                value={formData.Internet_Access}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Tutoring_Sessions">Tutoring Sessions</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Tutoring_Sessions"
                                name="Tutoring_Sessions"
                                value={formData.Tutoring_Sessions}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="Family_Income">Family Income</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Family_Income"
                                name="Family_Income"
                                value={formData.Family_Income}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Teacher_Quality">Teacher Quality</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Teacher_Quality"
                                name="Teacher_Quality"
                                value={formData.Teacher_Quality}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="School_Type">School Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="School_Type"
                                name="School_Type"
                                value={formData.School_Type}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Peer_Influence">Peer Influence</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Peer_Influence"
                                name="Peer_Influence"
                                value={formData.Peer_Influence}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Physical_Activity">Physical Activity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Physical_Activity"
                                name="Physical_Activity"
                                value={formData.Physical_Activity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Learning_Disabilities">Learning Disabilities</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Learning_Disabilities"
                                name="Learning_Disabilities"
                                value={formData.Learning_Disabilities}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Parental_Education_Level">Parental Education Level</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Parental_Education_Level"
                                name="Parental_Education_Level"
                                value={formData.Parental_Education_Level}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Distance_from_Home">Distance from Home</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Distance_from_Home"
                                name="Distance_from_Home"
                                value={formData.Distance_from_Home}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Gender">Gender</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Gender"
                                name="Gender"
                                value={formData.Gender}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Exam_Score">Exam Score</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Exam_Score"
                                name="Exam_Score"
                                value={formData.Exam_Score}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddStudent;


