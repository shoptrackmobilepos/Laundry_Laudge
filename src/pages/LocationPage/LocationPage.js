import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from './LocationContext';
import './LocationPage.css';

const LocationPage = () => {
  const navigate = useNavigate();
  const context = useLocation();

  console.log(context);  // Check what the context actually contains

  const { setLocation } = context;

  const handleLocationSelect = (newLocation) => {
    setLocation(newLocation);
    navigate('/');
  };
  
  const regions = [
    "My location",
    "All Uganda",
    "Kampala",
    "Mukono",
    "Wakiso",
    "Eastern Region",
    "Kalangala",
    "Kayunga",
    "Kiboga",
    "Luwero",
    "Masaka",
    "Mityana",
    "Mpigi",
    "Mubende",
    "Nakasongola",
    "Northern Region",
    "Western Region"
  ];

  return (
    <div className="location-page">
      <input type="text" placeholder="Find region..." className="search-input"/>
      <ul className="region-list">
        {regions.map((region, index) => (
          <li key={index} onClick={() => handleLocationSelect(region)}>
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationPage;
