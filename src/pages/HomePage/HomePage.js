import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../LocationPage/LocationContext';
import { useService } from '../ServicesPage/ServiceContext';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { location } = useLocation();
  const { service } = useService();

  return (
    <div className="homepage">
      <div className="header">
        <h2>Welcome to</h2>
        <h1>Laundry Laudge</h1>
        <p>Find the best laundry services near you!</p>
      </div>
      <div className="search-section">
        <button className="home-location-btn" onClick={() => navigate('/locations')}>
          {location} ▼
        </button>
        <button className="home-service-btn" onClick={() => navigate('/services')}>
          {service}
        </button>
      </div>
      <button className="proceed-button" onClick={() => navigate('/main')}>
        Let's Go! 🚀
      </button>
      <footer className="footer">
        © 2025 Laundry Laudge. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
