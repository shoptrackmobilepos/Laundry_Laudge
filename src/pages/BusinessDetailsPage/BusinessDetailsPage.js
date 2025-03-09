import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './BusinessDetailsPage.css';

const BusinessDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const business = location.state?.business;

    if (!business) {
        return <h2>Business not found</h2>;
    }

    // WhatsApp & Call Links
    const whatsappLink = `https://wa.me/${business.contact}`;
    const callLink = `tel:${business.contact}`;

    // Function to Show Development Message
    const handleOrderClick = () => {
        alert("This feature is still under development.");
    };

    return (
        <div className="business-details-page">
            <div className="details-container">
                <img src={business.image} alt={business.name} className="details-image" />
                <div className="details-info">
                    <h1>{business.name}</h1>
                    <p><strong>📍 Location:</strong> {business.location}</p>
                    <p><strong>📞 Contact:</strong> {business.contact}</p>
                    <p><strong>⏰ Working Hours:</strong> {business.hours}</p>

                    <h3>🛠️ More Services:</h3>
                    <ul>
                        {business.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>

                    {/* ✅ WhatsApp & Call Buttons */}
                    <div className="contact-buttons">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                            📲 Chat on WhatsApp
                        </a>
                        <a href={callLink} className="call-button">
                            📞 Call Now
                        </a>
                    </div>

                    {/* ✅ Make Order Button (Currently Shows Alert) */}
                    <button className="order-button" onClick={handleOrderClick}>
                        🛒 Make Order
                    </button>

                    {/* ✅ Back Button to return to Home */}
                    <button className="back-button" onClick={() => navigate(-1)}>⬅ Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetailsPage;
