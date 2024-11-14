import React from 'react';
import './Profile.css';
import profilePicture from './OIP.jpeg'; // Import the profile picture from src

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div className="profile-details">
            <h1 className="profile-name">Shruti Singh</h1>
            <p className="profile-username">@silvrfur</p>
            <p className="profile-bio">Community enthusiast | Nature lover | Always learning</p>
            <p className="profile-location">📍 Jamshedhpur, India</p>
            <p className="profile-stats">10 Followers | 56 Following</p>
          </div>
          <div className="profile-actions">
            <button className="button edit-profile">Edit Profile</button>
            <button className="button settings">Settings</button>
            <button className="button logout">Logout</button>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="activity-card">
          <h2>Activity</h2>
          <div className="activity-tabs">
            <button className="active-tab">Recent Activity</button>
            <button>Upcoming Events</button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <p>Community Garden Day</p>
              <span>2023-06-15</span>
            </div>
            <div className="activity-item">
              <p>Local Library Fund</p>
              <span>2023-06-10</span>
            </div>
            <div className="activity-item">
              <p>Shared: '5 Tips for Urban Gardening'</p>
              <span>2023-06-05</span>
            </div>
          </div>
        </div>

        <div className="interests-card">
          <h2>Interests</h2>
          <div className="interests">
            <span className="interest-tag">Gardening</span>
            <span className="interest-tag">Literature</span>
            <span className="interest-tag">Community Service</span>
            <span className="interest-tag">Art</span>
          </div>
        </div>

        <div className="stats-card">
          <h2>Community Stats</h2>
          <p>Reputation Score: 4.8/5</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <p>Events Completed: 15</p>
          <p>Events Organized: 3</p>
          <p>Community Level: 7</p>
        </div>

        <div className="achievements-card">
          <h2>Achievements</h2>
          <div className="achievements">
            <div className="achievement">
              <span className="achievement-icon">🌱</span>
              <p>Green Thumb</p>
              <p>Participated in 5 gardening events</p>
            </div>
            <div className="achievement">
              <span className="achievement-icon">📚</span>
              <p>Bookworm</p>
              <p>Attended 10 book club meetings</p>
            </div>
            <div className="achievement">
              <span className="achievement-icon">👥</span>
              <p>Community Leader</p>
              <p>Organized 3 community events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
