import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useService } from './ServiceContext';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { setService } = useService();

  const handleServiceSelect = (newService) => {
    setService(newService);
    navigate('/');
  };

  const services = [
    "All Services",
    "Pickup & Wash", 
    "Laundry",
    "Dry Cleaning",
    "Ironing",
    "Special Care",
    "Repair",
    "Delivery",
    "Tailoring",
    "Leather Care",
    "Stain Removal"
  ];
  

  return (
    <div className="services-page">
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} onClick={() => handleServiceSelect(service)}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
