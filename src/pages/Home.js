import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <main>
      <h2>Welcome to the Employee Portal</h2>
      <nav>
        <Link to="/form">📝 Fill Out Employee Form</Link>
        <br />
        <Link to="/list">📋 View Employee List</Link>
      </nav>
    </main>
  );
};

export default Home;