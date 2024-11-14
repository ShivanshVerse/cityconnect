import React, { useState, useEffect } from 'react';
import './App.css';
import videoSrc from './aaaa.mp4';

const HomePage = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const fullText = 'Welcome to CityConnect';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setWelcomeText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) clearInterval(interval);
    }, 100); // Adjust typing speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Local Background Video */}
      <div className="background-video">
        <video autoPlay loop muted className="video-player">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Content */}
      <div className="content-overlay">
        <header className="header">
          <h1 className="page-title">{welcomeText}</h1>
          <p>Connect with your community, share your passions, and make a difference.</p>
          <button className="join-button">Join Now</button>
        </header>

        <section className="explore-interests">
          <h2>Explore Interests</h2>
          <div className="interests">
            <button className="interest">Gardening</button>
            <button className="interest">Literature</button>
            <button className="interest">Music</button>
            <button className="interest">Art</button>
          </div>
        </section>

        <section className="latest-posts">
          <h2>Latest Posts</h2>
          <div className="post">
            <strong>Shruti Singh</strong> <span>Gardening</span>
            <p>Just planted some new roses in my garden!</p>
          </div>
          <div className="post">
            <strong>Shivansh</strong> <span>Literature</span>
            <p>Finished reading "To Kill a Mockingbird". What a masterpiece!</p>
          </div>
          <div className="post">
            <strong>Samridhi</strong> <span>Music</span>
            <p>Learning to play the guitar. Any tips?</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event">
            <strong>Local Book Club Meeting</strong> <span>Literature</span>
            <p>📅 2023-06-15 | 👥 12 attending</p>
          </div>
          <div className="event">
            <strong>Community Garden Day</strong> <span>Gardening</span>
            <p>📅 2023-06-20 | 👥 30 attending</p>
          </div>
          <div className="event">
            <strong>Open Mic Night</strong> <span>Music</span>
            <p>📅 2023-06-25 | 👥 25 attending</p>
          </div>
        </section>

        <section className="why-join">
          <h2>Why Join CityConnect?</h2>
          <p>Join CityConnect to meet new people, learn new things, and get involved in your community.</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
