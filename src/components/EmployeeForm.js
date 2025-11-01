import React from 'react';
import '../styles/layout.css';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      jobTitle: '',
      department: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      EmployeeId: Date.now(),
      name: this.state.name,
      email: this.state.email,
      jobTitle: this.state.jobTitle,
      department: this.state.department
    };
    console.log('Submitted Employee:', newEmployee);
    this.props.onAdd(newEmployee);
    this.setState({
      name: '',
      email: '',
      jobTitle: '',
      department: ''
    });
  };

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={this.state.jobTitle}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={this.state.department}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default EmployeeForm;