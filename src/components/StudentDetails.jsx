import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext'; 

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const [student, setStudent] = useState(null); 

  useEffect(() => {
    const foundStudent = students.find(s => s.id === parseInt(id)); 
    setStudent(foundStudent);
  }, [id, students]);

  if (!student) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="student-details">
      <h1>Student Details</h1>
      <div className="details-card">
        <h2>{student.name}</h2>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Phone Number:</strong> {student.phone}</p>
      </div>
      <div className="actions">
        <Link to={`/edit/${student.id}`} className="btn">Edit</Link>
        <Link to="/students" className="btn">Back to List</Link>
      </div>
    </div>
  );
};

export default StudentDetails;

