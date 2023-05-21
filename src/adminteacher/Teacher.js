// import React, { useState } from "react";
// import './Teacher.css';
// function Teacher() {
//   const [teachers, setTeachers] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     age: "",
//     email: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.age || !formData.email) {
//       alert("Please fill in all fields.");
//       return;
//     }
//     const newTeacher = { ...formData, id: teachers.length + 1 };
//     setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
//     setFormData({
//       id: "",
//       name: "",
//       age: "",
//       email: ""
//     });
//   };

//   const handleDelete = (id) => {
//     setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== id));
//   };

//   return (
//     <div>
//       <h2>Teacher Management</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label> <br/>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         <br/> <br/>
//         <label>Age</label><br/>
//         <input type="number" name="age" value={formData.age} onChange={handleChange} />
//         <br /> <br/>
//         <label>Email</label><br/> 
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         <br /><br/>
//         <button type="submit">Add Teacher</button>
//       </form>
//       <h3 style={{color:"green"}}>Teacher List:</h3>
//       <ul>
//         {teachers.map((teacher) => (
//           <li key={teacher.id}>
//             {teacher.name} - {teacher.age} years old - {teacher.email} 
//             <button onClick={() => handleDelete(teacher.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Teacher;

import React, { useState } from "react";
import "./Teacher.css";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
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
    const newTeacher = { ...formData, id: teachers.length + 1 };
    setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
    setFormData({
      id: "",
      name: "",
      age: "",
      email: ""
    });
  };

  const handleDelete = (id) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== id));
  };

  const handleEdit = (id) => {
    const editedTeacher = teachers.find((teacher) => teacher.id === id);
    setFormData(editedTeacher);
  };

  return (
    <div>
      <h2>Teacher Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br/>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /> <br/>
        <label>Age</label><br/>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <br /><br/>
        <label>Email</label><br/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br/>
        <button type="submit">Add Teacher</button>
      </form>
      <h3 style={{ color: "green" }}>Teacher List:</h3>
      <ul type="none"  className="teacher-list">
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} - {teacher.age} years old - {teacher.email}
            <button className="edit-button" onClick={() => handleEdit(teacher.id)}>
              Edit
            </button> 
            <button onClick={() => handleDelete(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teacher;
