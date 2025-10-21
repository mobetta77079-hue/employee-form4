import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  // Handle input changes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submission
  handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted Employee:', this.state);
  this.props.onAdd(this.state); // Pass data to App.js
  this.setState({
    name: '',
    email: '',
    title: '',
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
          name="title"
          placeholder="Job Title"
          value={this.state.title}
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