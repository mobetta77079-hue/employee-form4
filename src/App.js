import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeForm onAdd={handleAddEmployee} />
              <EmployeeList employees={employees} />
            </>
          }
        />
        <Route
          path="/employees/:id"
          element={<EmployeeDetail employees={employees} />}
        />
      </Routes>
    </div>
  );
}

export default App;