// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import all page components
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EventPage from './EventPage';
import DonationPage from './DonationPage';
import NewsBlogPage from './NewsBlogPage';
import ProfilePage from './ProfilePage';
import FeedPage from './FeedPage';

// Import CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Menu */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/donations" className="nav-link">Donations</Link>
          <Link to="/news-blog" className="nav-link">News & Blogs</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/feed" className="nav-link">Feed</Link>
          <Link to="/login" className="nav-link login-link">Login</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/news-blog" element={<NewsBlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
