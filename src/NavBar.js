// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/donations">Donations</Link>
      <Link to="/news-blog">News & Blogs</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
