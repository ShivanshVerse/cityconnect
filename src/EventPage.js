import React, { useState } from 'react';
import './EventPage.css';

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('grid');
  const events = [
    { title: 'Bistpur Meetup', date: '2023-06-15 at 19:00', location: 'bistupur, kadma(ch area, farm area)', attendees: 12, description: 'Join us for a discussion of "To Kill a Mockingbird" by Harper Lee.' },
    { title: 'Community Garden Day', date: '2023-06-20 at 10:00', location: ' telco(k2, g2)', attendees: 30, description: 'Help plant new flowers and vegetables in our community garden.' },
    { title: 'Open Mic Night', date: '2023-06-25 at 20:00', location: 'sakchi, gamarhia', attendees: 25, description: 'Showcase your musical talents or enjoy performances by local artists.' },
    { title: 'Art in Golf City', date: '2023-07-02 at 14:00', location: 'nildih (golf course street, lake street)', attendees: 40, description: 'An outdoor art exhibition featuring local artists. Bring your own supplies to participate!' }
  ];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-page">
      <h2 className="page-title">Upcoming Events</h2>
      
      <div className="event-controls">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="view-toggle">
          <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>Grid View</button>
          <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>List View</button>
        </div>
      </div>
      
      <div className={`event-cards ${view}`}>
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-info">
              <span>{event.date}</span>
              <span>{event.location}</span>
              <span>{event.attendees} attending</span>
            </div>
            <button className="rsvp-button">RSVP</button>
          </div>
        ))}
      </div>
      
      <footer className="footer">
        © 2023 CityConnect. All rights reserved.
      </footer>
    </div>
  );
};

export default EventPage;
