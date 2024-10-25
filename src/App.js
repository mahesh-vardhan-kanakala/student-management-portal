import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentRegistration from './components/StudentRegistration';
import StudentDetails from './components/StudentDetails';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/students/:id" element={<StudentDetails />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
