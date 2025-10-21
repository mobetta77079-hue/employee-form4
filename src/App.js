import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load data from local storage on first render
  useEffect(() => {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
      setEmployees(JSON.parse(storedData));
    }
  }, []);

  // Save data to local storage
  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  // Add new employee and update local storage
const addEmployee = (employee) => {
  const updatedEmployees = [...employees, employee];
  setEmployees(updatedEmployees);
  saveData(updatedEmployees);
};

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Form</h1>
      <EmployeeForm onAdd={addEmployee} />
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;