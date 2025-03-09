import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../../pages/LocationPage/LocationContext';
import { useService } from '../../pages/ServicesPage/ServiceContext';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { location } = useLocation();
    const { service } = useService();

    return (
        <header className="headers">
            <button className="header-button" onClick={() => navigate('/locations')}>
                {location} ▼
            </button>
            <button className="header-button" onClick={() => navigate('/services')}>
                {service}
            </button>
        </header>
    );
};

export default Header;
