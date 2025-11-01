import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Layout from './components/Layout';

function App() {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    console.log('Employee added:', newEmployee);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EmployeeForm onAdd={handleAddEmployee} />} />
        <Route path="/list" element={<EmployeeList employees={employees} />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Layout>
  );
}

export default App;