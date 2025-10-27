import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

function EmployeeList({ employees }) {
  console.log("Received employees:", employees);

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.EmployeeId} className="employee-item">
              <Link to={`/employees/${employee.EmployeeId}`}>
                <strong>{employee.name}</strong>
              </Link>
              <div className="employee-details">
                <div>Email: {employee.email}</div>
                <div>Job Title: {employee.jobTitle}</div>
                <div>Department: {employee.department}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;