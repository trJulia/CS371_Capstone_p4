import React, { useState } from "react";
import Navbar from "../Navbar";

function SearchStudent() {
    const [studentId, setStudentId] = useState("");
    const [student, setStudent] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        fetch(`http://localhost:4545/students/${studentId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Student not found");
                }
                return response.json();
            })
            .then((data) => {
                setStudent(data);
                setError("");
            })
            .catch((err) => {
                setStudent(null);
                setError(err.message);
            });
    };

    return (
        <div>
            <h2 className="text-center mb-4">Search Student</h2>
            <Navbar />

            <form onSubmit={handleSearch}>
                <div className="mb-3">
                    <label htmlFor="studentId" className="form-label">Student ID</label>
                    <input
                        type="text"
                        id="studentId"
                        className="form-control"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Search</button>
            </form>

            {error && <div className="alert alert-danger mt-4">{error}</div>}

            {student && (
                <div className="mt-4">
                    <h3>Student Details</h3>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{student.id}</td>
                            </tr>
                            <tr>
                                <th>Hours Studied</th>
                                <td>{student.Hours_Studied}</td>
                            </tr>
                            <tr>
                                <th>Attendance</th>
                                <td>{student.Attendance}</td>
                            </tr>
                            <tr>
                                <th>Parental Involvement</th>
                                <td>{student.Parental_Involvement}</td>
                            </tr>
                            <tr>
                                <th>Access to Resources</th>
                                <td>{student.Access_to_Resources}</td>
                            </tr>
                            <tr>
                                <th>Extracurricular Activities</th>
                                <td>{student.Extracurricular_Activities}</td>
                            </tr>
                            <tr>
                                <th>Sleep Hours</th>
                                <td>{student.Sleep_Hours}</td>
                            </tr>
                            <tr>
                                <th>Previous Scores</th>
                                <td>{student.Previous_Scores}</td>
                            </tr>
                            <tr>
                                <th>Motivation Level</th>
                                <td>{student.Motivation_Level}</td>
                            </tr>
                            <tr>
                                <th>Internet Access</th>
                                <td>{student.Internet_Access}</td>
                            </tr>
                            <tr>
                                <th>Tutoring Sessions</th>
                                <td>{student.Tutoring_Sessions}</td>
                            </tr>
                            <tr>
                                <th>Family Income</th>
                                <td>{student.Family_Income}</td>
                            </tr>
                            <tr>
                                <th>Teacher Quality</th>
                                <td>{student.Teacher_Quality}</td>
                            </tr>
                            <tr>
                                <th>School Type</th>
                                <td>{student.School_Type}</td>
                            </tr>
                            <tr>
                                <th>Peer Influence</th>
                                <td>{student.Peer_Influence}</td>
                            </tr>
                            <tr>
                                <th>Physical Activity</th>
                                <td>{student.Physical_Activity}</td>
                            </tr>
                            <tr>
                                <th>Learning Disabilities</th>
                                <td>{student.Learning_Disabilities}</td>
                            </tr>
                            <tr>
                                <th>Parental Education Level</th>
                                <td>{student.Parental_Education_Level}</td>
                            </tr>
                            <tr>
                                <th>Distance from Home</th>
                                <td>{student.Distance_from_Home}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{student.Gender}</td>
                            </tr>
                            <tr>
                                <th>Exam Score</th>
                                <td>{student.Exam_Score}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default SearchStudent;
