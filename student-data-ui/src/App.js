import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import ListStudents from "./Students/ListStudents";
import AddStudent from "./Students/AddStudent";
import UpdateStudent from "./Students/UpdateStudent";
import DeleteStudent from "./Students/DeleteStudent";
import HomePage from "./Students/HomePage";
import SearchStudent from "./Students/SearchStudent";

function App() {
  return (
    <Router>
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list-students" element={<ListStudents />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/update-student" element={<UpdateStudent />} />
            <Route path="/delete-student" element={<DeleteStudent />} />
            <Route path="/search-student" element={<SearchStudent />} />
        </Routes>
    </div>
</Router>
  );
}

export default App;
