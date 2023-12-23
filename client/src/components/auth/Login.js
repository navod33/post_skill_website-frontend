import React from 'react';
import { Link } from 'react-router-dom';

const logout = () => {
  // Your logout logic here
  console.log('Logout logic'); // Replace this with your actual logout logic
};

export default function Login() {
  return (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
}
