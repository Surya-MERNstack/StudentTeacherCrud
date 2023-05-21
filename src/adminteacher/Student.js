import React, { useState } from "react";
import './Student.css'

const Student = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    const newStudent = { ...formData, id: students.length + 1 };
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setFormData({
      id: "",
      name: "",
      age: "",
      email: ""
    });
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h2>Student Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br/>
         <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /><br/>
        <label>Age</label><br/>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <br /><br/>
        <label>Email</label><br/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br/>
        <button type="submit">Add Student</button>
      </form>
      <h3 style={{color:"green"}}>Student List:</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} years old - {student.email}
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
