import React, { createContext, useState } from 'react';
import studentData from '../students.json'; // Adjust the import path as needed
import PropTypes from 'prop-types';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  // Initialize state with data from the JSON file
  const [students, setStudents] = useState(studentData);

  // Add additional functions to manage students as needed
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id, updatedInfo) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, ...updatedInfo } : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
