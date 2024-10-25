import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function StudentRegistration() {
  const { addStudent } = useContext(StudentContext);
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation (you can expand this as needed)
    if (!student.name || !student.email || !student.age || !student.class || !student.address || !student.phone) {
      alert('Please fill in all fields');
      return;
    }

    addStudent(student);
    // Reset form after submission
    setStudent({
      name: '',
      email: '',
      age: '',
      class: '',
      address: '',
      phone: ''
    });
  };

  return (
    <div className="registration-container">
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          required
          className="form-input"
        />
        <input
          type="text"
          name="class"
          value={student.class}
          onChange={handleChange}
          placeholder="Class"
          required
          className="form-input"
        />
        <input
          type="text"
          name="address"
          value={student.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="form-input"
        />
        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">Register Student</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
