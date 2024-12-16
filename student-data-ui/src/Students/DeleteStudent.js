import React, { useState } from "react";
import Navbar from "../Navbar";

function DeleteStudent() {
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4545/students/${id}`, {
            method: "DELETE",
        })
            .then(() => alert("Student deleted successfully!"))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            <h2 className="text-center mb-4">Delete Student</h2>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Student ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button type="submit">Delete Student</button>
            </form>
        </div>
    );
}

export default DeleteStudent;