import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [totalDonated, setTotalDonated] = useState(1200); // Starting total donated amount
  const [goalAmount, setGoalAmount] = useState(5000); // Goal for the campaign
  const [donations, setDonations] = useState([
    { name: 'John Doe', amount: 50 },
    { name: 'Jane Smith', amount: 100 },
  ]);

  const handleDonation = (e) => {
    e.preventDefault();
    if (donationAmount > 0) {
      setTotalDonated(totalDonated + parseFloat(donationAmount));
      setDonations([...donations, { name: 'Anonymous', amount: parseFloat(donationAmount) }]);
      setDonationAmount('');
    }
  };

  const progressPercentage = (totalDonated / goalAmount) * 100;

  return (
    <div className="donation-page">
      <h2>Support Our Campaign</h2>
      <p>Help us reach our goal of $5000 to support local community initiatives.</p>

      {/* Donation Form */}
      <form onSubmit={handleDonation} className="donation-form">
        <label htmlFor="donationAmount">Enter Donation Amount ($)</label>
        <input
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Donate</button>
      </form>

      {/* Donation Progress */}
      <div className="donation-progress">
        <p>Total Donated: ${totalDonated} / ${goalAmount}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p>{Math.round(progressPercentage)}% of goal reached</p>
      </div>

      {/* Donation History */}
      <div className="donation-history">
        <h3>Recent Donations</h3>
        {donations.length > 0 ? (
          <ul>
            {donations.map((donation, index) => (
              <li key={index}>
                {donation.name}: ${donation.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No donations yet. Be the first to contribute!</p>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
