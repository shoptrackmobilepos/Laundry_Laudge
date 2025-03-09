import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaStore, FaClipboardList, FaClipboardCheck, FaUser } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <button className="footer-button" onClick={() => navigate('/main')}>
                <FaHome size={24} />
                <span>Home</span>
            </button>
            <button className="footer-button" onClick={() => navigate('/post-business')}>
                <FaStore size={24} />
                <span>Post Business</span>
            </button>
            <button className="footer-button" onClick={() => navigate('/orders')}>
                <FaClipboardList size={24} />
                <span>Orders</span>
            </button>
            <button className="footer-button" onClick={() => navigate('/requested')}>
                <FaClipboardCheck size={24} />
                <span>Requested</span>
            </button>
            <button className="footer-button" onClick={() => navigate('/profile')}>
                <FaUser size={24} />
                <span>Profile</span>
            </button>
        </footer>
    );
};

export default Footer;
