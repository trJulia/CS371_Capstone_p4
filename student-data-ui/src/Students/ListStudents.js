import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

function ListStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4545/students")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch students");
                }
                return response.json();
            })
            .then((data) => {
                setStudents(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div>
        <h2 className="text-center mb-4">Student List</h2>
        <Navbar />

        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Hours Studied</th>
                        <th>Attendance</th>
                        <th>Parental Involvement</th>
                        <th>Access to Resources</th>
                        <th>Extracurricular Activities</th>
                        <th>Sleep Hours</th>
                        <th>Previous Scores</th>
                        <th>Motivation Level</th>
                        <th>Internet Access</th>
                        <th>Tutoring Sessions</th>
                        <th>Family Income</th>
                        <th>Teacher Quality</th>
                        <th>School Type</th>
                        <th>Peer Influence</th>
                        <th>Physical Activity</th>
                        <th>Learning Disabilities</th>
                        <th>Parental Education Level</th>
                        <th>Distance from Home</th>
                        <th>Gender</th>
                        <th>Exam Score</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.Hours_Studied}</td>
                            <td>{student.Attendance}</td>
                            <td>{student.Parental_Involvement}</td>
                            <td>{student.Access_to_Resources}</td>
                            <td>{student.Extracurricular_Activities}</td>
                            <td>{student.Sleep_Hours}</td>
                            <td>{student.Previous_Scores}</td>
                            <td>{student.Motivation_Level}</td>
                            <td>{student.Internet_Access}</td>
                            <td>{student.Tutoring_Sessions}</td>
                            <td>{student.Family_Income}</td>
                            <td>{student.Teacher_Quality}</td>
                            <td>{student.School_Type}</td>
                            <td>{student.Peer_Influence}</td>
                            <td>{student.Physical_Activity}</td>
                            <td>{student.Learning_Disabilities}</td>
                            <td>{student.Parental_Education_Level}</td>
                            <td>{student.Distance_from_Home}</td>
                            <td>{student.Gender}</td>
                            <td>{student.Exam_Score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ListStudents;