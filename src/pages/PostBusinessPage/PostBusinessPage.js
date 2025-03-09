import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostBusinessPage.css";

const PostBusinessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>📢 Post Your Laundry Business</h1>
      <p>
        Welcome to the **Post Business** section! This page will allow laundry business owners to **list their services, attract customers, and manage their business presence** on our platform.
      </p>

      <p>🚧 <strong>This feature is currently under development.</strong> 🚧</p>

      <p>
        Once launched, you will be able to:
        <ul>
          <li>📝 Register and add your laundry business details.</li>
          <li>📌 Showcase your services, location, and contact information.</li>
          <li>📸 Upload images of your shop and services.</li>
          <li>💬 Engage with potential customers.</li>
        </ul>
      </p>

      <p>We appreciate your patience as we work on this feature to enhance your experience. Stay tuned for updates! 🚀</p>

      {/* ✅ Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>⬅ Go Back to Home</button>
    </div>
  );
};

export default PostBusinessPage;
