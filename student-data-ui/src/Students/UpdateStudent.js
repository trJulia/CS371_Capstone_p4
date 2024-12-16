import React, { useState } from "react";
import Navbar from "../Navbar";

function UpdateStudent() {
    const [formData, setFormData] = useState({
        id: "",
        Hours_Studied: "",
        Attendance: "",
        Exam_Score: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4545/students/${formData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(() => alert("Student updated successfully!"))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            <h2 className="text-center mb-4">Update Student</h2>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="Student ID"
                    value={formData.id}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="Hours_Studied"
                    placeholder="Hours Studied"
                    value={formData.Hours_Studied}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="Attendance"
                    placeholder="Attendance"
                    value={formData.Attendance}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="Exam_Score"
                    placeholder="Exam Score"
                    value={formData.Exam_Score}
                    onChange={handleChange}
                />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}

export default UpdateStudent;
