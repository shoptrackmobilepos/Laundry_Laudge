import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessCard.css';

const BusinessCard = ({ business }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/business/${business.id}`, { state: { business } });
    };

    return (
        <div className="business-card" onClick={handleCardClick}>
            <img src={business.image} alt={business.name} className="business-image" />
            <div className="business-info">
                <h2 className="business-name">{business.name}</h2>
                <p className="business-location">{business.location}</p>
                <p className="business-contact">{business.contact}</p>
                <p className="business-hours">{business.hours}</p>

                {/* ✅ Displaying Services */}
                <div className="business-services">
                    <h3>Services Offered:</h3>
                    <ul>
                        {business.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
