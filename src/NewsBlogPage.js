import React from 'react';
import './NewsBlogPage.css';

const NewsBlogPage = () => {
  return (
    <div className="news-blog-page">
      <h2>City News & Blogs</h2>

      <div className="section">
        <h3>Latest News</h3>
        <div className="news-item">
          <h4>Community Garden Wins Award</h4>
          <p className="date">Published on: October 15, 2024</p>
          <p>Our local garden project has been recognized for its efforts in sustainability...</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="news-item">
          <h4>New Bike Lane Opens in Downtown</h4>
          <p className="date">Published on: November 10, 2024</p>
          <p>A new bike lane connecting key areas of the city is now open to the public...</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      <div className="section">
        <h3>Upcoming Events</h3>
        <div className="event-item">
          <h4>City Park Cleanup</h4>
          <p className="date">Date: November 20, 2024</p>
          <p>Join us for a cleanup drive at City Park. Volunteers are needed to make a difference...</p>
          <button className="register-btn">Register</button>
        </div>
        <div className="event-item">
          <h4>Annual Charity Walk</h4>
          <p className="date">Date: December 5, 2024</p>
          <p>Support the community by participating in our charity walk to raise funds for local causes...</p>
          <button className="register-btn">Register</button>
        </div>
      </div>

      <div className="section">
        <h3>Latest Blogs</h3>
        <div className="blog-item">
          <h4>Benefits of Organic Gardening</h4>
          <p className="date">Published on: October 18, 2024</p>
          <p>Growing your own organic vegetables can save money and improve your health...</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="blog-item">
          <h4>How to Reduce Your Carbon Footprint</h4>
          <p className="date">Published on: November 1, 2024</p>
          <p>Learn simple tips and tricks for reducing your carbon footprint and contributing to a healthier planet...</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsBlogPage;
